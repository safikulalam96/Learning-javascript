
//declaring symbol
const mysymbl= Symbol("key1"); //after declaring symbol let's declare in objects in line 7 and print the result 

//object literals
const myobj={
    [Symbol]:"Makaut", // declaring symbol in objects
    name:"safikul alam",
    age:20,
    roll:12,
    department:"BCA",
    locality:"simhat"
}
 /*we can access the objects by dot operator or [key_with_quote] actually []is better than dot operator as 
 because it limits in few cases to acces the value */
// console.log(myobj["department"])
// console.log(typeof myobj.Symbol)  it will result undefined
// console.log(typeof myobj[Symbol])

//modifying the objects
myobj.age=23;
// console.log(myobj)

//we can also freeze or make the objects values constant by using freeze
// Object.freeze(myobj)
myobj.age=44; // it will not consider this line because of line no 25(Object.freeze)
// console.log(myobj)



//Declaring function in objects and accessing it
myobj.myfunction=function(){
    console.log(`hello`)
}
myobj.myfunction2=function(){
    console.log(`hello ${this.name}`)
}
console.log(myobj.myfunction())
console.log(myobj.myfunction2())