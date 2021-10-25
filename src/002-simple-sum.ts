// sum function in javascript
function JSsum(a, b) {
  return a + b;
}

JSsum(1, 2); // 3
JSsum(2, 2); // 4
JSsum(0, 'string'); // '0string'   WTF!

// sum function in typescript
function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2); // 3
sum(2, 2); // 4
sum(0, 'string'); // Argument of type '"string"' is not assignable to parameter of type 'number'.
