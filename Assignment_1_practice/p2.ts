type TypeOfTheValues = string | number[]
function getLength(value: TypeOfTheValues) {
    if (Array.isArray(value)) {
        const aryLenght: number = value.length
        return aryLenght;
    }
    else {
        return value.length;
    }
}

