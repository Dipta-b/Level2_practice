class Person {
    getSleep() {
        console.log(`Person is sleeping for 8 hours`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`Student is sleeping for 6 hours`);
    }
}

class Teacher extends Person {
    getSleep() {
        console.log(`Teacher is sleeping for 5 hours`);
    }
}

const fun = (param: Person) => {
    param.getSleep();
}

const person1 = new Person();
const student1 = new Student();
const teacher1 = new Teacher();
fun(person1);
fun(student1);
// !Another way example polymorphism

class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends
    Shape {
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super()
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}


const getarea = (param: Shape) => {
    console.log(param.getArea())
}


const Shape1 = new Shape();
const shape2 = new Circle(5);
const shape3 = new Rectangle(4, 5);
getarea(Shape1);
getarea(shape2);
getarea(shape3);