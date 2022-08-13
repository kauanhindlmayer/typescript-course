/* Recomendado */
// Condicional
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
const body2 = document.querySelector('body') as HTMLBodyElement;
body2.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não Recomendado */
// Type assertion
const body3 = document.querySelector('body') as unknown as number;

// Non-null assertion (!)
const body4 = document.querySelector('body')!; // eslint-disable-line
body4.style.background = 'red';
