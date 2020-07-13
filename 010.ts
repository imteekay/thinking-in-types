// In Javascript
function sum(a, b) {
  return a + b;
}

sum(1, 2); // 3
sum(2, 2); // 4
sum(0, 'string'); // '0string'

// In Typescript
function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2); // 3
sum(2, 2); // 4
sum(0, 'string'); // Argument of type '"string"' is not assignable to parameter of type 'number'.
