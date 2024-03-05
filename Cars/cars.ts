

type Car = {
    manufacture: string;
    model: string;
    [engine: string]: any; 
}
function cars(manufacture: string, model: string, optional: Record<string, any>): Car{
    return {
        manufacture,
        model,
        ...optional

    }
} 
const the_car : Car = cars ("Toyota","Aqua",{color:"Black",engine:"2020"}) 
console.log(the_car)