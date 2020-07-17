// Using `as const` to provide immutability in compile-time
const author = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.00,
    }
  ]
} as const;

author.name = 'TK';
author.books.push({
  title: 'Steve Jobs',
  price: 30
});

// Using Readonly to provide immutability in compile-time
type Book = {
  title: string;
  price: number;
};

type Author = {
  name: string;
  email: string;
  books: Book[];
};

const author: Author = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.00,
    }
  ]
};

const book: Book = {
  title: 'Steve Jobs',
  price: 30
};

author.name = 'TK';
author.books.push(book);
