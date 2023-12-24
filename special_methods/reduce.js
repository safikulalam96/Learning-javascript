const numbers=[16,7,8,54]

//syntax
// const total=numbers.reduce(function(accumulator,currentvalue){
//     return accumulator+currentvalue;
// },0)

//now using by arrow function
const total=numbers.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(`Your total bill is:  ${total}`)



const course=[
    {
        name:"javascript",
        price:2335
    },
    {
        name:"java",
        price:2385
    },
    {
        name:"java",
        price:2005
    },
    {
        name:"python",
        price:1395
    }
]

const cart=course.reduce((acc,item)=>{
    return acc+item.price
},0)

console.log(`Your total cart value is: ${cart}`)