import { ADDRGETNETWORKPARAMS } from "node:dns";
import { CommentStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const createComment = async (payload: {
    content: string;
    authorId: string;
    postId: string;
    parentId?: string;
}) => {

    //post exists kore kina
    const postData = await prisma.post.findUniqueOrThrow({
        where: {
            id: payload.postId
        }
    })
    //parent ta exists kore kina 
    if (payload.parentId) {
        const parentData = await prisma.comment.findUniqueOrThrow({
            where: {
                id: payload.parentId
            }
        })
    }


    const result = await prisma.comment.create({
        data: payload
    })

    return result;

}


const getCommentById = async (commentId: string) => {

    return await prisma.comment.findUnique({
        where: {
            id: commentId
        },
        include: {
            post: {
                select: {
                    id: true,
                    title: true,
                    viewa: true
                }
            }
        }
    })

}

const getCommentsByAuthor = async (authorId: string) => {

    return await prisma.comment.findMany({
        where: {
            authorId
        },
        orderBy: {
            createdAt: "desc"
        },
        include: {
            post: {
                select: {
                    id: true,
                    title: true
                }
            }
        }
    })

}

//1. nijer cmnt delete korte parbe
//2.Login thakte hobe
//3.tar  nijer commment kina sheta check korte hobe

const deleteComment = async (commentId: string, authorId: string) => {

    const commentData = await prisma.comment.findFirst({
        where: {
            id: commentId,
            authorId
        },
        select: {
            id: true
        }
    })

    if (!commentData) {
        throw new Error("Not exists")
    }


    const result = await prisma.comment.delete({
        where: {
            id: commentData.id
        }
    })
    return result
}


const updateComment = async (commentId: string, data: { content?: string, status?: CommentStatus }, authorId: string) => {

    const commentData = await prisma.comment.findFirst({
        where: {
            id: commentId,
            authorId
        },
        select: {
            id: true
        }
    })

    if (!commentData) {
        throw new Error("Not exists")
    }


    return await prisma.comment.update({
        where: {
            id: commentId,
            authorId
        },
        data
    })


}


const moderateComment = async (id: string, data: { status: CommentStatus }) => {

    const commentData = await prisma.comment.findUniqueOrThrow({
        where: { id },
        select: {
            id: true,
            status: true
        }
    })


    return await prisma.comment.update({
        where: { id },
        data
    })
    if (commentData.status === data.status) {
        throw new Error(`Your provided status ${data.status} is already updated`);
    }

}

export const CommentService = {
    createComment,
    getCommentById,
    getCommentsByAuthor,
    deleteComment,
    updateComment,
    moderateComment,
}