const USER_COUNT = 500000;
let usersA = [];
let usersB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` })

for (let i = 0; i < USER_COUNT; i++) {
    usersA.push(createUser(i))
    usersB.push(createUser(i + 25000));
}



const commonFrinedsList = (usersA, usersB) => {
    const commonFriends = [];

    const idListA = new Set(usersA.map(user => user.id));
    usersB.forEach((usersB) => {
        if (idListA.has(usersB.id)) {
            commonFriends.push(usersB);
        }
    })
}