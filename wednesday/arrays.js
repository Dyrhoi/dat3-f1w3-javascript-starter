// Solutions for Week3 Day3
// Arrays:

// A & B):
var boys = ["Peter", "lars", "Ole"]
var girls = ["Janne", "hanne", "Sanne"]

// ES6 Spread Syntax
var all = [...boys, ...girls]

// Classic Syntax
var allOld = boys.concat(girls)

// Neither methods mutate the old arrays.
console.log(all, allOld)


// C):
var joined = all.join()
var joinedHyphens = all.join("-")

console.log(joined, joinedHyphens)


// D):
// ES6
all = [...all, "Lone", "Gitte"]

//Classic
allOld.push("Lone", "Gitte")

// E):
// ES6
all = ["Hans", "Kurt", ...all]

//Classic
allOld.unshift("Hans", "Kurt")

console.log(all, allOld)


// F & G):
all.shift()
all.pop()

console.log(all)


// H):
all.splice(3, 2)

console.log(all)


// I):
all.reverse()

console.log(all)


// J):
all.sort()

console.log(all)


// K):
all.sort((a, b) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()))

console.log(all)


// L):
all = all.map(el => el.charAt(0).toUpperCase() + el.slice(1))

console.log(all)


// M):
all.push("Ingar");
var filteredArray = all.filter(el => ["L", "I"].indexOf(el.charAt(0)) >= 0) //See if the first letter of each name can be found in the array ["L", "I"].

console.log(filteredArray)














