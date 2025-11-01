const numbers = [1, 455, 40, 10, 78]
const fruits = ["Banana", "apple,", "Cherry", "aaaple", "data"]

console.log(fruits.sort((a, b) => a.localeCompare(b)));

const arr = [1, 2, [4, 3, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr.flat(Infinity));

const tagsForm = [
    ["js", "react", "css"],
    ["node", "epress"],
    ["css", "html", "react"]
]

const filteredTags = [...new Set(tagsForm.flat())]
console.log(filteredTags)