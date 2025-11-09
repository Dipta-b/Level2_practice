"use strict";
//*Array and Object are non primitive data type
Object.defineProperty(exports, "__esModule", { value: true });
//
let bazarList = ["Eggs", "Milk", "Fish"];
let mixedArray = ['Eggs', 12, "milk", 3,];
mixedArray.push(12, "apple");
let coordinates = [20, 30];
let couple = ["husband", "Wife"];
//pattern sensetive
let nameAndId = ["Dipta", 2];
let destination = ["Dhaka", "ctg", 5];
//Reference type : Object type
//!jodi mid name na thake karo tahole type e etake optional kore dibo;type define korle obosshoi dite hobe ,require hoye jay
//*string ta jpdi type hoy tahole eta literal type bole
//?readonly egulake bole access modifier(unchangeable)
const user = {
    firstName: 'Sree',
    middleName: 'Dipta',
    lastName: 'Banik',
    isMarried: false,
    organization: "Programmin Hero",
    onlyRead: "Hurray TypeScript is here...."
};
//*(user.) likhle user er moddhe ja ache shob bole dibe
//# sourceMappingURL=nonPrivitive.js.map