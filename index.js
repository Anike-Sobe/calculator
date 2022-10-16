const display = document.querySelector(".display")
const controlButtons = document.querySelector(".controls").children
const allSymbols = ["+", "x", "-", "÷", "C", "%", "="]

let firstValue = ""
let secondValue = ""
let symbol = ""
let result = ""


const calculate = () => {
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)

    if (symbol === "+") result = firstValue + secondValue
    if (symbol === "-") result = firstValue - secondValue
    if (symbol === "x") result = firstValue * secondValue
    if (symbol === "%") result = firstValue % secondValue
    if (symbol === "÷") result = firstValue / secondValue

    display.innerText = result
    firstValue = result
    secondValue = ""
}


for (let button of controlButtons) {
    button.addEventListener("click", () => {
        const{ innerText: btnValue } = button
        const btnValueIsSymbol = allSymbols.includes(btnValue)

        if (firstValue + btnValueIsSymbol) {
            symbol = btnValue
        }
  
        else if (!symbol) firstValue += btnValue
        else if (symbol) secondValue += btnValue

        if (btnValue !== "=") display.innerText += btnValue

        display.innerText += btnValue


    });
}

