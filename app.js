/////////////////////////////////
// Lecture: Blocks and IIFEs

/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(a + b);
console.log(c);
// ES5
(function() {
    var c = 3;
})();
//console.log(c);
*/

/////////////////////////////////
// Lecture: Strings

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}
// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/

/////////////////////////////////
// Lecture: Arrow functions

/*
const years = [1990, 1965, 1982, 1937];
// ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);
// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/

////////////////////////////////
// Lecture:  Arrow functions 2

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        // 2. "THIS" will work only here for box5 object.
        // console.log(this.position);
        // a solution is to create a variable with value of "this".
        var that = this;
        document.querySelector('.green').addEventListener('click', function(){
            // 1.This is a regular function, and THIS points to the global object.
            var str = 'This is box number '+that.position+' and it is '+that.color;
            console.log(str);
        })
    }
}
// box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            // 1. With arrow function I have access to box6 values with "this".
            var str = 'This is box number '+this.position+' and it is '+this.color;
            console.log(str);
        })
    }
}
box6.clickMe();
// Very important. If I use on clickMe arrow function, all the values from "this" in querySelector will be undefined. Because 
// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {
//         // "this" will point on global object, window. 
//         document.querySelector('.green').addEventListener('click', () => {
//             // 1. With arrow function I have access to box6 values with "this".
//             var str = 'This is box number '+this.position+' and it is '+this.color;
//             console.log(str);
//         })
//     }
// }
// box66.clickMe();
