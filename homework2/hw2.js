const makeObjectDeepCopy = obj => {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);
  
    Object.keys(clone).forEach(
      key =>
      (clone[key] =
        typeof obj[key] === "object" ? makeObjectDeepCopy(obj[key]) : obj[key])
    );
  
    return Array.isArray(obj) && obj.length
      ? (clone.length = obj.length) && Array.from(clone)
      : Array.isArray(obj)
        ? Array.from(obj)
        : clone;
  }

  function selectFromInterval(arr, a, b) {
    let newArr = [];
    if (Array.isArray(arr) && Number(a) && Number(b) || a === 0 || b === 0) {
      for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) || arr[i] === 0) {
          if (a > b) {
            if (arr[i] <= a && arr[i] >= b) {
              newArr.push(arr[i]);
            }
          } else {
            if (arr[i] >= a && arr[i] <= b) {
              newArr.push(arr[i]);
            }
          }
        } else throw new Error('Ошибка!')
      }
    } else throw new Error('Ошибка!')
    return console.log(newArr);
  }

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
