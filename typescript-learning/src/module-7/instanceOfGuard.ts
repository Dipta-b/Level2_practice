class Person {
    constructor(public name: string) {

    }
    getSleep(time: number) {
        console.log(`${this.name} sleep ${time} hours`)
    }

}

class Student extends Person {

    doStudy(time: number) {
        console.log(`${this.name} study ${time} hours`)
    }

}

class Teacher extends Person {
    doStudy(time: number) {
        console.log(`${this.name} took ${time} hours class`)
    }
}

const isStudent = (user: Person) => {
    return user instanceof Student;
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.doStudy(10)
    } else if (isTeacher(user)) {
        user.doStudy(4);
    } else {
        user.getSleep(12);
    }


}
const student1 = new Student('Dipta');
const teacher1 = new Teacher('Sujon');

getUserInfo(student1)