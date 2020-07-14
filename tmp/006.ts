// Type Inference

// Redundant
const num: number = 1;

// Implicit
const num = 1;

// -----------------------------------------------------

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

// ----------------------------------a-------------------

// Redundant
const squareAll = (numbers: number[]): number[] => {
  return numbers.map(number => number * number);
};

// Implicit
const squareAll = (numbers: number[]) => {
  return numbers.map(number => number * number);
};

// ----------------------------------a-------------------

// Redundant
const sum = (a: number = 1, b: number): number => {
  return a + b;
};

// Implicit
const sum = (a = 1, b: number) => {
  return a + b;
};

// ----------------------------------a-------------------

// Redundant
app.get('/health', (request: express.Request, response: express.Response) => {
  response.send('OK');
});

// Implicit
app.get('/health', (request, response) => {
  response.send('OK');
});
