type MapStringsCallback = (item: string) => string;

export function mapString(
  array: string[],
  callbackfn: MapStringsCallback,
): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item));
  }

  return newArray;
}

const alphabet = ['a', 'b', 'c'];
const alphabetMapped = mapString(alphabet, (item) => item.toUpperCase());

console.log(alphabet);
console.log(alphabetMapped);
