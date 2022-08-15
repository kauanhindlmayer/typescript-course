enum Colors {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
}

// console.log(Colors);
console.log(Colors.RED);

export function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(0);
