let resultWindow = document.querySelector('.result')
let buttonsContainer = document.querySelector('.buttons-wrapper')
let historyDisplay = document.querySelector('.history-text')
let sign = '';
let canPutSign = true;
let strToShowOnScreenBeforeCount = ''
let firstNumber = ''
let secondNumber = ''

function count(a, b) {
    if (sign === "-") return a - b
    if (sign === "+") return +a + +b
    if (sign === "*") return a * b
    if (sign === "/") return a / b
    if (sign === "^") return Math.pow(a,b)
    if(sign === "%") return a / 100 * b


    return 0
}

function clearAll() {
    firstNumber = ''
    secondNumber = ""
    historyDisplay = ""
    resultWindow.innerHTML = '';
}

function deleteOneSign() {
    strToShowOnScreenBeforeCount = strToShowOnScreenBeforeCount.slice(0, strToShowOnScreenBeforeCount.length - 1);
    resultWindow.innerHTML = strToShowOnScreenBeforeCount
}

function showHistory() {
    historyDisplay.innerHTML = strToShowOnScreenBeforeCount
}

buttonsContainer.addEventListener('click', function (e) {

    if (e.target.classList.contains('dot')) {
        if( !resultWindow.innerHTML.includes(".") && resultWindow.innerHTML.length ){
            resultWindow.innerHTML = resultWindow.innerHTML + "."
            console.log("dot")
        } else {
            console.log("nodot")

        }
    } else if (e.target.classList.contains('number')) {
        console.log("num")

        if (sign) {
            secondNumber = secondNumber + e.target.innerHTML
            console.log(secondNumber)
            resultWindow.innerHTML = secondNumber
        } else {
            resultWindow.innerHTML = resultWindow.innerHTML + e.target.innerHTML;

        }

    }
    if (e.target.classList.contains('sign')) {
        if (secondNumber) {
            let res = count(firstNumber, secondNumber)
            historyDisplay.innerHTML = res + e.target.innerHTML
            sign = e.target.innerHTML
            resultWindow.innerHTML = sign
            firstNumber = res
            secondNumber = ""
            console.log('1st' + firstNumber)
            console.log('2st' + secondNumber)


        } else if (resultWindow.innerHTML) {
            firstNumber = resultWindow.innerHTML
            sign = e.target.innerHTML
            console.log('1st' + firstNumber)
            console.log('2nd' + secondNumber)

            historyDisplay.innerHTML = resultWindow.innerHTML + e.target.innerHTML
            resultWindow.innerHTML = sign;

        }


    }
    if (e.target.classList.contains('equal')) {
        console.log('first' + firstNumber)
        console.log('second' + secondNumber)
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
})


