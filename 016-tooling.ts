const city = 'Tokyo';
city.toUppercase();
// Property 'toUppercase' does not exist on type
// 'string'. Did you mean 'toUpperCase'?

// --------------------------------------------------

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

const people: People[] = [
  { name: 'TK', age: 24 },
  { name: 'Kaio', age: 12 },
  { name: 'Kazumi', age: 31 },
];

for (const person of people) {
  console.log(person.agi);
  // Property 'agi' does not exist on type 'People'.
}

// --------------------------------------------------

type SnackbarStatus = {
  isClosed: boolean;
}

const buildSnackbar = (status: SnackbarStatus) => {
  if (status.isClosed) {
    openSnackbar();
  }
};

buildSnackbar({ isclosed: true });
// Object literal may only specify known properties,
// but 'isclosed' does not exist in type 'SnackbarStatus'.
// Did you mean to write 'isClosed'?

// --------------------------------------------------

'TK'.
