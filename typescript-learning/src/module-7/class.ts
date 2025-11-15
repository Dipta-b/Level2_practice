// class Animal {
//     name: string;
//     species: string;
//     sound: string


//     constructor(name: string, species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }
//     //method
//     makeSound() {
//         console.log(`${this.name} is making ${this.sound}`)
//     }

// }

// const dog = new Animal('Dogesh', 'Deshi', 'gheu');
// console.log(dog.name)

// const cat = new Animal('cat', 'dehsal', 'meow');
// console.log(cat.species)
// cat.makeSound()


//*Uporer code in short for typescript only
class Animal {
    constructor(public name: string, public species: string, public sound: string) { }
    //method
    makeSound() {
        console.log(`${this.name} is making ${this.sound}`)
    }
}
const dog = new Animal('Dogesh', 'Deshi', 'gheu');
console.log(dog.name)

const cat = new Animal('cat', 'dehsal', 'meow');
console.log(cat.species)
cat.makeSound()

