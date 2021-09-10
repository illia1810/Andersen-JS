Array.prototype.myFilter = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    let newFilteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue;
        fn.call(context, arr[i], i, this) && newFilteredArr.push(arr[i])
    }
    return newFilteredArr
}

const createDebounceFunction = (fn, ms) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout( () => {
            timeout = null;
            fn(...args);
        }, ms)
    }
}