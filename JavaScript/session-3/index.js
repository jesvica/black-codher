// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
function sayHey() {
    console.log("hey");
}

function conversation() {
    sayHey();
    console.log("How are you?");
}

sayHey();
conversation();


// Task 3

function futureAge(name, age) {
    const ageIn5Years = age + 5;
    return "Hi " + name + ", you will be " + ageIn5Years + " in 5 years!"
}

console.log(futureAge('Anna', 25));
futureAge();