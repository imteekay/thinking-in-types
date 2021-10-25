const product = {
  title: 'Some product',
  price: 100.0,
};

const products = [
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

function sumAllPrices(products) {
  return products.reduce((sum, product) => sum + product.price, 0);
}

sumAllPrices(products); // 425
