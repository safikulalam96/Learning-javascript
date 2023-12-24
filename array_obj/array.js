const arr=[2,34,64,23,54,75]
// console.table([arr,typeof arr])
//push an element to the array
const push=arr.push(12)
// console.table(arr)

//popping an element from the array
const pop=arr.pop()
// console.table(arr)

//unshift means add an element at the starting of an array
const shift=arr.unshift(3)
// console.table(arr)

//shift means deleting an element at the starting of an array
const shift_1=arr.shift()
// console.table(arr)

//used to cut the array from a particular index and doesn't affects the original array
const slice=arr.slice(0,3)
console.table(slice)
console.log(arr)


//used to cut the array from a particular index and it Affects the original array
const splice=arr.splice(0,3)
console.table(splice)
console.log(arr)
