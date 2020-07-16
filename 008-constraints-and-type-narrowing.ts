const untypedHalf = (x) => x / 2;

[
  null,
  undefined,
  0,
  '0',
  'TK',
  { username: 'tk' },
  [42, 3.14],
  (a, b) => a + b,
]

untypedHalf(null); // 0
untypedHalf(undefined); // NaN
untypedHalf(0); // 0
untypedHalf('0'); // 0
untypedHalf('TK'); // NaN
untypedHalf({ username: 'tk' }); // NaN
untypedHalf([42, 3.14]); // NaN
untypedHalf((a, b) => a + b); // NaN

const half = (x: number) => x / 2;

half(null); // Argument of type 'null' is not assignable to parameter of type 'number'.
half(undefined); // Argument of type 'undefined' is not assignable to parameter of type 'number'.(
half(0); // 0
half('0'); // Argument of type '"0"' is not assignable to parameter of type 'number'.
half('TK'); // Argument of type '"TK"' is not assignable to parameter of type 'number'.
half({ username: 'tk' }); // Argument of type '{ username: string; }' is not assignable to parameter of type 'number'.
half([42, 3.14]); // Argument of type 'number[]' is not assignable to parameter of type 'number'.
half((a, b) => a + b); // Argument of type '(a: any, b: any) => any' is not assignable to parameter of type 'number'.
