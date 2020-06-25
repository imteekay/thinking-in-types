let city = 'new york city';
console.log(city.toUppercase());
console.log(city.toUpperCase());

// Property 'toUppercase' does not exist on type
// 'string'.Did you mean 'toUpperCase' ?

// ---------------------------------------------------------

const people = [
  { name: 'TK', age: 24 },
  { name: 'Kaio', age: 12 },
  { name: 'Kazumi', age: 31 },
];

for (const person of people) {
  console.log(person.agi);
  // Property 'agi' does not exist on type '{ name: string; age: number; }'
}

type People = {
  name: string;
  age: number;
}

const people: People = [
  { name: 'TK', age: 24 },
  { name: 'Kaio', age: 12 },
  { name: 'Kazumi', age: 31 },
];

for (const person of people) {
  console.log(person.agi);
  // Property 'agi' does not exist on type '{ name: string; age: number; }'
}

// ---------------------------------------------------------

interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    // ~~~~~~~~~ 'Rectangle' only refers to a type,
    //           but is being used as a value here
    return shape.width * shape.height;
    // ~~~~~~ Property 'height' does not exist
    //
  } else {
    return shape.width * shape.width;
  }
}
