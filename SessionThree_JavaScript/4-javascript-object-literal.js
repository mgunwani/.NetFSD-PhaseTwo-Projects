
/**
 * Two variants of creating object in JavaScript:
 *  - Object Literal
 *  - Object Constructor
 *
 */

// Object Literal

// Empty Object Literal
var person = {};
person.firstName = "Gautam";
person.sayHello = function () {
    console.log(`Hello ${this.firstName}`)
}

console.log(person.firstName);
person.sayHello();

console.log("-----------------------------");

// Object Literal with Properties:
var person = {
    fname: 'Shruti',
    lname: 'Behal'
}

console.log("-----------------------------");

// Object Literal with Properties and Methods:
var person = {
    fname: 'Shruti',
    lname: 'Behal',
    address: {
        houseNo: 1234,
        street: 'Civil Lines',
        city: 'Delhi',
        country: 'India'
    },
    getFullName: function () {
        console.log(`${this.fname} ${this.lname}!!`);
    }
}

console.log(person.fname);
console.log(person["lname"]);
console.log(`${person.address.houseNo} : ${person.address.street} : 
${person.address.city} : ${person.address.country}`);
person.getFullName();