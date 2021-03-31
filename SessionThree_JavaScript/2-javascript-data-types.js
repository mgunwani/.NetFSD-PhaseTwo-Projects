
/**
 * JavaScript DataTypes:
 *  - Primitive
 *      number, string, boolean, null and undefined
 *  - Non-Primitives
 *      Object, Array, Dates
 */

/** Number */

// var value = 100;
// console.log(value);

// var num1 = new Number(100);
// var num2 = new Number(100);
// var num3 = 100;
// console.log(num1 == num2);  // False, num1 and num2 are two different objects.
// console.log(num1 == num3);  // True
// console.log(num1 === num3); // false

// Note: === operator compares Objects and not the values.

// ---------------------------------------------------------- //

/** String */

// var fname = "King";
// var lname = 'Kochhar';
// // var fullName = fname + ' ' + lname;
// var fullName = `Welcome ${fname} ${lname}!!`;
// console.log(fullName);

// ----------------------------------------------------- //

/** Boolean */

// var isValid = false;
// console.log(isValid);
// console.log(typeof (isValid));
// console.log(isValid ? "Come" : "Go");

// ------------------------------------------------------ // 

// Null and Undefined

/**
 *
 * Null means absence of Value.
 * Undefined means lack of value.
 * Null or Undefined value evaluates to false in conditional expression.
 *
 */

var value1;
console.log(value1);
console.log(typeof (value1));
console.log(value1 ? "100" : "200");

var value2 = null;
console.log(value2);
console.log(typeof (value2));
console.log(value2 ? "100" : "200");

// ------------------------------------------------------ //