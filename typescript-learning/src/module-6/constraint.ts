//* constaraint mane strict rules deya
//?   Example: dhori ekta student er nam o id nei just watch ache takae amra badha dibo, ekta student hote hole id name must thaka chai.
//*mane kichu property lagbei ...

type Student = { id: number, name: string, dateOfBirth: string, class: string }

const addStudentToCourse = <T extends Student>(studentinfo: T) => {
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

const student3 = {
    hasPassed: false
}
// const res = addStudentToCourse(student3); ekahne bolbe must id and name dite hobe