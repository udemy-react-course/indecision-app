// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    console.log(arguments)
    return a + b
}
console.log(add(55, 1))
// this keyword - no longer bound