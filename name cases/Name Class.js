"use strict";
let Name = "";
Name = prompt("Kindly tell your name.") || "";
let lowercase = Name.toLowerCase();
let uppercase = Name.toUpperCase();
let titlecase = Name .split(' ')
.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
.join(" ");
if (Name !== null && Name !== "") {
    alert(`hello ${Name} please find yor name as
Lowercase: ${lowercase}
Uppercase: ${uppercase}
Titlecase: ${titlecase}`);
}
else ("please write your name!")
