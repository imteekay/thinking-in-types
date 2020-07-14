// Javascript types

// product object
const product = {
  title: 'Some product',
  price: 100.00,
};

// list of products
const products = [
  {
    title: 'Product 1',
    price: 100.00,
  },
  {
    title: 'Product 2',
    price: 25.00,
  },
  {
    title: 'Product 3',
    price: 300.00,
  }
];

// sum all products prices
function sumAllPrices(products) {
  return products.reduce((sum, product) => sum + product.price, 0);
};

sumAllPrices(products); // 425

// ---------------------------------------------------------------

// Typescript

const product1: { title: string, price: number } = {
  title: 'Some product',
  price: 100.00,
};

const product2: { title: string, price: number } = {
  title: 100.00,
  price: 'Some product',
};

type Product = {
  title: string;
  price: number;
};

const product3: Product = {
  title: 'Some product',
  price: 100.00,
};

const products: Product[] = [
  {
    title: 'Product 1',
    price: 100.00,
  },
  {
    title: 'Product 2',
    price: 25.00,
  },
  {
    title: 'Product 3',
    price: 300.00,
  }
];

function sumAllPrices(products: Product[]): number {
  return products.reduce((sum, product) => sum + product.price, 0);
};

sumAllPrices(products); // 425
sumAllPrices([]); // 0
sumAllPrices([{ title: 'Test', willFail: true }]); // Type '{ title: string; willFail: true; }' is not assignable to type 'Product'.
