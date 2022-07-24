/* eslint-disable */
// Tipos básicos (Aqui ocorre inferência de tipos)
let nome: string = 'Kauan'; // Qualquer tipo de strings: '' "" ``
let idade: number = 17; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true or false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Kauan',
  idade: 17,
};
// adulto?: -> Chave opcional

// Funções
function soma(x: number, y: number) {
  return x + y;
}

const result = soma(2, 2);
console.log(result);
