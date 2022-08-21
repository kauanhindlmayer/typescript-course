type ColorsObject = typeof colorsObject;
type ColorsKeys = keyof ColorsObject;

const colorsObject = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function translateColors(color: ColorsKeys, colors: ColorsObject) {
  return colors[color];
}

console.log(translateColors('vermelho', colorsObject));
console.log(translateColors('verde', colorsObject));
console.log(translateColors('roxo', colorsObject));
