class SortedList {
  constructor() {
    // ...
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // ...
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  load(pos) {
    // ...
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    // ...
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    // ...
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    // ...
    return this.items.reduce((acc, value) => {
      return acc + value;
    }, 0);
  }

  avg() {
    // ...
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
