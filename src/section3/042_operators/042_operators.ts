// Optional chaining and Null coalescing operator
type TheDocument = {
  title: string;
  text: string;
  date?: Date;
};

const documento: TheDocument = {
  title: 'The Title',
  text: 'The text',
  // date: new Date(),
};

console.log(documento.date?.toDateString() ?? "1 - Date don't exist");
console.log(undefined ?? "2 - Date don't exist");
console.log(null ?? "3 - Date don't exist");
console.log(false ?? "4 - Date don't exist");
console.log(0 ?? "5 - Date don't exist");
