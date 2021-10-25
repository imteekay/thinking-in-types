function sumAll(a: number, b: number, c: number) {
  return a + b + c;
}

function sumAll(a: number, b: number, c?: number) {
  if (c) {
    return a + b + c;
  }

  return a + b;
}

function sumAll(a: number, b: number, c: number = 3) {
  return a + b + c;
}

let number = null;
sumAll(1, 2, number);

let value: number | undefined;
sumAll(1, 2, value); // 3
