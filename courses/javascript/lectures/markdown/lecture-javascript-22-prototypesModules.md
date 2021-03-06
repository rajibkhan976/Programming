### 22. JavaScript
#### Prototypes & Modules


---

#### Prototypes vs ES6 Classes

* So far we have worked with JavaScript and ES6 Classes.
* But as mentioned earlier JS Classes are just syntactical sugar over JavaScript's existing prototype-based inheritance.
* In this lecture we will dig deeper into what the prototype pattern really is.


---

#### <a href="http://developer-interview.com/p/oop-ood/what-are-advantages-and-disadvantages-of-prototypal-oop-12" target="_blank">Prototype OOP vs Class OOP Pros and Cons</a>


---

#### Constructor functions
  
* Using the "new" keyword an object will be created.
* An instance of the Person (class) will be created.

```JavaScript
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
```

```JavaScript
let mySister = new Person('Jane', 'Doe', 50); // { firstName: 'Jane', lastName: 'Doe', age : 50}
```


---

#### Prototypal inheritance
  
* Since functions are objects in JavaScript we can attach methods and properties to them.
* Functions has a special property called **prototype**.
* Initially it consists of an clean object but we are able to add to this object.

```JavaScript
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

Person.prototype.eat = function(){
  console.log('Im eating!');
};
```

```JavaScript
let mySister = new Person('Jane', 'Doe');
mySister.eat(); // 'Im eating!'
```


--- 

#### The prototype
"The prototype is just a way of saying that for this object use this other object as a backup." - <a href="https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q">FunFunFunctions</a>
"if someone calls my object with a property that does not exist on my object go look in this other object that is what the prototype is set to" -<a href="https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q"> FunFunFunctions</a>


---
        

#### Prototypal inheritance

```JavaScript
function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}

let Human = {
  eat : function(){
    console.log('Im eating!');
  },
  run : function(){
    console.log('Im running!');
  }
}

Person.prototype = Human;
```

```JavaScript
let mySister = new Person('Jane', 'Doe');
mySister.eat(); // 'Im eating!'
mySister.run(); // 'Im running!'
```


---

#### Creating objects using Object.create( )
 
* Object.create( ) creates a new object, using an existing object as the prototype of the newly created object.

```JavaScript  
const person = {
  isHuman: false,
  eat : function(){
    console.log('Im eating!');
  }
};
```

```JavaScript
const me = Object.create(person);

me.name = "Robin"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.eat(); // 'Im eating!'
```


---

#### Creating objects using Object.create( )

```JavaScript  
function Human(){
  this.bloodTemp = 'warm';
}

function Person(first){
  Human.call(this);
  this.first = first;
}

Human.prototype.eat = function(){
  console.log('Im eating!');
}

Person.prototype = Object.create(Human.prototype);
```

```JavaScript
let mySister = new Person('Jane');
console.log(mySister.bloodTemp); // 'warm'
mySister.eat(); // 'Im eating!'
```


---

#### Prototype chain
<img style="width: 800px;" src="/media/javascript-images/javascript-22/proto1.png" alt="prototype chain">


---
#### Prototype chain
<img style="width: 800px;" src="/media/javascript-images/javascript-22/proto2.png" alt="prototype chain">


---
#### Prototype chain
<img style="width: 800px;" src="/media/javascript-images/javascript-22/proto3.png" alt="prototype chain">


---
#### Prototype chain
<img style="width: 800px;" src="/media/javascript-images/javascript-22/proto4.png" alt="prototype chain">


---
#### Prototype chain
<img style="width: 800px;" src="/media/javascript-images/javascript-22/proto5.png" alt="prototype chain">


---
#### Prototype chain
<img style="width: 800px;" src="/media/javascript-images/javascript-22/proto6.png" alt="prototype chain">


---
#### Prototype chain
<img style="width: 800px;" src="/media/javascript-images/javascript-22/proto7.png" alt="prototype chain">


---

#### Modules

* Small units of independent, encapsulated, reusable code.
* A module is just a file. One script is one module.
* Modules can:
  * Load each other
  * Call functions of one module from another one:


---

####  Modules (ES5)

* Immediately Invoked Function Expression (IIFE)

```JavaScript
(function(){
  console.log('test');
})();
```


---

#### IIFE

* The function expression returns the function, so we can immediately call it.
* IIFE encapsulates code complexity inside them.
* Variables defined inside the IIFE don't pollute the global scope.
* var statements inside the IIFE remain within the IIFE's closure.


---

####  Modules (ES5) - Revealing Module pattern

* What we return will be public (an object).
* Everything declared inside the IIFE that's not returned will be private.

```JavaScript
// Expose module as global variable
let singleton = function(){
    
  // Inner logic
  function sayHello(){
    console.log('Hello');
  }
    
  // Expose API
  return {
    sayHello: sayHello
  }
}()

singleton.sayHello();
```


---

####  Modules (ES5) - Revealing Module pattern

```JavaScript
// Expose module as global variable
let singleton = function(){
  let name = 'John Doe';

  // Inner logic
  function sayHello(){
    console.log(name);  // John doe - since its in the IIFE
  }
    
  // Expose API
  return {
    sayHello: sayHello
  }
}()

singleton.sayHello();
singleton.name; // undefined since its private
```


---

#### Since ES6 JavaScript has <a href="https://exploringjs.com/es6/ch_modules.html#sec_overview-modules" target="_blank">built-in modules.</a>


---

#### Export and Import

* The **export** keyword labels variables and functions that should be accessible from outside the current module.
* The **import** allows to import functionality from other modules.


---

####  ES6 Modules

index.html
```HTML
  <!-- <script src="someNameModule.js" type="module"></script>  import javascript file and type module needed -->
  <!-- <script src="index.js" type="module"></script>  import javascript file and type module needed -->
```
index.js
```JavaScript
import { name } from './someNameModule.js';
```

someNameModule.js
```JavaScript
export const name = 'Jane Doe';
```


---

####  ES6 Modules

* import & export
index.js
```JavaScript
import { name } from './someNameModule.js';
```

someNameModule.js
```JavaScript
export const name = 'Jane Doe';
```


---

####  ES6 Modules

* default import/export

index.js
```JavaScript
import name from './someNameModule.js';
```

someNameModule.js
```JavaScript
export default const name = 'Jane Doe';
```


---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>