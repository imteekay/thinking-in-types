const product = {
  title: 'Some product',
  price: 100.00,
};

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

function sumAllPrices(products) {
  return products.reduce((sum, product) => sum + product.price, 0);
};

sumAllPrices(products); // 425
