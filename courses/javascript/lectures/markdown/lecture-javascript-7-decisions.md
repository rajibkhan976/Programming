### 7. JavaScript
#### Decisions


---

#### Decisions

* When writing applications we often need to evaluate if some conditions are met.
* Depending on if they are we need to make decisions on how to proceed.


---

#### Real world example

* Should I buy a new jacket today? (Decision)
* IF the store has a green jacket? (Condition)
  * Yes -> Buy it.
  * No -> Keep Looking
  



---

####  Buying jacket in code

```JavaScript
if(jacket === 'green'){
  buyJacket();
} else {
  keepLooking(jacket);
}
```


---

#### Evaluate & Decide

* **Evaluation** - analyse/check if values are the same, equal etc.
* **Decision** - decide what to do depending on the result of the evaluation.


---

####  Conditions
* Conditions placed inside of ```if( )``` will be evaluated.
* Depending on if conditions are met we decide what code to run.

```JavaScript
if(age > 18){
  // if the variable age is HIGHER than 18 running code written here.
} else {
  // if the variable age is LOWER than 18 running code written here.
}
```



---

####  Comparison operators
* Comparing different values
* returns true or false depending on outcome

```JavaScript
if(age > 18) // age is greater than 18
if(age < 18) // age is lesser than 18
if(age >= 18) // age is greater than 18 or equal to 18 
if(age <= 18) // age is lesser than 18 or equal to 18
if(age == 18) // age is equal to 18
if(age === 18) // age is strict equal to 18 and is of the same datatype
if(age != 18) // age is NOT equal to 18
if(age !== 18) // age is strict NOT equal to 18 and is NOT of the same datatype
```


---

####  Depending on if the condition is met true or false is returned

```JavaScript
let age = 17;
let is18orOver = age >= 18;

console.log(is18orOver); // false since 17 is lesser than 18

if(is18orOver){
  // runs only if is18orOver is set to true
}
```


---

####  Falsy values

* Values treated as if they are false

```JavaScript
let score = false;       // boolean - falsy
let score = 0;           // number - falsy
let score = 'hello' * 5; // NaN - falsy
let score = '';          // Empty value - falsy
let score = null;        // null - falsy
let score;   // undefined - falsy
```


---

####  Truthy values

* Values treated as if they are true
* Which is almost everything else than previous slide

```JavaScript
let score = true;     // boolean - truthy
let score = 1;        // number - truthy
let score = 4 * 5;    // number calculations - truthy
let score = 'fifty';  // string - truthy
let score = 'true';   // string - truthy
let score = '0';      // string - truthy
let score = 'false';  // string - truthy
```


---

####  Multiple expressions

```JavaScript
let age1 = 19;
let age2 = 23;
let maximumAge = 50;

if((age1 + age2) < maximumAge){
  // code run when total age is beneath the maximum age
}
```


---

####  Logical Operators

* There are three logical operators in JavaScript:
  * || (OR)
  * && (AND)
  * ! (NOT)

```JavaScript
let a = undefined;
let b = 'John Doe';

let result = a || b; // result is a OR b
console.log(result); // 'John Doe' since a is a falsy value
```


--- 


####  Logical || (OR)

* OR tries to find the truthy value.

```JavaScript
let a = false;
let b = true;

// checks if a OR b is true
if(a || b){
  console.log('Hey dude!'); // will log since b is a truthy value
}
```


---

####  Logical && (AND)

```JavaScript
let a = false;
let b = true;

result = a && b; // returns false since both a and b is not truthy
```


---

####  Logical && (AND)
* What happens in which order?
  1. Evaluates operands from left to right.
  1. For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
  1. If all operands have been evaluated (i.e. all were truthy), returns the last operand.
        
```JavaScript
let a = true;
let b = 12;
let c = 'John Doe'

result = a && b && c; // returns John Doe
```


---

####  Logical && (AND)

* AND tries to find the falsy value.

```JavaScript
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );  // will alert since both conditions are met
}
```


---

####  Logical ! (NOT)

* Usually if a condition is met true is returned
* Using logical not false is returned instead

