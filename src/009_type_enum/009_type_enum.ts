enum Colors {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
}

// console.log(Colors);
console.log(Colors.RED);

function chooseTheColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseTheColor(0);
