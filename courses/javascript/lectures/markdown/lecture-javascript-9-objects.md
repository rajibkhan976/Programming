### 9. JavaScript
#### Objects


---

#### What is an object?

* A product that can do things and contains information about its current state.
* Each Object has a purpose and a task.
* Real world examples could be  a **lamp** or a **human**.


---

#### <i>In JavaScript, objects are king. If you understand objects, you understand JavaScript.</i> - W3Schools


---

#### Objects can have <u>Properties</u> and <u>Methods</u>


---
#### Properties

* A property is a variable connected to a specific object.
* A property contains information about the object.


---

#### Methods

* A method is a function connected to a specific object.
* Methods are actions that can be performed on objects.
* Methods are used to give an object functionality.


---

#### Real world properties & methods

* What properties does a human have?
* What methods does a human have?


---

#### Exercise

* Pair up with the one next to you.
* Pick 2 objects from the real world, could be anything (plants, people, vehicles, furniture).
* Identify properties and methods of all these.


---

####  Objects in JavaScript

* An object consists of a group of values(properties, methods) compiled under one name.
* These are name Value pairs.
* Objects are like variables. But objects can contain many values.

```JavaScript
let obj = { 
  color: 'red', // color = name, red = value
  run: function(){
    console.log('running');
  }
};
```


---

####  Creating an object using an object literal

```JavaScript
let car = { color: 'red' };
```


---

####  Creating an object using the **new** keyword

```JavaScript
let car = new Object();

car.color = "red";
```


---

####  Accessing an object

```JavaScript
let car = { color: 'red' };

console.log(car.color); // red "dot notation"
console.log(car['color']); // red "bracket notation"
```


---

#### Objects - Methods

* When a function is tied to an object it is called a **Method**.

```JavaScript
let person = {
  firstName: 'John',
  lastName: 'Doe',
  // getFullName is a method
  getFullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
```


---

#### Objects - Calling Methods

```JavaScript
let person = {
  firstName: 'John',
  lastName: 'Doe',
  // getFullName is a method
  getFullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

let name = person.getFullName(); // John Doe
let name2 = person['getFullName'](); // John Doe
```


---

#### Dot notation vs bracket notation

```JavaScript
const variable = 'name';

const obj = {
name: 'value'
};

obj[variable]; // 'value'
obj.variable; // undefined
```



---

#### <u>Dot</u> notation vs bracket notation

```JavaScript
obj.123;        // SyntaxError
obj.123name;    // SyntaxError
obj.name123;    // works
obj.$name;      // SyntaxError
obj.'name-123'; // SyntaxError
obj.NAME;       // works
obj.name;       // works
```


---

#### Dot notation vs <u>bracket</u> notation

```JavaScript
obj['123'];          // works
obj['123value'];     // works
obj['value123'];     // works
obj['$value'];       // works
obj['value'];        // works 
obj['value value'];  // works 
```


---

#### Dot notation vs <u>bracket</u> notation

```JavaScript
let myObj = {};

for (var i = 0; i < 10; i++) {
myObj['key' + i] = i;
}

console.log(myObj);
```


---

####  Adding to an object after declaration

* If the property does not exist from before it will be added.

```JavaScript
let bike = {
  color: 'blue'
}

bike.hasFrontLight = true; // { color: 'blue', hasFrontLight: true }
bike['hasBackLight'] = false; // { color: 'blue', hasFrontLight: true, hasBackLight: false }

```



---

####  Removing from an object

* delete will remove the property or method from the object.

```JavaScript
let bike = {
  color: 'blue',
  hasFrontLight:true
}

delete bike.hasFrontLight; // { color: 'blue'}
```



---

####  Mutating JavaScript Objects

* An immutable value is one that, once created, can never be changed.
* Objects are mutable.
* They are also addressed by reference, not by value.

```JavaScript
let bike = { color: 'blue' };

bike.color = 'red';

console.log(bike.color); // red
```


---

#### Objects - addressed by reference, not by value

```JavaScript
let car = { color: 'red', wheels: 4};

let x = car;  // This will not create a copy of car.

// The object x is not a copy of car. It is car. Both x and car are the same object.

// Any changes to x will also change car, because x and car are the same object.

x.wheels = 8; // This will change both x.wheels and car.wheels 

console.log(x.wheels) // 8
console.log(car.wheels) // 8
```



---

####  Object in an object

```JavaScript
let bike = {
  color: 'blue',
  pedal: function(){
    console.log('I pedal')
  },
  frontLight: {
    color: 'yellow'
  }
}

let hasFrontLight = bike.frontLight.color; // yellow
```


---

####  Creating many objects: constructor notation

* The **new** keyword followed by a call to a function creates a new Object.
* For every time the **new** keyword is used a new instance of the objects is created.

```JavaScript
function Person(name){
  this.name = name;
};

let user1 = new Person('John Doe'); // Person { name: 'John Doe' }
let user2 = new Person('Jane Doe'); // Person { name: 'Jane Doe' }
```



---

#### In JavaScript, almost "everything" is an object.

* **Booleans, Numbers & Strings** can be objects(if they are defined with the **new** keyword)
* **Dates** - are always objects
* **Maths** - are always objects
* **Regular expressions** - are always objects
* **Arrays** - are always objects
* **Functions** - are always objects
* **Objects** - are always objects

All JavaScript values, except primitives, are objects.


---

#### Functions are Objects

* Functions are a special kind of Object.
* You can attach primitives and other functions.
* Functions have a "code" property which is the code that runs when the function is invoked.


---

#### Functions are Objects

* Example just to show that it works.

```JavaScript
let greet = function(){
  console.log('Hi!');
}

greet.language = 'swedish';

console.log(greet.language); // swedish
```



---

#### Arrays are a special type of Objects

```JavaScript
let users = ['Jane', 'John'];

// forEach is a method of the Array object
users.forEach(function(user) {
  console.log(users.length);  // length is a property
});
```


---

#### Iterating over Objects

* The for...in statement iterates over all non-Symbol, enumerable properties of an object.

```JavaScript
let string1 = "";
let object1 = {a: 1, b: 2, c: 3};

for (let property1 in object1) {
string1 += object1[property1];
}

console.log(string1);  // "123"
```

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)



---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>
