console.log(`\n`)
//numbers
let numbers : number[] = [1,2,3,4,5,6,7,8,9]
for(let number of numbers){
if (number === 1){
    console.log(`${number}st`)
}else if(number === 2){
    console.log(`${number}nd`)
}else if(number === 3){
    console.log(`${number}rd`)
}else{
    console.log(`${number}th`)
}
}

console.log(`\n`)

// Pizza is good
let favourite_pizza : string[] = ["Pepperoni","Fajita","Chicken Tikka"]

for (let pizza of favourite_pizza){
    console.log(pizza)
}
console.log(`\n`)

for (let pizza of favourite_pizza){
    console.log(`${pizza} is my favourite type of pizza`)
}

console.log(`\n`)

console.log("Pizza's are my favourite")

console.log(`\n`)
//animals
let animals :string[] = ["Dog","Cat","lion"]

for (let animal of animals){
    console.log(animal)
}
console.log(`\n`)

for (let animal of animals){
    console.log(` ${animal}, all of these are mamals`)
}
console.log(`\n`)
console.log("These all are carnivoures, but the lion is largest of all")
