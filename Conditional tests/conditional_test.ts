import { Console } from "console"

//Equality, Inequality and Lower case
console.log("\n\t\t\Equality, Inequality and Lower case")  

let a = "Good morning"
let b = "good morning"
let c = "Good morning"

if(a == b){
    console.log("They are equal")
}else{
    console.log("They are not equal")
}

if(a != c){
    console.log("They are equal")
}else{
    console.log("They are not equal")
}

if(a == c){
    console.log("They are equal")
}else{
    console.log("They are not equal")
}

if(a.toLowerCase == b.toLowerCase){
    console.log("They are equal")
}else{
    console.log("They are not equal")
}

//Numbers
console.log("\n\tNumbers\t\n")
let age_1 = 17
let age_2 = 18
let age_3 = 19

if(age_1 == 18){
    console.log("You can vote")
}else{
    console.log("You can't vote")
}

if(age_2 == 18){
    console.log("You can vote")
}else{
    console.log("You can't vote")
}

//Greater than , Less than
let city_1 = "Beijing"//
let city_2 = "Mumbai"//
let city_3 = "Dhaka"//

console.log("\n\tPopulation\t\n")

if (city_1.length > city_2.length){
    console.log("Beijing is bigger than Mumbai")
}else{
    console.log ("Beijing is smaller than Mumbai")
}

if (city_2.length > city_3.length){
    console.log("Mumbai is bigger than Dhaka")
}else{
    console.log ("Mumbai is smaller than Dhaka")
}


if (city_1.length > city_3.length){
    console.log("Beijing is bigger than Dhaka")
}else{
    console.log ("Beijing is smaller than Dhaka")
}

//And Or functions

console.log("\n\tAnd Or functions\t\n")

if(age_1 && age_2){
console.log("Person can not legally drive")
}

if(age_2 && age_3  ){
    console.log("Person can legally drive")
    }

if(age_2 || age_3  ){
    console.log("Person can not legally drive")
    }

//Array or not (Find out)
console.log("\n\tArray or not\t\n")

let Banks : string[] = ["UBL","MCB","FBL"]

let islamic_bank = "FBL"
let non_islamic_bank = "HBL"

if(Banks.includes(islamic_bank)){
console.log("This is an islamic banking option (Not in an array)")}

if(Banks.includes(islamic_bank)){
console.log("This is not an islamic banking option (Not in an array)")}
