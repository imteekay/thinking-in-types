let city = 'new york city';
console.log(city.toUppercase());

// Property 'toUppercase' does not exist on type
// 'string'.Did you mean 'toUpperCase' ?

// ---------------------------------------------------------

const states = [
  { name: 'TK', age: 24 },
  { name: 'Kaio', age: 12 },
  { name: 'Kazumi', age: 31 },
];

for (const state of states) {
  console.log(state.agi);
  // Property 'agi' does not exist on type '{ name: string; age: number; }'
}

// ---------------------------------------------------------
