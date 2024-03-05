function city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is located in ").concat(country));
}
city("Karachi"); //Default
city("Islamabad");
city("Manchester", "England");
function cities(City, Country) {
    return "".concat(City, ",").concat(Country);
}
var city1 = cities("Tehran", "Iran");
var city2 = cities("Moscow", "Russia");
var city3 = cities("Quetta", "Pakistan");
console.log("\n", city1);
console.log(city2);
console.log(city3);
