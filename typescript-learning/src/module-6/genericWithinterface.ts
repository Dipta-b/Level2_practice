//rich er bike nai tai optional er jonno bike ke null deya hoiche, na thakleo problem nai.Null dibe default hoishebe

interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        relasedYear: string;
    };
    smartWatch: T;
    bike?: X;
}


interface brandCharaWatch {
    heartRate: string;
    stopWatch: boolean;
}

interface richwatch {
    heartRate: string;
    callsupport: boolean;
    calculator: boolean;
    aiFeauture: boolean;
}

const poorDeveloper: Developer<brandCharaWatch, { brand: 'Gixer', engineCapacity: '200cc' }> = {
    name: 'Poor',
    salary: 20,
    device: {
        brand: 'Lenevo',
        model: 'A21',
        relasedYear: '2010'
    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true
    }
}


const richDeveloper: Developer<richwatch> = {
    name: 'Poor',
    salary: 120,
    device: {
        brand: 'HP',
        model: 'X32',
        relasedYear: '2025'
    },
    smartWatch: {
        heartRate: '200',
        calculator: true,
        callsupport: true,
        aiFeauture: false

    }
}


