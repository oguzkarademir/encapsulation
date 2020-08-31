const obj1 = {
  entries: { first: 'hi!', second: 'bye!' },
  currentKey: 'second',
  getCurrentEntry: function () {
    return this.entries[this.currentKey];
  }
}

const obj2 = {
  entries: { first: 'hi!', second: 'bye!' },
  currentKey: 'second',
  get currentEntry() {
    return this.entries[this.currentKey];
  }
}

// fill in the blanks to pass the asserts:

const obj1current1 = obj1.getCurrentEntry();
console.assert(obj1current1 === 'bye!', 'Test 1');

const obj2current1 = obj2.currentEntry;
console.assert(obj2current1 === 'bye!', 'Test 2');

obj1.currentKey = 'first';
obj2.currentKey = 'first';

const obj1current2 = obj1.getCurrentEntry();
console.assert(obj1current2 === 'hi!', 'Test 3');

const obj2current2 = obj2.currentEntry;
console.assert(obj2current2 === 'hi!', 'Test 4');
