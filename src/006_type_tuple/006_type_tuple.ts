// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Kauan'];
const dadosCliente2: [number, string, string?] = [1, 'Kauan', 'Hindlmayer'];
const dadosCliente3: [number, string, string?] = [1, 'Kauan'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Kauan', 'Hindlmayer'];

dadosCliente2[0] = 10;
dadosCliente2[2] = 'Pedri';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly Array
const array1: readonly string[] = ['Kauan', 'Hindlmayer'];
const array2: ReadonlyArray<string> = ['Kauan', 'Hindlmayer'];

console.log(array1);
console.log(array2);
