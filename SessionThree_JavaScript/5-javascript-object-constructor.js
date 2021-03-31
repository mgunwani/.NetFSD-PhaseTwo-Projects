
// Creating Object and Attaching Properties and Methods:
var person = new Object();
person.firstName = 'Sarah';
person.lastName = 'Bowling';
person.getFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`);
}

// Accessing Properties and Methods:
console.log(person.firstName);
console.log(person["lastName"]);
if (person.hasOwnProperty('age'))
    console.log(person.age);
person.getFullName();