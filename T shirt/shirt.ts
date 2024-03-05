function shirts(Size:string,text:string):void {
    console.log(`\n Dear customer, \n\t The shirt you have order has\n${Size}\n${text}`)
}
shirts("Size : XL", "Text : Free Palestine");

//Larger shirts

function Tshirt(size:string = 'L', Text:string = 'I love typescript'):void {
    console.log(`\n Dear customer, \n\t The shirt you have order has\n${size}\n${Text}`)
}

Tshirt("Size : M","Text : I love typescript")
//comments line below for text prior
Tshirt("Size : S", "Text : Nope! This is to small")
