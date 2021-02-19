document.querySelector("#user-form").addEventListener("submit", e => {
    e.preventDefault()
    let idEl = document.querySelector("#user-form input[name='user-id']")
    let id = idEl.value

    if(isNaN(id) || id == "")
        return

    getUsers(id)

    idEl.value = ""
    idEl.focus()
})

function getUsers(id = "") {
    // Fetch:
    let url = `https://jsonplaceholder.typicode.com/users/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let tmpData = []

            //Even if we get 1 result, to simplify things, put that result inside an empty array...
            if(Array.isArray(data))
                tmpData = [... data]
            else
                tmpData.push(data)

            //Let's only take the data we care about. (Name and Phone (from assignment)) -- easily modifiable.
            let keysWanted = ["id", "name", "phone"]
            let filteredData = []

            filteredData = tmpData.map(user => {
                //loop through all our keys and check if key exists in our keysWanted array... else delete it from the object (modify).
                Object.keys(user).forEach((key) => keysWanted.includes(key) || delete user[key]) 
                return user
            })

            regenerateContent(dataToHTMLTable(filteredData))
        })
}

function dataToHTMLTable(arrayOrObject) {
    let table = document.createElement("table")
    let tableHeader = document.createElement("thead")
    let tableHeaderRow = document.createElement("tr")

    let tableBody = document.createElement("tbody")

    if(arrayOrObject.length == 0) {
        table.innerHTML = "NO RESULTS FOUND"
        return table
    }

    //Build the header (ASSUMES ARRAYS ONLY CONTAINS ONE TYPE OF OBJECT):
    let keys = arrayOrObject[0]
    Object.keys(keys).forEach(key => {
        let item = document.createElement("th")
        item.innerHTML = key.toUpperCase()
        tableHeaderRow.appendChild(item)
    })

    tableHeader.appendChild(tableHeaderRow)

    arrayOrObject.forEach(el => {
        let row = document.createElement("tr")
        Object.values(el).forEach(val => {
            let item = document.createElement("td")
            item.innerHTML = val
    
            row.append(item)
        })
        tableBody.append(row)
    })

    table.appendChild(tableHeader)
    table.appendChild(tableBody)

    table.classList.add("table")

    return table
}

function regenerateContent(el) {
    document.querySelector("#content").innerHTML = "" // Reset the content
    document.querySelector("#content").appendChild(el)
}