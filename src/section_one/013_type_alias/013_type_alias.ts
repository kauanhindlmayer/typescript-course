type Age = number;
type Person = {
  name: string;
  age: Age;
  salary: number;
  favouriteColor?: FavouriteColor;
};

type ColorRGB = 'Red' | 'Green' | 'Blue';
type ColorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type FavouriteColor = ColorRGB | ColorCMYK;

const person: Person = {
  name: 'Kauan',
  age: 17,
  salary: 200_000,
};

export function setFavouriteColor(
  person: Person,
  color: FavouriteColor,
): Person {
  return { ...person, favouriteColor: color };
}

console.log(setFavouriteColor(person, 'Blue'));
console.log(person);
