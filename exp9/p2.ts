import * as readline from 'readline';

interface Product {
  id: number;
  name: string;
  price: number;
}
 const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 499 },
  { id: 3, name: 'Tablet', price: 299 },
];

const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the product ID to search: ', (input) => {
  const id = parseInt(input);
  const product = getProductById(id);

  if (product) {
    console.log(`Product found: ${product.name} - $${product.price}`);
  } else {
    console.log('Product not found.');
  }

  rl.close();
});
