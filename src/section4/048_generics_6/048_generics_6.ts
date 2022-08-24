function mergeObjects<T, U>(object1: T, object2: U): T & U {
  // return { ...object1, ...object2 };
  return Object.assign({}, object1, object2);
}

const object1 = { key1: 'Value 1' };
const object2 = { key2: 'Value 2' };

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
