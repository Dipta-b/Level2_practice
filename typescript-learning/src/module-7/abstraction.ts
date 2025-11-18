//Interface and abstract diye use kora jay

interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

class MusicPlayer implements MediaPlayer {
    play() {
        console.log("Music playing");
    }
    pause() {
        console.log("Music paused");
    }
    stop() {
        console.log("Music stopped");
    }
}

const DiptaMusic = new MusicPlayer();
DiptaMusic.play();
DiptaMusic.pause();
DiptaMusic.stop();


//*onno class gula ei abstract clss ke follow korbe
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof Woof");
    }

}

class Cat extends Animal {
    makeSound() {
        console.log('meeo meow');
    }
}

//*abstract class er object create kora jabe na
// const animal1 = new Animal(); // Error

const dog1 = new Dog();
dog1.makeSound();

const cat1 = new Cat();
cat1.makeSound();
