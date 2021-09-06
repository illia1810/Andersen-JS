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