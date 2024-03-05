function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
var magicians = ["lance burton", "black herman", "david blaine"];
show_magicians(magicians);
console.log(magicians);
// Greater magicians
function great(great_magicians) {
    for (var i = 0; i < great_magicians.length; i++) {
        great_magicians[i] += " the great";
    }
}
var great_magicians = ["Ricky Jay", "Derren Brown", "Dai Vernon"];
great(great_magicians);
console.log(great_magicians);
// All are great
var additional_magicians = ["Harry Houdini", "Penn Jillette", "Teller"];
console.log("\nAdditional Magicians:");
show_magicians(additional_magicians);
console.log("\nGreat Additional Magicians:");
great(additional_magicians);
show_magicians(additional_magicians);
console.log("\nOriginal Magicians:");
show_magicians(magicians);
