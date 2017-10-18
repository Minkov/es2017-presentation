<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# JavaScript Features in ES2017
## And es2015, es2016

<!-- section start -->
<!-- attr: { id:'table-of-contents' } -->
# Table of Contents

- What is ECMAScript?
- Generator functions
- OOP
  - Classes, inheritance, mixins
- Destructuring assignments
- async/await

# ECMAScript 2017

- The "JavaScript" standard
- Provides a specification of features
- Has some implementations, but JavaScript is the most known

<!-- attr: {style: 'font-size: 0.9em'} -->
# ECMAScript Versions

- ES2015
  - Adds significant number of new syntax
    - Classes, destructuring assignments, function generators, and more
- ES2016
  - Adds the exponentiation operator (**)
- ES2017
  - Adds await/async

# Generator Functions

- Returns a generator object
- Generators are functions which can be exited and later re-entered
  - Their context will be saved across re-entrances
- They generate many Generator objects
<!-- attr: {style: 'font-size: 0.9em'} -->
# Generator Functions Example

```javascript
function* incrementGenerator() {
  let lastId = 0;
  while(true) {
    yield ++lastId;
  }
}

let incrementor1 = incrementGenerator();
let incrementor2 = incrementGenerator();
console.log(incrementor1.next().value); // 1
console.log(incrementor1.next().value); // 2
console.log(incrementor1.next().value); // 3
console.log(incrementor2.next().value); // 1
console.log(incrementor1.next().value); // 4
```

# OOP

- It is pretty much a syntatic sugar over prototype-based inheritance
- Many features here:
  - Classes, inheritance, anonymous classes
    - No multiple inheritance
    - ~kind-of~ support of mixins- Cannot be invoked without `new`
  - Have static members

<!-- attr: {hasScriptWrapper: true} -->
# OOP Example

```javascript
class Readable {
  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
}

class Book extends Readable {
  constructor(title, description, authors) {
    super(title, description);
    this.authors = authors;
  }
}
```

# Destructuring Assignments

- Pack, unpack values from objects and arrays

```javascript
let book = {title: 'The name of the wind', description: 'Book about magic and magic university'};
let {title, description} = book;
let [x, y, ...rest] = [1, 2, 3, 4, 5];
// cloning arrays:
let b = [...a];

// swapping values
let [x, y] = [y, x];

Math.max(...numbers); // instead of Math.max.apply(null, numbers);
```

# Async/await

<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section' } -->
# Questions
## Mobile Applications for Android
[link to the forum](http://telerikacademy.com/Forum/Category/64/android-mobile-apps)
