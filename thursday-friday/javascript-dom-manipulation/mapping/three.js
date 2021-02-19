//Remade into a more suitable HTML function... Old method can be seen in wednesdays exercise.
let arrayToList = function(array) {
    let list = document.createElement("ul")
    array.forEach(item => {
        let el = document.createElement("li")
        el.innerText = item

        list.appendChild(el)
    });

    return list
}

let regenerateContent = function(el) {
    document.querySelector("#content").innerHTML = "" // Reset the content
    document.querySelector("#content").appendChild(el)
}

let names = ["John", "Martin", "Iben", "Emilly", "Bo"]
document.querySelector("#content").appendChild(arrayToList(names))


document.querySelector("#add_name").addEventListener("submit", e => {
    e.preventDefault()

    let input = document.querySelector("#add_name input[type='text']")
    let name = input.value
    names = [...names, name]

    regenerateContent(arrayToList(names))

    input.value = ""
})

document.querySelector("#remove_first").addEventListener("submit", e => {
    e.preventDefault()

    names.shift()

    regenerateContent(arrayToList(names))
})

document.querySelector("#remove_last").addEventListener("submit", e => {
    e.preventDefault()

    names.pop()

    regenerateContent(arrayToList(names))
})