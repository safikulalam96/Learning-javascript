/*we use filter to store the data by using loop, which cannot be done through forEach loop*/
/*remember when we use parenthesis we have return or if we use () for filter method then we don't need to use return*/
const myNumbs=[2,45,6,7,8,9,0,2]

const store=myNumbs.filter((item)=>{
    return item>7
})
console.log(store)


//lets practice filter by random data
const saman = [
    { id: 1, name: 'Apple', category: 'Fruit', price: 2.5 },
    { id: 2, name: 'Banana', category: 'Fruit', price: 1.2 },
    { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.8 },
    { id: 4, name: 'Orange', category: 'Fruit', price: 3.0 },
    { id: 5, name: 'Broccoli', category: 'Vegetable', price: 1.5 },
    { id: 6, name: 'Strawberry', category: 'Fruit', price: 4.2 },
    { id: 7, name: 'Tomato', category: 'Vegetable', price: 2.0 },
    { id: 8, name: 'Grapes', category: 'Fruit', price: 5.5 },
    { id: 9, name: 'Spinach', category: 'Vegetable', price: 1.0 },
    { id: 10, name: 'Pineapple', category: 'Fruit', price: 3.8 },
    { id: 11, name: 'Cucumber', category: 'Vegetable', price: 1.2 },
    { id: 12, name: 'Watermelon', category: 'Fruit', price: 6.0 },
    { id: 13, name: 'Bell Pepper', category: 'Vegetable', price: 2.2 }
  ];

const filterkarna=saman.filter((sab)=>{
    return (sab.price<2 && sab.category==="Vegetable")
})
console.log(filterkarna)