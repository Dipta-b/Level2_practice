//Arrow and normal function

//?Sum of two number
//return type o bole deya hoiche 
function add(num1: number, num2: number): number {
    return num1 + num2;
}

add(2, 5);

const sub = (num1: number, num2: number): number => {
    return num1 - num2;
}
sub(10, 4);

//object => function => method
const proUser = {
    name: "dipta",
    balance: 10,
    addBalance(value: number): number {
        return this.balance + value;
    }
}

console.log(proUser.addBalance(100))

//?Callback Function

const arr: number[] = [1, 3, 6];

const squareArray = arr.map((element: number): number => element * element)