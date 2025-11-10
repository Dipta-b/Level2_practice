//nullable
const getUser = (input: string | null) => {
    if (input) {
        console.log(`From db:${input}`);
    } else {
        console.log('Drom DB: ALL USER');
    }
}

getUser('Dipta')
getUser(null)


//Unknown Types
const discountcalculator = (input: unknown) => {
    if (typeof input === 'number') {
        const disconetedPrice = input * 0.1;
        console.log(disconetedPrice);
    } else if (typeof input === 'string') {
        const [disconetedPrice] = input.split(" ");
        console.log(Number(disconetedPrice) * 0.1);
    } else {
        console.log(('Wrong Input'));
    }
}
discountcalculator(100)
discountcalculator('100 TK')
discountcalculator(null)

//
const throwError = (msg: string): never => {
    throw new Error(msg);
}
console.log('never msg');