```JavaScript
let age = 17;
let isUnder18 = !(age >= 18);
  
console.log(isUnder18); // isUnder18 is true

if(!isUnder18){
  // runs if variable isUnder18 is true
}
```


---

####  Logical Operators

* Logical operators allows you to compare results of more than one comparison operator.

```JavaScript
if((10 > 2) && (3 === 3)){
  // code run if 10 is bigger than 2 AND 3 is strict equal to 3
}

if((10 > 2) || (3 === 3)){
  // code run if 10 is bigger than 2 OR 3 is strict equal to 3
}
```


---

####  Example

```JavaScript
let a = 10;
let b = 10;
let c = 15;
let d = 20;
if ((a == b || c == d) && ((a == b) != (c == d))) {
  // will this code run?
}
```


---

####  else if, else

```JavaScript
let a = 10;
let b = 10;
let c = 10;

if (a === b) {
  console.log('first');
} else if(a === c) {
  console.log('second');
}
else {
  console.log('third');
}
```
[Try on w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_elseif)


---

####  Ternary operator
* A shorter way to write
* Instead of if and else we use ? & :

```JavaScript
if (a === b) {
  console.log("Match");
} else {
  console.log("No match");
}

// Ternary operator
a === b ? console.log("Match") : console.log("No match");
```


---

####  Switch Case

```JavaScript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
[Try on w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_switch)


---

####  Strict checking

=== checks condition and type

```JavaScript
(false == 0)  // true
(false === 0) // both are false however note the same type

(undefined == null)  // true
(undefined === null) // false

(null == false)       // false
(undefined == false)  // false
(null == 0)           // false
(undefined == 0)      // false
```


---

#### Handling Errors

* Errors can be:
  * Coding errors made by the programmer.
  * Errors due to wrong input.
  * Errors due to incorrect response from Backend
  * and other unforeseeable things.


---

#### Handling errors

* The **try** statement lets you test a block of code for errors.
* The **catch** statement lets you handle the error.
* The **throw** statement lets you create custom errors.
* The **finally** statement lets you execute code, after try and catch, regardless of the result.



---

#### try & catch

* The <u>try</u> statement allows you to define a block of code to be tested for errors while it is being executed.
* The <u>catch</u> statement allows you to define a block of code to be executed, if an error occurs in the try block.

```JavaScript
try {
  adddlert("Welcome guest!"); // invalid function name
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
```
<a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_try_catch" target="_blank">Try on w3schools</a>



---

#### try & catch - Fetching users
  
```JavaScript
let responseUsers = ['John', 'Jane'];  // Users fetched from Backend.

try {
  let firstUser = responseUsers[0];
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
```

<a href="https://www.w3schools.com/js/tryit.asp?filename=tryjs_try_catch" target="_blank">Try on w3schools</a>


---

#### if statement - Fetching users

```JavaScript
let responseUsers = ['John', 'Jane'];  // Users fetched from Backend.
if(responseUsers && responseUsers.length){
  let firstUser = responseUsers[0];
}
```
[Try on w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_try_catch)


---
        
#### The throw Statement

* The throw statement allows you to create a custom error.

```JavaScript
try {
  if(true) throw 'Im an ERROR!';
}
catch(err) {
  console.log(err);  // Im an ERROR
}
```
[Try on w3schools](https://www.w3schools.com/js/tryit.asp?filename=tryjs_try_catch)



---

#### The Finally Statement

* The finally statement lets you execute code, after try and catch, regardless of the result.

```JavaScript
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
} 
```


---

#### Difference between try catch and if statements

* if/else: you check for conditions and parameters that influence your program’s execution.
* if-else, you're expecting a specific kind of error or condition that may come from within your code.
* try/catch: you check for the known unknown bad things that can happen and attempt to catch any wrench thrown in the works.
* try/catchdeal with thing that could possibly go wrong and you can't do much about it. Those things are like networking, IO, third party services integrations...



---

```JavaScript
let users = null;

try {
  one();
  two();
  three();
} catch (error) {
  console.log('ERROR');
  // This code will get run if any of the above functions throws an error
}

function one(){
  console.log(users);
}

function two(){
  console.log(users.length);
}

function three(){
  console.log('gets here');
}
```
  

---
  
### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>