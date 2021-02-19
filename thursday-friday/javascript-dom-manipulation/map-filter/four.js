let cars = [
	{ id: 1, year: 1997, make: "Ford", model: "E350", price: 3000 },
	{ id: 2, year: 1999, make: "Chevy", model: "Venture", price: 4900 },
	{ id: 3, year: 2000, make: "Chevy", model: "Venture", price: 5000 },
	{ id: 4, year: 1996, make: "Jeep", model: "Grand Cherokee", price: 4799 },
	{ id: 5, year: 2005, make: "Volvo", model: "V70", price: 44799 },
]

// I chose to use foreach instead of map, as map is supposed to return a NEW modified array.
// in my opinion foreach is more of a "statement" method than map.
let arrayToHTMLTable = function(array) {

    
    let table = document.createElement("table")
    let tableHeader = document.createElement("thead")
    let tableHeaderRow = document.createElement("tr")

    let tableBody = document.createElement("tbody")

    if(array.length == 0) {
        table.innerHTML = "NO RESULTS FOUND"
        return table
    }

    //Build the header (ASSUME IT CONTAINS ONE OBJECT TYPE):
    Object.keys(array[0]).forEach(key => {
        let item = document.createElement("th")
        item.innerHTML = key.toUpperCase()
        tableHeaderRow.appendChild(item)
    })

    array.forEach(el => {
        let row = document.createElement("tr")
        Object.values(el).forEach(val => {
            let item = document.createElement("td")
            item.innerHTML = val
    
            row.append(item)
        })
        tableBody.append(row)
    })

    tableHeader.appendChild(tableHeaderRow)
    table.appendChild(tableHeader)
    table.appendChild(tableBody)

    table.classList.add("table")

    return table
}

let regenerateContent = function(el) {
    document.querySelector("#content").innerHTML = "" // Reset the content
    document.querySelector("#content").appendChild(el)
}

regenerateContent(arrayToHTMLTable(cars))

document.querySelector("#filter_price").addEventListener("submit", e => {
    e.preventDefault()

    let priceEl = document.querySelector("#filter_price input[name='price']")
    let price = priceEl.value
    priceEl.value = ""

    let filteredCars = cars.filter(car => car.price < price)

    document.querySelector("#searched_max_price span").innerText = price
    regenerateContent(arrayToHTMLTable(filteredCars))
})