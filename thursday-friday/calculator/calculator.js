
let calculated = true
let display = document.querySelector("#display")

document.querySelector("#buttons").addEventListener("click", e => {
    e.preventDefault()

    let target = e.target
    if(!target.classList.contains("t1"))
        return

    if(calculated) {
        display.innerText = ""
        calculated = false
    }
    if(e.target.innerText == "=") {
        //calc_mathjs()
        calc()
    }
    else
        display.innerText += e.target.innerText
})

//What I would've used in a real case scenario... Would work for "any" input (ex: 726/6*2-3)
function calc_mathjs() {
    calculated = true
    display.innerText = math.eval(display.innerText)
}

//Since it's an assignment... Only works with ONE operator (ex: 10+10)
function calc() {
    calculated = true

    let operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "/": (a, b) => a / b,
        "*": (a, b) => a * b
    }

    let displayValue = display.innerText;
    
    // kinda botched method?
    let operatorsFound = []
    for (let i = 0; i < displayValue.length; i++) {
        if(Object.keys(operators).indexOf(displayValue.charAt(i)) >= 0)
            operatorsFound.push(i)
    }

    //No operators found? -- Just leave the value there...
    if(operatorsFound.length == 0)
        return

    //Too many operators...
    if(operatorsFound.length > 1) {
        display.innerText = "ERR! I can only do simple equations (one operator)."
        return
    }

    let operator = displayValue.charAt(operatorsFound[0])
    let numbers = displayValue.split(operator)

    display.innerText = operators[operator](Number(numbers[0]), Number(numbers[1]))

}

