// Kindly do not modify the pre-written code.
// Your task is to implement the functions below to make the calculator work.

const display = document.getElementById('display');
const buttons = [...document.querySelectorAll('.button')]
let currentInput = [];

buttons.find(button => button.textContent == 'AC').addEventListener('click', clearDisplay)
buttons.find(button => button.textContent == 'DEL').addEventListener('click', deleteLast)
buttons.find(button => button.textContent == '=').addEventListener('click', calculateResult)

buttons.filter(b => b.classList.contains('number')).forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)))
buttons.filter(b => b.classList.contains('operator')).forEach(button => button.addEventListener('click', () => appendOperator(button.textContent)))

document.querySelector('body').addEventListener('keydown', function(event){
    const button = buttons.find(button => button.textContent == event.key)
    if(button)
    {
        button.click()
    }
    else if(event.key == 'Backspace')
    {
        buttons.find(button => button.textContent == 'DEL').click()
    }
    else if(event.key == 'Enter')
    {
        buttons.find(button => button.textContent == '=').click()
    }
})

function clearDisplay() {
    // TODO: Implement the clearDisplay function
    // This function should reset the currentInput and update the display
    currentInput = []
    updateDisplay(display, '0')
}

function deleteLast() {
    // TODO: Implement the deleteLast function
    // This function should remove the last character from currentInput and update the display
    currentInput.pop()
    updateDisplay(display, currentInput.join(''))
    
}

function appendNumber(number) {
    // TODO: Implement the appendNumber function
    // This function should add the given number to currentInput and update the display
    currentInput.push(number)
    updateDisplay(display, currentInput.join(''))
    
}

function appendOperator(operator) {
    // TODO: Implement the appendOperator function
    // This function should add the given operator to currentInput and update the display
    currentInput.push(operator)
    updateDisplay(display, currentInput.join(''))
}

function calculateResult() {
    // TODO: Implement the calculateResult function
    // This function should evaluate the currentInput, display the result, and handle errors
    let result = eval(currentInput.join('').replace('%', '/100'))
    currentInput = result.toString().split('')
    updateDisplay(display, result)
}

function updateDisplay(display, text)
{
    display.textContent = text == '' ? 0 : text
}
