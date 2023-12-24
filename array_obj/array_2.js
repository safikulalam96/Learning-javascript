const batsman=["kohli","sky","raina","abd","smith"]
const bolwer=["bumrah","patcumins","siraj","shami"]
const allrounder=["maxwell","hardik"]

// console.log(batsman.push(bolwer)) //push modifies the existing array to complete any code of array
// console.log(batsman)
// console.table(batsman.concat(bolwer)) //concat create a new array without modifying the existing one
// console.log(batsman)

/* best way to concatenate a array 
const best_way=[...batsman,...bolwer,...allrounder]
console.table(best_way)

*/


//way to flat any array 
const arr=[1,2,45,[23,45,56,76,23],[23,45,46[3545,56]]]      //problem ?????
const printarry=arr.flat(2);
console.log(printarry)



console.table(Array.isArray("safikul")) // will return false

console.table(Array.from("safikul")) //typeof will print object***
const one=2343;
const two=345345;
const three=3234


console.log(Array.of(one,two,three)) // combines all element into array
