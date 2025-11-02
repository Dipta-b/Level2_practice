const users = [
    { id: 101, name: "Alice" },
    { id: 102, name: "Bob" },
    { id: 103, name: "Charlie" },
];


//want to create a new array of users where each user obj contains a posts array of thei own posts

const posts = [
    { id: 1, userId: 102, title: "My first post" },
    { id: 2, userId: 101, title: "React Hooks" },
    { id: 3, userId: 101, title: "Data Structures" },
    { id: 4, userId: 103, title: "CSS is fun" },
    { id: 5, userId: 102, title: "Node.js streams" },
];


const postByUserId = posts.reduce((table, post) => {
    const { userId } = post;
    //agae theke ache kina check korbo, na thakle array banay nibo then push kore dibo 
    if (!table[userId]) {
        table[userId] = []
    }
    //key=value
    table[userId].push(post);
    return table;
}, {})
console.log(postByUserId)
console.log('-----------------')
const userWithPosts = users.map((user) => {
    return {
        ...user,
        //in this line posts userId and users id merged
        posts: postByUserId[user.id] || []
    }
})

console.log(JSON.stringify(userWithPosts))