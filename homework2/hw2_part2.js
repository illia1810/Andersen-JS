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