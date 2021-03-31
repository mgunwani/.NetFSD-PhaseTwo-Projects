
/**
 * Functions: Helps in Modular programming.
 * Types of Functions:
 *  - Simple Functions
 *  - Parameterized Functions
 *  - Function with Return Statement
 *  - Function Expression
 *  - Annonymous Function (Unnamed Function)
 *
 */

// // Defining: Simple Function
// function sayHello() {
//     console.log("Hello!!");
// }

// // Calling: Simple Function
// sayHello();
// sayHello();

// ----------------------------------------------------------------- //

// // Defining: Parameterized Function
// function getFullName(fname, lname) {
//     console.log(`Welcome ${fname} ${lname}`);
// }

// // Calling: Parameterized Function
// getFullName('King', 'Kochhar');
// getFullName('John', 'Smith');
// getFullName('James');
// getFullName('James', 'Bond', "Calvin");

// ----------------------------------------------------------------- //

// // Defining: Parameterized Function with Arguments Object
// function getFullName() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//         console.log("-----------");
//     }
// }

// // Calling: Parameterized Function with Arguments Object
// getFullName('King', 'Kochhar');
// getFullName('John', 'Smith');
// getFullName('James');
// getFullName('James', 'Bond', "Calvin");
// getFullName('James', 'Bond', "Calvin", "Kele");

// ----------------------------------------------------------------- //

// // Defining: Parameterized Function with Return Statement
// function getFullName(fname, lname) {
//     return `Welcome ${fname} ${lname}`;
// }

// // Calling: Parameterized Function with Return Statement
// var result = getFullName('King', 'Kochhar');
// console.log(result);
// console.log(getFullName('John', 'Smith'));

// ----------------------------------------------------------------- //

// // Defining: Function Expression
// var fullName = function getFullName(fname, lname) {
//     console.log(`Welcome ${fname} ${lname}`);
// }

// // Calling: Function Expression
// // getFullName('King', 'Kochhar');
// fullName('Bhawna', 'Gunwani');


// ----------------------------------------------------------------- //

// // Defining: Annonymous Function (Unnamed Function)
// var fullName = function (fname, lname) {
//     console.log(`Welcome ${fname} ${lname}`);
// }

// // Calling: Annonymous Function (Unnamed Function)
// fullName('Bhawna', 'Gunwani');


// ----------------------------------------------------------------- //

// Definition: Arrow Function
// var getMessage = () => console.log('Hello Everyone');
var getMessage = (message) => {
    console.log('Hello Everyone..!!');
    console.log(message);
}


// Calling: Arrow Function
// getMessage();
getMessage('Lets Learn JavaScript!!');