const myobj={
    name:"Safikul",
    locality: "Islampur",
    pin:733207,
    state:"West Bengal",
    college:{
        name:"Makaut",
        place:"Simhat",
        pin:741249
    }
}
const common={
    country:"India",
    batsman:"Rohit"
}
// console.log(myobj.college.place) 

// console.log(myobj,common)
const all= {...myobj,...common}
// console.log(all)

console.log(Object.keys(myobj))
console.log(Object.values(common))
console.log(Object.entries(common))


