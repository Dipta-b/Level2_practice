//keyof :type operator


type RichPeopleVehicle = {
    car: string; //key:value
    bikr: string;
    bus: string;
};

type MyVehicle1 = 'bike' | 'car' | 'bus';

type MyVehicle2 = keyof RichPeopleVehicle


//! keyof constraints

const user = {
    id: 22,
    name: 'Dipta',
    address: {
        city: 'dhaka'
    },
}

const myId = user["id"]


const getPropertyFromObject = (object: object, key: string) => {
    return object[key]
}