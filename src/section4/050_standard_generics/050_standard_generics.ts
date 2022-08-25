// Record
const object1: Record<string, string | number> = {
  name: 'Kauan',
  lastname: 'Hindlmayer',
  age: 18,
};
console.log(object1);

type PersonProtocol = {
  name?: string;
  lastname?: string;
  age?: number;
};

// Required
type RequiredPerson = Required<PersonProtocol>;

// Partial
type PartialPerson = Partial<PersonProtocol>;

// Readonly
type ReadonlyPerson = Readonly<RequiredPerson>;

// Pick
type PickPerson = Pick<RequiredPerson, 'name' | 'lastname'>;

const object2: RequiredPerson = {
  name: 'Kauan',
  lastname: 'Hindlmayer',
  age: 18,
};
console.log(object2);

// Extract and Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type ExcludeType = Exclude<ABC, CDE>;
type ExtractType = Extract<ABC, CDE>;

//
type AccountMongoDB = {
  _id: string;
  name: string;
  lastname: string;
  age: number;
};

type AccountAPI = Pick<AccountMongoDB, Exclude<keyof AccountMongoDB, '_id'>> & {
  id: string;
};

const accountMongoDB: AccountMongoDB = {
  _id: '9IxTwgsquI',
  name: 'Kauan',
  lastname: 'Hindlmayer',
  age: 18,
};

function mapAccount(accountMongoDB: AccountMongoDB): AccountAPI {
  const { _id, ...accountData } = accountMongoDB;
  return { ...accountData, id: _id };
}

const accountAPI = mapAccount(accountMongoDB);
console.log('API:');
console.log(accountAPI);

// Module mode
export default 1;
