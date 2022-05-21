let fruit = {
    name: 'grape',
    description: 'Popular and famous fruit',
    colors: ['purple', 'green'],
    isSmall: true,
    order: 1
}

console.log(fruit['name']);
console.log(fruit.description);
console.log(fruit?.owner || 'Riza');

const keys = Object.keys(fruit);
console.log('keys >> ', keys);

const values = Object.values(fruit);
console.log('values >> ', values);

const entries = Object.entries(fruit);
console.log('entries >> ', entries);

fruit.price = 25000;
console.log(fruit);
fruit.price = 30000;
console.log(fruit);

delete fruit.price;
console.log(fruit);