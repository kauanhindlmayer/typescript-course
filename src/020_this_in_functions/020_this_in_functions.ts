export function func(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

func.call(new Date(), 'Kauan', 17);
func.apply(new Date(), ['Kauan', 17]);
