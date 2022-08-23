interface PersonProtocol<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastname: T;
  age: U;
};

const student1: PersonProtocol<string, number> = {
  name: 'Kauan',
  lastname: 'Hindlmayer',
  age: 18,
};

const student2: PersonProtocol<number, number> = {
  name: 123,
  lastname: 456,
  age: 18,
};

const student3: PersonProtocol2 = {
  name: 'Kauan',
  lastname: 'Hindlmayer',
  age: 18,
};

console.log(student1, student2, student3);
