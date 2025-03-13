// let obj = {
//     a: 1,
//     b: "Garvit"
// }
// console.log(obj);
// let animal = {
//     eats : true
// }
// let rabbit = {
//     jumps: true
// }
// rabbit.__proto__ = animal;

class Animal{
    constructor(name){
        this.name = name
        console.log("Object is Created !");
    }

    eats(){
        console.log("Eating...");
    }

    jumps(){
        console.log('Jumping');
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is Created and it is a Lion..")
    }

    eats(){
        console.log("Roar")
    }
}

let a = new Animal("Leopard");
console.log(a);

let b = new Lion("Shera");
console.log(b);

