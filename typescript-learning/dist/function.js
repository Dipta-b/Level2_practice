"use strict";
//Arrow and normal function
Object.defineProperty(exports, "__esModule", { value: true });
//?Sum of two number
//return type o bole deya hoiche 
function add(num1, num2) {
    return num1 + num2;
}
add(2, 5);
const sub = (num1, num2) => {
    return num1 - num2;
};
sub(10, 4);
//object => function => method
const proUser = {
    name: "dipta",
    balance: 10,
    addBalance(value) {
        return this.balance + value;
    }
};
console.log(proUser.addBalance(100));
//# sourceMappingURL=function.js.map