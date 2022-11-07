let resultWindow = document.querySelector('.result')
let buttonsContainer = document.querySelector('.buttons-wrapper')
let historyDisplay = document.querySelector('.history-text')
let sign = '';
let firstNumber = ''
let secondNumber = ''

function count(a, b) {
    let result
    console.log(a)
    console.log(b)
    console.log(sign)
    if (sign === "-") result = a - b
    if (sign === "+") result = +a + +b
    if (sign === "*") result = a * b
    if (sign === "/") result = a / b
    if (sign === "^") result = Math.pow(a, b)
    if (sign === "%") result = a / 100 * b

    return +result.toFixed(4)
}

function clearAll() {
    firstNumber = ''
    secondNumber = ""
    historyDisplay.innerHTML = ""
    resultWindow.innerHTML = '';
    sign = ""
}

function deleteOneSign() {
    resultWindow.innerHTML = resultWindow.innerHTML.slice(0, -1)
}

function checkIfPointCanBePut(str) {
    return !(str.includes(".") || !str.length || (/^\D/.test(str) && str.length === 1));

}


function clickHandler(e) {
    if (e.target.classList.contains('dot') && !checkIfPointCanBePut(resultWindow.innerHTML)) {
        return;
    }
    if (e.target.innerHTML === '0' && resultWindow.innerHTML === "0") {
        return;
    }
    if (e.target.classList.contains('number')) {
        let userNum = e.target.innerHTML
        if (resultWindow.innerHTML.length > 15) return;

        if (sign) {
            if (resultWindow.innerHTML === '-' && !firstNumber) {
                console.log("s1")
                resultWindow.innerHTML = resultWindow.innerHTML + userNum;

            } else {
                console.log("s2")

                secondNumber = secondNumber + userNum
                resultWindow.innerHTML = secondNumber
            }

        } else {
            console.log("s3")

            resultWindow.innerHTML = resultWindow.innerHTML + userNum;
        }
    }
    if (e.target.classList.contains('sign')) {
    let userSign = e.target.innerHTML

        if (secondNumber) {
            let res = count(firstNumber, secondNumber)
            sign = userSign
            historyDisplay.innerHTML = res + userSign
            resultWindow.innerHTML = userSign
            firstNumber = res
            secondNumber = ""
        } else if (resultWindow.innerHTML) {
            firstNumber = resultWindow.innerHTML
            historyDisplay.innerHTML = resultWindow.innerHTML + e.target.innerHTML
            sign = userSign
            resultWindow.innerHTML = userSign;

        } else if (e.target.innerHTML === "-") {
            resultWindow.innerHTML = userSign;
        }


    }
    if (e.target.classList.contains('equal')) {
        let res = count(firstNumber, secondNumber)
        resultWindow.innerHTML = res
        firstNumber = res
        secondNumber = ""
    }
    if (e.target.id === 'refresh') {
        clearAll()
    }

    if (e.target.classList.contains('delete')) {
        deleteOneSign()
    }
}

buttonsContainer.addEventListener('click', function (e) {

    clickHandler(e)
})


