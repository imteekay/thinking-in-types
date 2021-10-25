const productTest: { title: string; price: number } = {
  title: 'Some product',
  price: 100.0,
};

const wrongProduct: { title: string; price: number } = {
  title: 100.0, // Type 'number' is not assignable to type 'string'.
  price: 'Some product', // Type 'string' is not assignable to type 'number'.
};

type Product = {
  title: string;
  price: number;
};

const product: Product = {
  title: 'Some product',
  price: 100.0,
};

const products: Product[] = [
  {
    title: 'Product 1',
    price: 100.0,
  },
  {
    title: 'Product 2',
    price: 25.0,
  },
  {
    title: 'Product 3',
    price: 300.0,
  },
];

function sumAllPrices(products: Product[]): number {
  return products.reduce((sum, product) => sum + product.price, 0);
}

sumAllPrices(products); // 425
sumAllPrices([]); // 0
sumAllPrices([{ title: 'Test', willFail: true }]); // Type '{ title: string; willFail: true; }' is not assignable to type 'Product'.
