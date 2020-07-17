let email = 'harry.potter@mail.com';
email // 'harry.potter@mail.com'
email = 'hermione.granger@mail.com';
email // 'hermione.granger@mail.com'

// --------------------------------------------------------

function sumNumbers(numbers: number[]) {
  let sum = 0;
  let num = numbers.pop();

  while (num !== undefined) {
    sum += num;
    num = numbers.pop();
  }

  return sum;
}

const list = [1, 2, 3, 4];
sumNumbers(list); // 10
list; // []

// --------------------------------------------------------

const mutableAuthor = {
  name: 'Walter Isaacson',
  email: 'walter.isaacson@mail.com',
  books: [
    {
      title: 'Leonardo Da Vinci',
      price: 50.00,
    }
  ]
};

mutableAuthor.books.push({
  title: 'Steve Jobs',
  price: 10.00
});


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

author.books.push({
  title: 'Steve Jobs',
  price: 10.00
});

// --------------------------------------------------------

type Book = Readonly<{
  title: string;
  price: number;
}>;

type Author = Readonly<{
  name: string;
  email: string;
  books: ReadonlyArray<Book>;
}>;

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
