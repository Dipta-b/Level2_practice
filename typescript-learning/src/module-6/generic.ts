//generic mane dynamically generalized kore fela
//* Array er moddhe dynamically string/number/boolean dite parlei kaj ta hoye jabe

type GenericArray<value> = Array<value>

// const friends: Array<string> = ['A', 'B', 'C'] ebhabeo define kora jay
const friends: GenericArray<string> = ['A', 'B', 'C']
// const friends: string[] = ['A', 'B', 'C']

const rollNum: GenericArray<number> = [2, 4, 66];
// const rollNum: number[] = [2, 4, 66];

const isEligible: GenericArray<boolean> = [true, false, true]
// const isEligible: boolean[] = [true, false, true]

//?Tuple

type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ['20', '30'];

//?array of Object er moddhe

type User = { name: string; age: number; }
const userList: GenericArray<User> = [
    {
        name: 'Dipta',
        age: 22
    },
    {
        name: 'Banik',
        age: 24
    },
    // {
    //     // age: 34,
    //     // color: 'black'
    // },
]

//egula use korte parbo na karon generic er moddhe nai


