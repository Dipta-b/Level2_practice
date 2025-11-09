type User = {
    id: number,
    name: {
        firstName: string;
        lastName: string;
    },
    gender: 'male' | 'female',
    contactNumber: string,
    address: {
        division: string;
        city: string
    }
}


const user: User = {
    id: 21,
    name: {
        firstName: 'Dipta',
        lastName: 'Banik'
    },
    gender: 'male',
    contactNumber: '012448',
    address: {
        city: 'Dhaka',
        division: 'cumilla'
    }
}

type Addfunc = (num1: number, num2: number) => number
const add: Addfunc = (num1, num2) => num1 + num2