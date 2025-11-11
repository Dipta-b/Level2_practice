//*Interface shudhumatro object type er shathe kaj korbe.jmon array, object, function

interface Iuser {
    name: string;
    age: number;
}

type Role = {
    role: "admin" | "user";
};

interface IuserWithRole extends Iuser {
    role: 'admin' | 'user'
}

//By Function interface

interface IAdd {
    (num1: number, num2: number): number
}
type Add = (num1: number, num2: number) => number
const add: Add = (num1, num2) => num1 + num2;

//by array
type Friends = string[]

interface IFriends {
    [index: number]: string
}
const friends: IFriends = ['A', 'B']
