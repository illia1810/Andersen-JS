class ElementInStack {
    constructor(value, previosStack) {
        this.value = value;
        this.previosStack = previosStack;
    }
}

class Stack {
    #actualStack = null;
    #countingOfElementsInStack = 0;
    constructor(size = 10) {
        if(size > 0 && Number.isFinite(size)) {
            this.size = size;
        } else {
            throw new Error('Invalid size of stack');
        }
    }
    
    push(elem) {
        if(this.countingOfElementsInStack === this.size) {
            throw new Error('Stack is oversized');
        }
        this.#actualStack = new ElementInStack(elem, this.#actualStack);
        this.#countingOfElementsInStack++;
    }
    
    pop() {
        if(!this.#countingOfElementsInStack) {
            throw new Error('Stack is empty');
        }
        this.#actualStack = this.#actualStack.previosStack;
        this.#countingOfElementsInStack--;
    }
    
    peek() {
        return this.actualStack === null ? null : this.#actualStack.value;
    }
    
    isEmpty() {
        return !this.#countingOfElementsInStack;
    }
    
    toArray() {
        let arr = [];
        function addStackElementToArray(stack) {
            arr = [stack.value, ...arr];
            if(stack.previosStack === null) return;
            else addStackElementToArray(stack.previosStack);
        }
        if(this.#actualStack)
            addStackElementToArray(this.#actualStack);
        return arr;
    }
    
    static fromIterable(iterable) {
        if(!iterable[Symbol.iterator]) {
            throw new Error('Object is not iterable')
        }
        let iterableArr = [...iterable];
        let newStack = new Stack(iterableArr.length);
        iterableArr.forEach((elem)=>{
            newStack.push(elem);
        });
        return newStack;
    }
}

module.exports = { Stack };