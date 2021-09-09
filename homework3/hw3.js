Array.prototype.myFilter = function (fn, context) {
    let arr = Array.prototype.slice.call(this)
    let newFilteredArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue;
        fn.call(context, arr[i], i, this) && newFilteredArr.push(arr[i])
    }
    return newFilteredArr
}

const createDebouncedFunction = (fn, ms) => {
    let timeout;
    return function () {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }

        timeout = setTimeout(function () {
            fn();
            timeout = null;
        }, ms);
    }
}