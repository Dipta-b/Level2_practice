class Person {

    constructor(public name: string, public age: number) {

    }

    getDetails() {
        return (`Name: ${this.name}, Age: ${this.age}`)
    }
}
