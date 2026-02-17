// dot notation vs bracket notation

const student = {
    name : "Afroza",
    roll: 22,
    1:12,
    address: "Dhaka 1204",
    marks: 88,
    family:{
        title: "Sharkar",
        mother: "Sufia Akter",
        father:"Abdul Mannan Sharkar",
        siblings:4

    }
}

// console.log(student.marks)
// console.log(student.1)error
const studentOne = student["1"]
const fathersName = student.family.father
console.log(fathersName)
