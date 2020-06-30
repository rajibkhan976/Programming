### 19. JavaScript
#### Useful methods


---
        
#### Built in methods
* In this lecture we will look into built the built in methods:
  * Iterating over them extracting values.
  * Filtering out values.
  * Sorting values.
  * Converting objects into arrays.
  * Creating new arrays from other arrays.


---

#### Arrays and Objects
* Handling objects and arrays is something developers do on a daily basis.
  * Array.map()
  * Array.filter()
  * Object.keys()
  * Object.values()
  * Object.entries()


---

### But first the classic For loop


---

#### Iterating over Arrays with for loop

```JavaScript
let array1 = [1, 4, 9, 16];
let newArray = [];

for(let i = 0; i < array1.length; i++){
    let newValue = array1[i] * 2;
    newArray.push(newValue);
}

console.log(newArray); // [2, 8, 18, 32]
```



---

#### For...of loop

* The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set

```JavaScript 
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
```
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">MDN reference</a>


---

#### Iterating over Objects with For

* The for...in statement iterates over all non-Symbol, enumerable properties of an object.

```JavaScript
let string1 = "";
let object1 = {a: 1, b: 2, c: 3};

for (let property1 in object1) {
 string1 += object1[property1];
}

console.log(string1); "123"
```

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)



---

#### Array.map()

* The map() method creates a new array with the results of calling a provided function on every element in the calling array.
 
```JavaScript
let array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(function(x){
  return x * 2
} );

console.log(array1); // still [1, 4, 9, 16] since a new Array was created.
console.log(map1); // [2, 8, 18, 32]
```
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)



---

#### Array.filter()

* The filter() method creates a new array with all elements that pass the test implemented by the provided function.
 
```JavaScript
let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function(word){
  return word.length > 6
});

console.log(words); // still ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'] since a new Array was created.
console.log(result); // ["exuberant", "destruction", "present"]

```
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)



---

#### Object.keys()

* The Object.keys() method returns an array of a given object's own enumerable property names, in the same order as we get with a normal loop.
 
```JavaScript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1)); // ["a", "b", "c"]

```
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)



---

#### Object.values()

* The Object.values() method returns an **array** of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

```JavaScript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1)); // ["somestring", 42, false]

```
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)



---

#### Object.entries()

* The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop  

```JavaScript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.entries(object1)); // [ ["a", "somestring"], Array ["b", 42], Array ["c", false]]

```
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)


---

#### Other good to know methods.


---

#### Array.every()

* The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 

```JavaScript
let array = [1, 2, 3, 4, 5];

let even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.every(even)); // expected output: false
```
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)


---

#### Array.some()

*  The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

```JavaScript
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

let array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.some(isBelowThreshold)); // expected output: false
```
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)


---

#### Array.sort()

* The sort() method sorts the elements of an array

```JavaScript
let months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

let array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)



---

#### Array.concat()

* The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.  

```JavaScript
let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2)); // expected output: Array ["a", "b", "c", "d", "e", "f"]
```
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)



---

### <a href="https://github.com/SofthouseVxo/Education" target="_blank">Github examples!</a>