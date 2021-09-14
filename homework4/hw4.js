function concatStrings(str, separator) {
  let outputStr = str;
  if (typeof separator !== "string") {
    separator = "";
  }

  function nextStep(nextStr) {
    if (typeof nextStr !== "string") {
      return outputStr;
    }
    outputStr = outputStr + separator + nextStr;
    return nextStep;
  }
  return nextStep;
}

class Calculator {
  constructor(firstNum, secondNum) {
    this.firstNum = firstNum;
    this.secondNum = secondNum;
    if (
      typeof firstNum !== "number" ||
      typeof secondNum !== "number" ||
      !isFinite(firstNum) ||
      !isFinite(secondNum)
    ) {
      throw new Error("Put two numbers!");
    }
  }

  setX = (num) => {
    if (typeof num !== "number" || !isFinite(num)) {
      throw new Error("Method setX should take one number!");
    }
    this.firstNum = num;
  };

  setY = (num) => {
    if (typeof num !== "number" || !isFinite(num)) {
      throw new Error("Method setY should take one number!");
    }
    this.secondNum = num;
  };

  logSum = () => {
    console.log(this.firstNum + this.secondNum);
  };

  logMul = () => {
    console.log(this.firstNum * this.secondNum);
  };

  logSub = () => {
    console.log(this.firstNum - this.secondNum);
  };

  logDiv = () => {
    if (this.secondNum === 0) {
      throw new Error("Second value could't be a zero for logDiv method");
    }
    console.log(this.firstNum / this.secondNum);
  };
}
