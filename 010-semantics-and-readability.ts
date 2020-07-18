function saveMyString(value: string): any {
  sessionStorage.myString = value;
}

function saveMyString(value: string): void {
  sessionStorage.myString = value;
}

function saveMyString(value: string) {
  sessionStorage.myString = value;
}

// ----------------------------------------------

// Type Inference

// Redundant
const num: number = 1;

// Implicit
const num = 1;

// Redundant
function sum(a: number, b: number): number {
  return a + b;
};

// Implicit
function sum(a: number, b: number) {
  return a + b;
};

// Redundant
function squareAll(numbers: number[]): number[] {
  return numbers.map(number => number * number);
};

// Implicit
function squareAll(numbers: number[]) {
  return numbers.map(number => number * number);
};

// Redundant
const person: { name: string, age: number } = {
  name: 'TK',
  age: 24
};

// Implicit
const person = {
  name: 'TK',
  age: 24
};

// ----------------------------------------------

function sum(a: number, b: number): number {
  return a + b;
};

function sum(a: number, b: number): string {
  return `Sum: ${a + b}`;
};

sum(1, 2); // Sum: 3

// function sum(a: number, b: number): number
function sum(a: number, b: number) {
  return a + b;
};

// function sum(a: number, b: number): string
function sum(a: number, b: number) {
  return `Sum: ${a + b}`;
};
