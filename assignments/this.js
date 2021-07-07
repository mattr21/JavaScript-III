/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding = the context of 'this' when it's not tied to anything. It's context is the global scope and in the browser that's the window
* 2. Implicit Binding = the context of 'this' when it's tied to a specific object using dot notation. 'This' refers to the specific object it's tied to (left of the dot in the invocation).
* 3. New Binding = the context of 'this' when it's tied to a new object created off a constructor function.
* 4. Explicit Binding = the context of 'this' when we override the object it's attached to with dot notation and give it a new object with .call/.apply/.bind
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this)

// Principle 2
// code example for Implicit Binding
const myObj = {
    name: "Matt",
    speak: function() {
        return `My name is ${this.name}.`
    } 
};

console.log(myObj.speak());

// Principle 3
// code example for New Binding
function Person(obj) {
    this.name = obj.name,
    this.age = obj.age,
    this.speak = function() {
        return `I am ${this.age} years old and my name is ${this.name}!`
    }
};

const corey = new Person({
    name: 'Corey',
    age: 31
})

const paige = new Person({
    name: 'Paige',
    age: 22
})

console.log(corey.speak());
console.log(paige.speak());

// Principle 4
// code example for Explicit Binding

console.log(paige.speak.call(corey));