const array= ["safai", "gandegi","sarif","londiyebaaz"]

//by normal function
array.forEach(function (item){
    // console.log(item);
})

//by using arrow function
array.forEach((item)=>{
    // console.log(item);
})

//by defining function
function printing(tem){
    console.log(tem)
}
// array.forEach(printing)


//understanding the full use of forEach loop
array.forEach((index,val,array)=>{
    // console.log(index,val,array)
})



/* forEach is also used for accessing objects in array ex: [{},{},{}] */

const objectinarray =[
    {
        name:"safikul",
        age:23
    },
    {
        name:"Zeeshan",
        age:23
    },
    {
        name:"Izhar",
        age:23
    }
]

objectinarray.forEach((item)=>{
    console.log(item.name) //accessing the name of the objects only with help of forEach loop
})