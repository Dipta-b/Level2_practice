class Parent {

    constructor(public name: string, public age: number, public address: string) { }

    getSleep(hours: number) {
        console.log(`${this.name} ${hours} ghonta ghumay`);
    }
}
//*student a constructor or anyothers jinish lage nai cause parent e ja ache tar beshi kichu student a lage nai
class Student extends Parent {

}
const student1 = new Student('dipta', 23, 'Wari');
student1.getSleep(5)
console.log(student1.address)

//*Ekhane constructor lagche 1.parent er thekeo beshi jinish lagteche
//*special diyei korte hoy niyom 
class Teacher extends Parent {
    constructor(public name: string, public age: number, public address: string, public designation: string) {
        super(name, age, address)
    }

    takeClass(time: number) {
        console.log(`${this.name} takes ${time}h of class`);
    }
}

const teacher1 = new Teacher('Bhai', 25, 'Dhaka', 'Pro ');
console.log(teacher1.address)
teacher1.takeClass(2)