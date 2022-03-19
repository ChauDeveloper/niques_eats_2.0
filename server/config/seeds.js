const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Main Dishes' },
    { name: 'Sides' },
    { name: 'Desserts' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Beef Stew',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'beef-stew.jpg',
      category: categories[0]._id,
      price: 12,
      quantity: 16
    },
    {
        name: 'Chicken Salad',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'chicken_meal.jpg',
        category: categories[0]._id,
        price: 15,
        quantity: 13
      },
      {
        name: 'Biscuit',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'Biscuits.jpg',
        category: categories[1]._id,
        price: 5,
        quantity: 45
      },
      {
        name: 'Chocolate Brownie',
        description:
          'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'chocolate-brownie.jpg',
        category: categories[2]._id,
        price: 7,
        quantity: 10
      },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Test1',
    lastName: 'Test1',
    email: 'test1@test.com',
    password: 'test1',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Test2',
    lastName: 'Test2',
    email: 'test2@test.com',
    password: 'test2'
  });

  console.log('users seeded');

  process.exit();
});
