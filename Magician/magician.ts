function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
    }
}

const magicians: string[] = ["lance burton", "black herman", "david blaine"];

show_magicians(magicians)
console.log(magicians)

// Greater magicians

function great(great_magicians: string[]): void {
    for (let i = 0; i < great_magicians.length; i++) {
        great_magicians[i] += " the great"
    }
}

const great_magicians: string[] = ["Ricky Jay", "Derren Brown", "Dai Vernon"]
great(great_magicians)
console.log(great_magicians);

// All are great

const additional_magicians: string[] = ["Harry Houdini", "Penn Jillette", "Teller"];

console.log("\nAdditional Magicians:");
show_magicians(additional_magicians);

console.log("\nGreat Additional Magicians:");
great(additional_magicians);
show_magicians(additional_magicians);

console.log("\nOriginal Magicians:");
show_magicians(magicians);