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

type CreditCard = {
  number: number;
  cardholder: string;
  expirationDate: Date;
  secutiryCode: number;
}

type DebitCard = {
  number: number;
  cardholder: string;
  expirationDate: Date;
  secutiryCode: number;
}

type PaymentMethod = CreditCard | DebitCard;

function purchase(paymentMethod: PaymentMethod) {
  if (paymentMethod instanceof CreditCard) {
    // purchase with credit card
  } else {
    // purchase with debit card
  }
}
