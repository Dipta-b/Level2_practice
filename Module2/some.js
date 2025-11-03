const num = [1, 2, 3, 4, 5];
const even = num.some((nu) => nu % 2 === 0);
console.log(even)

const currentUserRole = ["user", "editor"];
const featureAccessRole = ["admin", "manager"];
const canAccess = currentUserRole.some(rol => featureAccessRole.includes(rol))
console.log(canAccess)


