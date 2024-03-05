function shirts(Size, text) {
    console.log("\n Dear customer, \n\t The shirt you have order has\n".concat(Size, "\n").concat(text));
}
shirts("Size : XL", "Text : Free Palestine");
//Larger shirts
function Tshirt(size, Text) {
    if (size === void 0) { size = 'L'; }
    if (Text === void 0) { Text = 'I love typescript'; }
    console.log("\n Dear customer, \n\t The shirt you have order has\n".concat(size, "\n").concat(Text));
}
Tshirt("Size : M", "Text : I love typescript");
//comments line below for text prior
Tshirt("Size : S", "Text : Nope! This is to small");
