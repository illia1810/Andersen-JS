const myIterable = {
    from: 1,
    to: 4,
  
    [Symbol.iterator]() {
      this.current = this.from;
      this.last = this.to;
      return this;
    },
  
    next() {
      if (myIterable.to > myIterable.from && Number.isInteger(myIterable.to) && Number.isInteger(myIterable.from)) {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      } else {
        throw new Error('Ошибка!')
      }
    }
  };