class Counter {
    //constructor e initial value rakhe
    constructor(count) {
        this.count = count;
    }
    add(amount) {
        this.count = this.count + amount
    }
    print() {
        console.log(this.count)
    }
}

const counter1 = new Counter(0);
counter1.add(2);
counter1.add(3);
counter1.print()
//this.count += amount; because  updates property count . it increases the existing value by amount  
