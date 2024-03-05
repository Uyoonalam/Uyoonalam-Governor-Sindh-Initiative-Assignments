"use strict";
var guests = ['Joe Biden', 'Barack Obama', 'Donald Trump'];

// for (let a = 0; a < guests.length; a++) {
//    console.log('Dear Mr. ' + guests[a] +
//        '\n\n   It is our great pleasure to invite you. \n\n      Thank you!    \n\n');
// }
//changing guests

var absent_guest = "Joe Biden";
var new_guest = "Rishi Sunak";
guests[0] = new_guest;

// for (var a = 0; a < guests.length; a++) {
//     console.log('\n Dear Mr. ' + guests[a] +
//         '\n\n   It is our great pleasure to invite you. \n\n      Thank you!    \n\n');
// }

console.log("\n".concat(absent_guest, " is not available"));
//Dining table got bigger!!!!
//more guests invited

console.log("\n We are proud to annouce that we got a bigger dinner table \n");
guests.unshift('Sundar Pichai');
guests.splice(2, 0, 'Mark Zukerberg');
guests.push('Elon Musk');

for (var a = 0; a < guests.length; a++) {
    console.log('Dear Mr. ' + guests[a] +
        '\n\n   It is our great pleasure to invite you. \n\n      Thank you!    \n\n');
}

//Well, the table had a mind of it's own
//Shrinking Guests list

console.log("\n It is very unfortunate that we could not arrange a bigger table");
while (guests.length > 2) {
    let guestsremoved = guests.pop();
    console.log(`\n Sorry Mr. ${guestsremoved} , you are not invited \n`);    
}

//two guests

for (var a = 0; a < guests.length; a++) {
    console.log('Dear Mr. ' + guests[a] +
        '\n\n  You are still requested to attend this party \n\n      Thank you!    \n\n');
}
// number of people on dinner
console.log(`number of people arriving at dinner is : ${guests.length}\n`)

//Guests removed

guests.splice(0, 2);
console.log(guests);
