let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10;
const a = 100; //eslint-disable-line

const person = {
  name: 'Kauan' as const,
  lastname: 'Hindlmayer',
};

function chooseColor(color: 'Red' | 'Yellow' | 'Blue') {
  return color;
}

console.log(chooseColor('Red'));

// Module mode
export default 1;
