function make_sandwich() {
    var sandwich = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwich[_i] = arguments[_i];
    }
    console.log("\nYour order cataloge states the following:");
    for (var a = 0; a < sandwich.length; a++) {
        console.log("".concat(sandwich[a]));
    }
}
make_sandwich("Roasted Chicken", "Cabbage", "Mayonise");
make_sandwich("Beef", "Cucumber", "Ketchup");
make_sandwich("Steamed Chicken", "Mustard", "Cheese");
console.log("\nHope you enjoy \n\n\t Thanks for coming");
