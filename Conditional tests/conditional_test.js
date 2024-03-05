"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Equality, Inequality and Lower case
console.log("\n\t\t\Equality, Inequality and Lower case");
var a = "Good morning";
var b = "good morning";
var c = "Good morning";
if (a == b) {
    console.log("They are equal");
}
else {
    console.log("They are not equal");
}
if (a != c) {
    console.log("They are equal");
}
else {
    console.log("They are not equal");
}
if (a == c) {
    console.log("They are equal");
}
else {
    console.log("They are not equal");
}
if (a.toLowerCase == b.toLowerCase) {
    console.log("They are equal");
}
else {
    console.log("They are not equal");
}
//Numbers
console.log("\n\tNumbers\t\n");
var age_1 = 17;
var age_2 = 18;
var age_3 = 19;
if (age_1 == 18) {
    console.log("You can vote");
}
else {
    console.log("You can't vote");
}
if (age_2 == 18) {
    console.log("You can vote");
}
else {
    console.log("You can't vote");
}
//Greater than , Less than
var city_1 = "Beijing"; //
var city_2 = "Mumbai"; //
var city_3 = "Dhaka"; //
console.log("\n\tPopulation\t\n");
if (city_1.length > city_2.length) {
    console.log("Beijing is bigger than Mumbai");
}
else {
    console.log("Beijing is smaller than Mumbai");
}
if (city_2.length > city_3.length) {
    console.log("Mumbai is bigger than Dhaka");
}
else {
    console.log("Mumbai is smaller than Dhaka");
}
if (city_1.length > city_3.length) {
    console.log("Beijing is bigger than Dhaka");
}
else {
    console.log("Beijing is smaller than Dhaka");
}
//And Or functions
console.log("\n\tAnd Or functions\t\n");
if (age_1 && age_2) {
    console.log("Person can not legally drive");
}
if (age_2 && age_3) {
    console.log("Person can legally drive");
}
if (age_2 || age_3) {
    console.log("Person can not legally drive");
}
//Array or not (Find out)
console.log("\n\tArray or not\t\n");
var Banks = ["UBL", "MCB", "FBL"];
var islamic_bank = "FBL";
var non_islamic_bank = "HBL";
if (Banks.includes(islamic_bank)) {
    console.log("This is an islamic banking option (Not in an array)");
}
if (Banks.includes(islamic_bank)) {
    console.log("This is not an islamic banking option (Not in an array)");
}
