//* ? : ternary operator
//* ?? : nullish coalescing operator(null othoba undefind er upore kaj korbe)
//* ?. optional chainging

//!IF else
const eligibility = (age: number) => {
    if (age >= 21) {
        console.log('You are eligible')
    }
    else {
        console.log('not eligible')
    }
}
eligibility(21)

//! Ternary Operator
const eligibilites = (age: number) => {
    const result = age >= 21 ? 'you are eligible' : 'not eligible';
    console.log(result)
}
eligibilites(16)

//! Nullish operator (Applicable in only null or undefine).Undefined or null holae Light theme e kaj korbe. Jodi userTheme null/undef chara onno kuichu hoy tahole oita true hobe
const userTheme = undefined;
const selectedTheme = userTheme ?? 'Light theme';
console.log(selectedTheme)


const isAuthenticated = null;

const resWithTernary = isAuthenticated ? isAuthenticated : 'You are guest user';

const resuWithNullish = isAuthenticated ?? 'you are guest';

console.log({ resWithTernary }, { resuWithNullish });













