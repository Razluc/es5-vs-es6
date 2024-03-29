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
/*
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

*/
/*
function Person(name){
    this.name = name;
}
// ES5
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friend with ' + el;
    }.bind(this)); // Without bind(this), this will point on global object. Another alternative is to create a var with "this" value outsite of this function in prototype like previous example. But with bind is much easy.
    console.log(arr);
}

var friends = ['bob', 'jane', 'mark'];
// new Person('ion').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(el => `${this.name} is friend with ${el}`);
    console.log(arr);
}


new Person('ion').myFriends6(friends);
*/

////////////////////////////////
// Lecture:  Destructuring

// ES5
// var ion = ['ion', 33];
// // var name = ion[0];
// // var age = ion[1];

// // ES6
// const [name, age] = ['dan', 20];
// console.log(name);
// console.log(age);

// const obj = {
//     firstName: 'ion',
//     lastName: 'bob'
// }
// const {firstName, lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// const {firstName: a, lastName: b} = obj;
// console.log(a);
// console.log(b);

// function calcAge(year){
//     const age = new Date().getFullYear() - year;
//     return [age, 65- age];
// }
// const [age, retirement] = calcAge(1994);
// console.log(age);
// console.log(retirement);

////////////////////////////////
// Lecture:  Arrays
/*
const boxes = document.querySelectorAll('.box');
// ----- Foreach in array.
// ES5
// var boxerArr5 = Array.prototype.slice.call(boxes);
// boxerArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'blue';
// });

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'blue');
// ------ For in array
// ES5
// for(var i = 0; i<boxerArr5.length; i++){
//     if(boxerArr5[i].className === 'box blue'){
//         continue;
//     }
//     boxerArr5[i].textContent = 'I changed to blue!';
// }

// ES6
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}
// ES5
var ages = [13, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
    return cur >= 18;
})
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/
////////////////////////////////
// Lecture:  Spread operator
/*
function addFourAges(a,b,c,d){
    return a + b + c + d;
}
var sum1 = addFourAges(9, 10, 20, 30);
console.log(sum1);

// ES5
var ages = [9, 10, 20, 30];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);  // ... expand array into components. Is like to writing adFourAges(9, 10, 20, 30);
console.log(sum3);


const familyPopa = ['ion', 'boc', 'marc'];
const familyBob = ['mari', 'dan', 'ana'];
const bigFamily = [...familyPopa, 'copil', ...familyBob];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/
////////////////////////////////
// Lecture:  Rest parameters
/*
// ES5
function isFullAge5(limit){
    var args = Array.prototype.slice.call(arguments, 1);
    args.forEach(function(cur) {
        console.log((2019-cur) >= limit);
    })
    
}

// isFullAge5(1990,2003,1965);

// ES6
function isFullAge6(limit, ...years){
    years.forEach(cur => console.log((2019 - cur) >= limit));
}
isFullAge6(20, 1990,1920,2000);

*/
////////////////////////////////
// Lecture:  Default parameters

// ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality){

//     lastName === undefined ? lastName = 'Smith' : lastName;
//     nationality === undefined ? nationality = 'Ro' : nationality;
//     this.firstName = firstName;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }
// var ion = new SmithPerson('Ion', 1994);
// var ema = new SmithPerson('Emily', 1983, 'Diaz', 'hu');

// ES6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'ro'){
//     this.firstName = firstName;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }
// var ion = new SmithPerson('ion', 1990);

////////////////////////////////
// Lecture:  Maps
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, try again');

// console.log(question.get('question'));
// console.log(question.size);

// if(question.has(4)){
//     question.delete(4);
// }

// question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

for (let [key, value] of question.entries()){   //.entries() return all entries of our map. 
    //console.log(`This is ${key} and it's set to ${value}`)
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}
const ans = parseInt(prompt('Write the corect answer'));

console.log(question.get(ans === question.get('correct'))); // alternative to create an if else to check the answer. 
*/

////////////////////////////////
// Lecture:  Classes

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('ion', 1990, 'boss');
// console.log(john5);

// ES6
class Person6{
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    static hello(){
        console.log('hey there');
    }
}
const ion6 = new Person6('ion', 1990, 'boss');

Person6.hello();