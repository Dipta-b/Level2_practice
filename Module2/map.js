const course1 = { name: "p - hero" };
const course2 = { name: "p - hero-2" };
const map = new Map();
// map.set(1, "p-Hero ");
map.set(course1, { id: "level1" });
map.set(course2, { id: "level2" });

console.log(map.has(course1))
map.forEach((key, value) => {
    console.log("KEY", key, "Value", value)
})
console.log("keys", [...map.keys()]);
console.log("values", [...map.values()]);

for (let key of map.keys()) {
    console.log("keys by for of", key)
}

for (let value of map.values()) {
    console.log("values by for of", value)

}