import { count } from "node:console";
import { CommentStatus, Post, PostStatus } from "../../../generated/prisma/client";
import { PostWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";
import { promise } from "better-auth/*";

const createpost = async (data: Omit<Post, "id" | "createdAt" | "updatedAt" | "authorId">, userId: string) => {
    const result = await prisma.post.create({
        data: {
            ...data,
            authorId: userId
        }
    })
    return result;
}


const getAllPosts = async ({ search, tags, isFeatured, status, page, limit, skip, sortBy, sortOrder }: { search: string | undefined, tags: string[] | [], isFeatured: boolean | undefined, status: PostStatus | undefined, page: number, limit: number, skip: number, sortBy: string, sortOrder: string }) => {

    const andConditions: PostWhereInput[] = []

    if (search) {
        andConditions.push({
            OR: [
                {
                    title: {
                        contains: search!,
                        mode: "insensitive"
                    }
                },
                {
                    content: {
                        contains: search!,
                        mode: "insensitive"
                    }
                },
                {
                    //tags array string er bhitore ejonno has diye kora hocche.
                    tags: {
                        has: search!
                    }
                }
            ]
        },)
    }

    if (tags.length > 0) {
        andConditions.push({
            tags: {
                hasEvery: tags as string[]
            }
        })
    }

    if (typeof isFeatured === 'boolean') {
        andConditions.push({
            isFeatured
        })
    }

    if (status) {
        andConditions.push({
            status
        })
    }

    const allPost = await prisma.post.findMany({
        take: limit,
        skip,
        where: {
            //*Ekhon duita or and tag er bhitorer gula duitai jodi dei duitai jeno kaj kore and na dile jeno kaj na kore etar jonno  OR er agae ei condition gula dite hobe

            //OR use kora ektao true hoilei jeno kaj kore.
            //tags ek er odhik holae
            AND: andConditions

        },
        orderBy: {
            [sortBy]: sortOrder
        },
        include: {
            _count: {
                select: { comments: true }
            }
        }
    });

    const total = await prisma.post.count({
        where: {
            AND: andConditions
        },
    })


    return { data: allPost, pagination: total, page, limit, totalPages: Math.ceil(total / limit) };

}



const getpostById = async (postId: string) => {

    //ekhane $transaction er moddhe kora hoiche karon ekta error hoile jeno ektao kaj na kore, full error dey. na hole seen koral kintu update view hoito na ejonno
    return await prisma.$transaction(async (tx) => {
        await tx.post.update({
            where: {
                id: postId
            },
            data: {
                //eta views hoito, prisma schema te typing mistake er jponn erokom hoiche
                viewa: {
                    increment: 1
                }
            }
        })

        const postData = await tx.post.findUnique({
            where: {
                id: postId
            },
            include: {
                comments: {
                    where: {
                        parentId: null,
                        status: CommentStatus.APPROVED
                    },
                    orderBy: {
                        createdAt: "desc"
                    },
                    include: {
                        replies: {
                            where: {
                                status: CommentStatus.APPROVED
                            },
                            orderBy: {
                                createdAt: "asc"
                            },
                            include: {
                                replies: true
                            }
                        }
                    }
                },
                _count: {
                    select: {
                        comments: true
                    }
                }
            }
        })
        return postData
    })

}



const getMyPost = async (authorId: string) => {

    //status active na thakle post show korabo na

    const userInfo = await prisma.user.findUniqueOrThrow({
        where: {
            id: authorId,
            status: "ACTIVE"
        },
        select: {
            id: true,

        }
    })

    const result = await prisma.post.findMany({
        where: {
            authorId
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            _count: {
                select: {
                    comments: true
                }
            }
        }
    })

    //post count korar one way
    // const total = await prisma.post.count({
    //     where: {
    //         authorId
    //     }
    // })

    //post count korar second way
    const total = await prisma.post.aggregate({
        _count: {
            id: true
        },
        where: {
            authorId
        },
    })

    return { data: result, total };

}

//partial prisma theke ashche, shob data update kora lage na ejonno partial ise kore
const updatePost = async (postId: string, data: Partial<Post>, authorId: string, isAdmin: boolean) => {

    //first kaj : post find 
    //2. post er  author id er shathe ekhaner auhtor id er shathe mil ache kina dekha

    //*User shudhu nijer comment update korte parbe , is Featured update korte parbe na
    //*Admin shobar post update korte parbe

    const postData = await prisma.post.findUniqueOrThrow({
        where: {
            id: postId
        },
        select: {
            id: true,
            authorId: true
        }
    })
    if (postData.authorId !== authorId && !isAdmin) {
        throw new Error("You are not the owner or creator of the post")
    }
    //user holae isFeatured ta update korte parbe na
    if (!isAdmin) {
        delete data.isFeatured
    }

    const result = await prisma.post.update({
        where: {
            id: postData.id
        },
        data
    })
    return result;

}



//! role ta user holae user crt delete korte parbe r jdi admin hoy shae shobar post delete korte parbe

const deletePost = async (postId: string, authorId: string, isAdmin: boolean) => {

    const postData = await prisma.post.findUniqueOrThrow({
        where: {
            id: postId
        },
        select: {
            id: true,
            authorId: true
        }
    })

    if (postData.authorId !== authorId && !isAdmin) {
        throw new Error("You are not the owner or creator of the post")
    }

    return await prisma.post.delete({
        where: {
            id: postId
        }
    })

}

const getStats = async () => {
    //?Post count, published posts, total comments, total views

    //* Alada alada query mane post and comment tai transaction use korte hobe



    return await prisma.$transaction(async (tx) => {

        const [totalPosts, draftPosts, archivePosts, publishedPosts, totalComments, approvedComment, totalUsers, adminCount, userCount, totalView] = await Promise.all([
            await tx.post.count(),
            await tx.post.count({
                where: {
                    status: PostStatus.PUBLISHED
                }
            }),
            await tx.post.count({
                where: {
                    status: PostStatus.DRAFT
                }
            }),
            await tx.post.count({
                where: {
                    status: PostStatus.ARCHIVED
                }
            }),
            await tx.comment.count(),
            await tx.comment.count({
                where: {
                    status: CommentStatus.APPROVED
                }
            }),
            await tx.user.count(),
            await tx.user.count({
                where: {
                    role: "ADMIN"
                }
            }),
            await tx.user.count({
                where: {
                    role: "USER"
                }
            }),
            await tx.post.aggregate({
                _sum: {
                    viewa: true
                }
            })

        ])



        return {
            totalPosts,
            publishedPosts,
            draftPosts,
            archivePosts,
            totalComments,
            approvedComment,
            totalUsers,
            adminCount,
            userCount,
            totalView: totalView._sum.viewa,

        }
    })
}



export const PostService = {
    createpost,
    getAllPosts,
    getpostById,
    getMyPost,
    updatePost,
    deletePost,
    getStats
};