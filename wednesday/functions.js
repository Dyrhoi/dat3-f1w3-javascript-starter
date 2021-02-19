// Solutions for Week3 Day3
/*

--- Functions and callbacks ---

*/

// 1):
function add(n1, n2) {
    return n1 + n2
}


var sub = function (n1, n2) {
    return n1 - n2
}


var cb = function (n1, n2, callback) {
    if ([n1, n2].every(Number) && typeof callback == "function")
        return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2)

    throw new Error("Invalid arguments, please check documentation...")
}

// 2 & 3):
try {
    console.log(1, add(1, 2))           // We would expect the print "3", as the function add(1,2) would return 3.

    console.log(2, add)                 // We're printing the function reference, so we will see the function.

    console.log(3, add(1, 2, 3))        // JS will disregard the last argument, so it will just return 3.

    console.log(4, add(1))              // JS will try to add 1 to null, which will return NaN, not a number.

    console.log(5, cb(3, 3, add))       // JS will use the method cb, print the return string while replacing n1 and n2 with 3 and 3, respectively. 
    // We pass the method reference (add), which will be called from within cb and return 6.

    console.log(6, cb(4, 3, sub))       // Same thing as above, but using the sub method in the callback.

    console.log(7, cb(3, 3, add()))     // Will throw an error as we would pass nothing to callback and the add method would fail.

    console.log(8, cb(3, "hh", add))    // As with *5, will print the return string, but n2 would be replace with hh, and the add method would try and combine 3 and hh
    // which will just return 3hh as it will concatenate to a string.
} catch (e) {
    console.log(e.message)
}


// 4): 

var mul = function (n1, n2) {
    return n1 * n2
}

console.log(9, cb(3, 3, mul))

// 5)
console.log(9, cb(12, 3, (n1, n2) => n1 / n2))


/*

--- Callbacks ---

*/

// 1):
var names = ["John", "Emily", "Bo", "Ib", "Ole", "Iben"]
var lessThanThree = names.filter(el => el.length <= 3);

names.forEach(el => console.log(el))
console.log("----")
lessThanThree.forEach(el => console.log(el))

// 2):
var upperCased = names.map(el => el.toUpperCase())
console.log(upperCased)

// 3):
var stringArrayToHTMLList = function (array) {
    return `<ul><li>${array.join("</li><li>")}</li></ul>`
}

console.log(stringArrayToHTMLList(names))


// 4):
var cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
]

// 4..a):
var newerThan1999 = cars.filter(el => el.year > 1999)
var volvos = cars.filter(el => el.make.toLocaleLowerCase() == "volvo")
var cheaperThan5000 = cars.filter(el => el.price < 5000)

console.log("All cars", cars)
console.log("Cars newer than 1999", newerThan1999)
console.log("All volvos", volvos)
console.log("Cars cheaper than 5000", cheaperThan5000)


// 4a):
var carsToSQL = function (carArray) {
    let string = "";
    carArray.forEach(car => string += `INSERT INTO cars (id, year, make, model, price) VALUES (${car.id}, ${car.year}, '${car.make}', '${car.model}', ${car.price});\n`)

    return string
}

console.log(carsToSQL(cars))

//Asynchronous Callbacks

// 1, 2):
var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");

// I would expect to see all our console.logs first in their respective order, so [aaa... dddd... ffff] and then the messages with delay in their delay order so:
// [aaa... dddd... ffff... eeee.... bbbb....], this is also correct.




