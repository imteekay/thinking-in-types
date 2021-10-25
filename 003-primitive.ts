const isTypescript: boolean = true;
const age: number = 24;
const username: string = 'tk';

// Can't assign different types
const name: string = 2; // Type '2' is not assignable to type 'string'.
const number: number = 'name'; // Type '"name"' is not assignable to type 'number'.

// Can't use different types for math operations
'2' * '2';
// The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
// The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type

1 / '1';
// The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type
