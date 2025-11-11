const createArrayWithString = (value: string) => [value]

const createArrayWithNumber = (value: number) => [value]



//*Shurur from here
const createArrayWithGeneric = <T>(value: T) => {
    return [value];
}

const arrString = createArrayWithGeneric("Dipta");
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
    id: 123,
    name: 'phero'
});

//tuple

const createArrayWityTupleWithgeneric = <X, Y>(param1: X, param2: Y) => {
    return [param1, param2];
}

const res1 = createArrayWityTupleWithgeneric('dipta', 222);
const res2 = createArrayWityTupleWithgeneric(234, {
    name: 'dipt'
})

//* 
const addStudentToCourse = <T>(studentinfo: T) => {
    return {
        course: 'Next level',
        ...studentinfo,
    }
}


const student1 = {
    id: 12,
    name: 'di[pta',
    hasPen: true,
}
const student2 = {
    id: 2,
    name: 'dipannita',
    hascar: true,
    isSingle: false,
}






