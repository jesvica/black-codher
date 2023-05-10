// ****************************************************TASK 1 - OBJECTS****************************************************
let personA = {
    name: 'Jessica',
    age: '25',
    location: 'Wolverhampton',
    likes: 'coding'
};

let personB = {
    name: 'Jordan',
    age: '26',
    location: 'Wolverhampton',
    likes: 'Italian food'
};

let personC = {
    name: 'Mary',
    age: '28',
    location: 'London',
    likes: 'gardening'
}

let personD = {
    name: 'Angus',
    age: '37',
    location: 'Edinburgh',
    likes: 'football'
};

function biography(person) {
    return "Hi, my name is " + person.name + ". I am " + person.age + " years old, I live in " + person.location + " and I like " + person.likes + "."
}

console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));
console.log(biography(personD))


// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + x + y;

console.log("Addition: x + x + y = " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y = " + subtraction);

const multiplication = x * x;

console.log("multiplication: x * x = " + multiplication);

const division = x * y / x;

console.log("Division: x + y / x = " + division);


// ****************************************************TASK 3****************************************************

const legalDrivingAge = 17;
const age = 25;

const oldEnoughDrive = legalDrivingAge < age;

console.log('Am I old enough to drive? ' + oldEnoughDrive);


// ****************************************************HOMEWORK****************************************************
//let a = 5;
//let b = 10;

function calculator(a,b) {
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
}

calculator(5,10);


function whoIsOlder(person, person) {
    if(person.age > person.age) {
        return(person.name + " is older than " + person.name);
    } else {
        return(person.name + " is older than " + person.name);
    }
}

console.log(whoIsOlder(personA,personB));











