function city(city:string, country:string = "Pakistan"):void{
    console.log(`${city} is located in ${country}`)
}
city("Karachi") //Default
city("Islamabad")
city("Manchester","England")

function cities(City:string,Country:string): string {
    return `${City},${Country}`
}
let city1 =cities("Tehran","Iran")
let city2 =cities("Moscow","Russia")
let city3 =cities("Quetta","Pakistan")

console.log("\n",city1)
console.log( city2)
console.log( city3)