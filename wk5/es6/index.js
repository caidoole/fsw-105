console.log("********#1********")
//#1 replace var with const and alter to return "spot" instead of "john"
const name = "John"
let age = 101

function runForLoop(pets) {
    const petObjects = [];
    for (let i = 0; i < pets.length; i++) {
        let pet = {
            type: pets[i]
        }
        let name = '';
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects;
}
runForLoop(["cat", "dog"])

console.log("*******#2********")
//#2 Re-write using arrow function

const carrots = ["bright orange", "ripe", "rotten"]

const mapVegtables = (arr) => {
    return arr.map((carrot) => {
        return {
            type: "carrot",
            name: carrot
        }
    })
}
console.log(mapVegtables(carrots))

console.log("*******#3*******")
//#3 Re-write using arrow function

const people = [{
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr) => {
    return arr.filter((person) => {
        return person.friendly
    })
}
console.log(filterForFriendly(people));

console.log("*********#4********")
//#4 Re-write using arrow function

const doMathSum = (a, b) => {
    return a + b
}

const produceProduct = (a, b) => {
    return a * b
}

console.log(doMathSum(5, 10));
console.log(produceProduct(6, 5));

console.log("*********#5*********")
//#5 write printString fucntion that returns "Hi Kat Stark, how does it feel to be 40?"

const printString = (firstName = 'Jane', lastName = 'Doe', age ='100') => {

    return ("Hi " + firstName + " " + lastName + " how does it feel to be " + age + "?");
}

console.log(printString("Kat", "Stark", 40));
console.log(printString());

console.log("*********#6********")
//#6 use templete literals to build the string from #5
const printStringLiterals = (firstName = 'Jane', lastName = 'Doe', age ='100') => {

    return (`Hi ${firstName} ${lastName} how does it feel to be ${age}?`);
}

console.log(printStringLiterals("Kat", "Stark", 40));
console.log(printStringLiterals());

console.log("********#7**********")
//#7 use short hand to make the following filter take one line

 const animals = [
     {
         type: "dog",
         name: "theodore"
     },
     {
        type: "cat",
        name: "whiskers"
     },
     {
         type: "pig",
         name: "piglette"
     },
     {
         type: "dog",
         name: "sparky"
     }
 ];

const filterForDogs = arr => arr.filter( animal => (animal.type === "dog") ? true : false);
console.log(filterForDogs(animals));

console.log("********#8 Extra Credit********")
//#8 Extra Credit using template literals function that takes loation and name and outputs a message

const extraCreditLiterals = (firstName = 'Jane', location = 'Jamaica') => {

    return (`Hi ${firstName}!
Welcome to ${location}.
I hope you enjoy your stay.  Please ask the president of ${location} if you need anything.`);
}

console.log(extraCreditLiterals("Janice", "Hawaii"));