### 4. React
#### Functions and intro to Functional Programming


---
#### What is a function?

* “A function is a process which takes some input, called arguments, and produces some output called a return value." - <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976">Eric Elliot</a>
* “Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it." - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions">MDN</a>


---

#### Functions can be used for:

* Mapping: Based on given inputs it produces some output it maps input values to output values.
* Procedures: A function may be called to perform a sequence of steps. The sequence is known as a procedure. (Procedural programming)
* I/O: Functions can communicate with other parts of the system, such as the screen, storage, system logs, or network.


---

####  Declaring a function
```JavaScript
function saySomething(word) {
  console.log(word);
}
```



---

####  Declaring a nameless function
```JavaScript
var saySomething = function(word) {
console.log(word);
}
```



---

#### Calling a function
```JavaScript
var saySomething = function(word) {
console.log(word);

saySomething('JS rocks!');
```


---

#### Get save value returned from function
```JavaScript
function myFunc(myValue) {
  return myValue;
}

var value = myFunc(5);
console.log(value); //5
```


---

#### Using value returned from function
```JavaScript
function myFunc(myValue) {
  return function mySecondFunc(){
    console.log('2nd');
  };
}

var func = myFunc(5);
func();
```


---

#### Function in object
```JavaScript
const myObj = {
  func : function sayHello(myValue) {
  console.log('hello');
  }
}

myObj.func();
```


---

#### Function in object returning function
```JavaScript
const myObj = {
  func: function myFunc(myValue) {
    return function mySecondFunc(){
      console.log('2nd');
    };
  }
}

var returnedFunc = myObj.func();
returnedFunc();
```


---

#### Function as a parameter
```JavaScript
function sayHello(helloFunc){
  helloFunc('hi!');
};

const func = (word)=>{console.log(word)}
sayHello((word)=>{
  console.log(word);
});
```


---

#### Arrow functions
```JavaScript
const myFunc = function(param){
  console.log(param)
}

const myFunc = (param) => {
  console.log(param);
}

myFunc('hello');
```


---

#### Arrow functions
```JavaScript
const myFunc = function(param){
  return param;
}

const myFunc = (param) => {
  return param;
}

const myFunc = (param) => param;

const myFunc = param => param;

myVal = myFunc(12);
console.log(myVal);
```


---

#### Arrow functions

* Arrow Function DOES NOT bind it's own this.
* Arrow Functions lexically bind their context so this actually refers to the originating context.


---

#### Functional Programming

* Functional programming is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.
* Functional programming is declarative rather than imperative, and application state flows through pure functions.


---

#### Functional code tends to be:

* More concise
* More predictable
* Easier to test


---

#### Declarative vs Imperative

* **Declarative programming** is a programming paradigm … that expresses the logic of a computation without describing its control flow.
* **Imperative programming** is a programming paradigm that uses statements that change a program's state.


---

#### Declarative vs Imperative

* **Declarative programming** is like asking your friend to draw a landscape. You don't care how they draw it, that's up to them.
* **Imperative programming** is like your friend listening to Bob Ross tell them how to paint a landscape. While good ole Bob Ross isn't exactly commanding, he is giving them step by step directions to get the desired result.


---

#### Parts of functional programming

* Pure functions
* Function composition
* Avoid shared state
* Avoid mutating state
* Avoid side effects


---

####  Pure functions

* Functions that given the same inputs, always returns the same output
* If the function does not return anything it's not a pure function
* Has no side-effects

```JavaScript
function calc(val1, val2){
  return val1 + val2;
}
```


---

#### Function composition

* **Function composition** is the process of combining two or more functions to produce a new function. Composing functions together is like snapping together a series of pipes for our data to flow through.


---

#### Shared state
**Shared state** is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes.


---

####  Mutating state
An **immutable object** is an object that can't be modified after it's created. Conversely, a mutable object is any object which can be modified after it's created.

```JavaScript
let myObject = {firstName: 'John', lastName: 'Doe'};
myObject.firstName = 'Tommy'; ← Mutating
const newObject = Object.assign({}, {firstName: 'Tommy', lastName: 'Doe'});
```


---

#### Side effects

* A side effect is any application state change that is observable outside the called function other than its return value.
* Console.log( ), document.appendChild are examples of side effects.


---

#### What is a curried function?

* A curried function is a function that takes multiple arguments one at a time.
* const add = a => b => a + b;
* const result = add(2)(3); // => 5
* First, the function takes a, and then returns a new function, which then takes b returns the sum of a and b. Each argument is taken one at a time.


---

####  Currying

```JavaScript
function add(num, num1){
  return function(num3){
    return num + num1 + num3;
  }
}

console.log(calc(4,5)(100));  // 109
```