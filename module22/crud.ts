import { prisma } from "./lib/prisma";

async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Dipta Banik",
    //         email: "dipta@example.com",

    //     }
    // })
    // console.log("User Created:", createUser);

    //create a post for a user id =1

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "This is title",
    //         content: "This is content",
    //         authorId: 1
    //     }
    // })

    // console.log("Post Created:", createPost);

    //create profile

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "This is my bio",
    //         userId: 1
    //     }
    // })

    // console.log("Profile Created:", createProfile);

    //Read all useers

    // const users = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profile: true
    //     }
    //     select: {
    //         posts: true,
    //         profile: true
    //     }
    // });

    //update user dara
    // const updateUser = await prisma.profile.update({
    //     where: {
    //         userId: 1
    //     },
    //     data: {
    //         bio: "Dipta banik will be a software engineer",
    //         dateOfBirth: "2026-01-01T13:34:37.162Z"
    //     },
    //     select: {
    //         id: true,
    //         bio: true,
    //         user: {
    //             select: {
    //                 name: true,
    //                 id: true
    //             }
    //         }
    //     }
    // })

    // console.log("Updated User:", updateUser);

    //delete user
    // const deleteUser = await prisma.user.delete({
    //     where:{
    //         id:1
    //     }
    // })

    const updateUser = await prisma.user.upsert({
        where: {
            email: "dipta@example.com"
        },
        update: {
            name: "Dipta Banik Updated"
        }, create: {
            name: "Sree Duipta Banik",
            email: "dipta@example.com"
        }
    })

    console.log("Upserted User:", updateUser);


}

run();