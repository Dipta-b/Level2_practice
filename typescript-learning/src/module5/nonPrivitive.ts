//*Array and Object are non primitive data type

//

let bazarList: string[] = ["Eggs", "Milk", "Fish"];

let mixedArray: (string | number)[] = ['Eggs', 12, "milk", 3,]
mixedArray.push(12, "apple");

let coordinates: [number, number] = [20, 30]
let couple: [string, string] = ["husband", "Wife"];
//pattern sensetive
let nameAndId: [string, number] = ["Dipta", 2];
let destination: [string, string, number] = ["Dhaka", "ctg", 5];

//Reference type : Object type

//!jodi mid name na thake karo tahole type e etake optional kore dibo;type define korle obosshoi dite hobe ,require hoye jay
//*string ta jpdi type hoy tahole eta literal type bole
//?readonly egulake bole access modifier(unchangeable)


const user: { firstName: string; middleName?: string; lastName: string; isMarried: boolean; organization: "Programmin Hero"; readonly onlyRead: string } = {
    firstName: 'Sree',
    middleName: 'Dipta',
    lastName: 'Banik',
    isMarried: false,
    organization: "Programmin Hero",
    onlyRead: "Hurray TypeScript is here...."
}


//*(user.) likhle user er moddhe ja ache shob bole dibe