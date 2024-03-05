function make_sandwich(...sandwich:string[]):void {
    console.log("\nYour order cataloge states the following:")

    for(let a =0; a<sandwich.length; a++){
        console.log(`${sandwich[a]}`)
    }
}

make_sandwich("Roasted Chicken","Cabbage","Mayonise")
make_sandwich("Beef","Cucumber","Ketchup")
make_sandwich("Steamed Chicken","Mustard","Cheese")


console.log("\nHope you enjoy \n\n\t Thanks for coming")