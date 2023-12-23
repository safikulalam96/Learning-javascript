function add(a,b){
    return a+b;
}
// add(2,5) it will not print the result as we don't print the function

console.log(add(2,6))


function checking(username){
    if(username===undefined){
        console.log("Enter the Username: ")
        return;
    }
    return `The username is ${username}`
}
console.log(checking())


/*********************************MORE ABOUT FUNCTION**********************************/
// passing values by objects to function and accessing it
function accessingbyobj(user){
    return `the username is ${user.userkanamm} and has to pay ${user.price}`
}
const obj={
    userkanamm:"safikul alam",
    price:2239
}
console.log(accessingbyobj(obj))

//passing values by array to function and accessing it

function accessingbyarray(user2){
    return `the total price is ${user2[0]} and got discount of ${user2[1]}`
} 

const array=[2334,"23%"]
console.log(accessingbyarray(array))
