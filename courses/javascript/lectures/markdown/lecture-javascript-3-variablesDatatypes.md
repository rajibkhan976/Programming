### 3. JavaScript
#### Variables & Data types


---

#### What is a Variable?

* A variable is a temporary storage for bits of information.
* JavaScript variables are containers for storing data values.
* A variable is like a drawer or a box.
* You can put a value/thing in it, close it and then when you want to use it you open the drawer.

```JavaScript
box = shoes + socks + gloves
```



---

#### Defining a variable

* ```var``` is the keyword.
* ```myValue``` is the name of the variable (sticker on the drawer/box)
* ```myValue``` is assigned the value 10 (you put 10 in the drawer/box)

```JavaScript
var name; // variable name is now defined but contains no value
var myValue = 10; // variable myValue is defined and assigned a value
```


---

#### Defining multiple variables on same line

```JavaScript
var myVal1, myVal2;

var name, name2;
```


---

#### Assigning a value to a variable

```JavaScript
// username is the variable name and it's being assigned the value 'John'.
var username = 'John';
```


---

#### Using a variable before it has been defined

* In JavaScript, a variable can be declared after it has been used.
* This is possible since JavaScript saves declarations in memory before running.
* This is called **Hoisting**.

```JavaScript
name = 'John';
var name;
```


---

#### variables declaration without **var** keyword

* JavaScript allows variable declaration without **var** keyword. 
* However you must assign a value when you declare a variable without var keyword.
* **NOTE!** This is Not Recommended since it it can accidently overwrite an existing global variable. We will talk about scope later on. 

```JavaScript
username = 'John';
```


---


#### "use strict"
* The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
* With strict mode, you can not, for example, use undeclared variables.

```JavaScript
"use strict";
username = 'John'; // This will cause an error because x is not declared
```

<a href="https://www.w3schools.com/js/js_strict.asp" target="_blank">W3schools</a>


---

#### Changing variable value

* It is possible to change the value of a variable after it has been created.
* However you only use the ```var``` keyword the first time.

```JavaScript
var greeting = "hello";
greeting = 12;
```


---

#### Naming variables

* Names needs to be unique and these are called identifiers.
* Using names that is describing what it contains is very important.
* This makes development much easier and understandable.
* Always use english.
* In lectures I use a lot of myValue, [foobar](https://www.techopedia.com/definition/615/foobar) placeholders.

```JavaScript
var greeting = "hello";
greeting = 12;
```


---

#### JavaScript is case sensitive

* In JavaScript we use the camelCase naming convention.
* All names start with a letter.
* Instead of My Car we use myCar.
* Cannot start with a number or have blank spaces.
* Cannot use keywords or reserved words (new, var, let etc.).



---

#### Using a variable thats not been defined

* JavaScript understands and will create it
* However it creates it in the global scope by default (bad practice)
* Avoid this!

```JavaScript
// x has not been defined using the "var" keyword
x = 5;

console.log(x); /* will log 5 */
```


---

### Data types


---

#### Numeric data type

```JavaScript
var myValue = 10;
var mySecondValue = 0,55;
var myThirdValue  = -324;

var result = myValue + mySecondValue;
// result is 10,55
```



---

#### String data type

Letters and other characters

```JavaScript
var name = 'Jane is cool';
var char = '.!d';
var numChar  = '345';

var result = name + numChar;  // result is "Jane is cool345"
```



---

#### Boolean data type
Can be either true or false

```JavaScript
var isTrue = true;
var isNotTrue = false;
```



---

#### Null value
* The value null represents the **intentional** absence of any object value.
* null is "nothing". It is supposed to be something that doesn't exist.
* The type of null is an object.

* "You can consider it a bug in JavaScript that typeof null is an object. It should be null." - w3schools
* You can empty an object by setting it to null:

```JavaScript
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;  // Now value is null, but type is still an object
```



---

#### Undefined value
* A variable without a value, has the value undefined.
* Unlike null undefined has the type of undefined and not an object.

```JavaScript
var car;  // Value is undefined, type is undefined
```


---

#### typeof

* typeof returns a string indicating the type.

```JavaScript
console.log(typeof undefined); // undefined
typeof null; // object
typeof 'hello'; // string
typeof false; // boolean
typeof 12; // number
```



---

#### Primitive values

* The data we've covered so far (except null) are primitive data values meaning that they are simple and have no additional properties and methods
* The typeof operator can return one of these primitive types:

* string
* number
* boolean
* undefined


---

#### Non-Primitive values

* Non-primitve values can have additional properties and methods:
  * Arrays
  * Functions
  * Objects

* We will cover these later in the course.
* Note: Arrays and Functions are objects with speacial features, we will dive deeper into this later so for now seperate them.


---


#### JavaScript is **not** a typed language
* Meaning you don't declare which datatype a variable should have

```JavaScript
var myStr = 'hello'; // is now a string since we use quotations.
myStr = 12; // is possible since we didn't say it most be a string.
```

* Using a typed language it could look something like below
```JavaScript
var myStr:string = 'hello'; // is now a string since used :string.
myStr = 12; // Would throw an error since 12 is not a string.
```



---

#### Quotation marks, Single or double?
* You need to start and finish with the same.
* I personally use single quotes in Scripts and double in markup(HTML).

```JavaScript
var myStr = 'hello'; 
```

```HTML
<p width="100"></p>
```



---

#### Debugging

* Alert, Prompt - shows a modal
* Console.log( ) - logs in the developer console in browser
* Debugger in devtools
* Show in browser



---

#### alert( ) & prompt( )

* alert() displays a modal and prompt() displays a modal for entering text.
* A modal is a dialog box/popup window that is displayed on top of the current page.

```JavaScript
var myValue = 12;

alert(myValue);

var myPromptValue = prompt("Please enter your name", "Pontus");

console.log(myPromptValue);
alert(myPromptValue);
```



---

#### console.log( )

* logs in the developer console in browser

```JavaScript
var myValue = 12;

console.log('my value is ' myValue);
console.log(typeof myValue);
```



---

#### Debugger in Devtools

* Setting breakpoints.
* Stepping.
* Scopes.
* Callstacks.
* etc.

<img width="600" src="/media/javascript-images/javascript-3/debug.png" alt="debugger">


---

#### Commenting in JavaScript

```JavaScript
/*
 * Multi
 * Line
 * Comment
*/

var name = 'John Doe'; // Single line comment

// Single line comment
```



---

#### Why use comments?

* Comments should be used to explain what your code does (documentation).
* This can make the code easier to read, not just for yourself but for others as well!


---

#### Documentations

* <a href="https://www.w3schools.com/js/default.asp" target="_blank">W3schools</a>
* <a href="https://developer.mozilla.org/sv-SE/" target="_blank">MDN</a>



---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>