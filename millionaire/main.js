let questionContainer = document.querySelector('.question')
let optionsContainers = document.querySelectorAll('.option')
let optionsContainer = document.querySelector('.options_wrap')
let prizes = document.querySelectorAll('.point')
let popUpText = document.querySelector('.pop_up_text')
let popUpTitle = document.querySelector(".pop_up_title")
let phoneHelp = document.querySelector(".phone")
let fiftyHelp = document.querySelector(".fifty")
let fiftyHelpAvailable = true
let phoneHelpAvailable = true
let prize = 0
let roundNum = 1
let gameOver = false
let roundInfo = [
    {
        question: "Найменша країна світу",
        options: ["Ватикан", "Люксембург", "ЄВізантія", "Італія"],
        correct: "Ватикан",
        indexOfCorrect: 0
    },
    {
        question: "Найбагатша країна світу",
        options: ["Люксембург", "Китай", "Великобританія", "Швейцарія"],
        correct: "Люксембург",
        indexOfCorrect: 0

    },
    {
        question: "Перший фільм",
        options: ["Сінемаколор", "Історія банди Неда Келлі", "Прибуття поїзда на вокзал Ла-Сьота", "Швейцарія"],
        correct: "Прибуття поїзда на вокзал Ла-Сьота",
        indexOfCorrect: 2

    },
    {
        question: "Висота Ейфелевої вежі",
        options: ["302м", "425м", "265м", "330м"],
        correct: "330м",
        indexOfCorrect: 3

    },
    {
        question: "Режисер першого аніме",
        options: ["Сімокава Декотена", "Хаяо Міядзакі", "Терукі Цутому", "Хідеакі Анно"],
        correct: "Сімокава Декотена",
        indexOfCorrect: 1

    },
    {
        question: "Найменша країна світу",
        options: ["Ватикан", "Люксембург", "ЄВізантія", "Італія"],
        correct: "Ватикан",
        indexOfCorrect: 0
    },
    {
        question: "Найбагатша країна світу",
        options: ["Люксембург", "Китай", "Великобританія", "Швейцарія"],
        correct: "Люксембург",
        indexOfCorrect: 0

    },
    {
        question: "Перший фільм",
        options: ["Сінемаколор", "Історія банди Неда Келлі", "Прибуття поїзда на вокзал Ла-Сьота", "Швейцарія"],
        correct: "Прибуття поїзда на вокзал Ла-Сьота",
        indexOfCorrect: 2

    },
    {
        question: "Висота Ейфелевої вежі",
        options: ["302м", "425м", "265м", "330м"],
        correct: "330м",
        indexOfCorrect: 3

    },
    {
        question: "Режисер першого аніме",
        options: ["Сімокава Декотена", "Хаяо Міядзакі", "Терукі Цутому", "Хідеакі Анно"],
        correct: "Сімокава Декотена",
        indexOfCorrect: 1

    }, {
        question: "Найменша країна світу",
        options: ["Ватикан", "Люксембург", "ЄВізантія", "Італія"],
        correct: "Ватикан",
        indexOfCorrect: 0
    },
    {
        question: "Найбагатша країна світу",
        options: ["Люксембург", "Китай", "Великобританія", "Швейцарія"],
        correct: "Люксембург",
        indexOfCorrect: 0

    },
    {
        question: "Перший фільм",
        options: ["Сінемаколор", "Історія банди Неда Келлі", "Прибуття поїзда на вокзал Ла-Сьота", "Швейцарія"],
        correct: "Прибуття поїзда на вокзал Ла-Сьота",
        indexOfCorrect: 2

    },
    {
        question: "Висота Ейфелевої вежі",
        options: ["302м", "425м", "265м", "330м"],
        correct: "330м",
        indexOfCorrect: 3

    },
    {
        question: "Режисер першого аніме",
        options: ["Сімокава Декотена", "Хаяо Міядзакі", "Терукі Цутому", "Хідеакі Анно"],
        correct: "Сімокава Декотена",
        indexOfCorrect: 1

    },

]

function handleFiftyHelpClick(roundNum) {

    if (fiftyHelpAvailable) {
        let correct = optionsContainers[roundInfo[roundNum - 1].indexOfCorrect]
        let notCorrectOptions = [0, 1, 2, 3].filter((el) => el !== roundInfo[roundNum - 1].indexOfCorrect)
        let randomIndex = Math.floor(Math.random() * 3)
        let randomOption = optionsContainers[notCorrectOptions[randomIndex]]
        optionsContainers.forEach((el, index) => {
            if (el === correct || el === randomOption) {
                el.classList.add("clue")

            }
        })
        setPopUpTitleAndText(`Підказка "50/50"`, "Виберіть правильну відповідь")
        fiftyHelpAvailable = false
        fiftyHelp.classList.add("used")

    }
}


function round(userAnswer) {
    console.log(gameOver)
    if(!gameOver){
        let answer
        putQuestion(roundNum - 1)

        if (userAnswer) {
            answer = userAnswer.innerHTML
        }
        let quiz = roundInfo[roundNum - 1]
        if (roundNum === 5)  prize = 1000

        if (roundNum === 10)  prize = 32000

        if (answer === quiz.correct) {
            setPopUpTitleAndText(`Раунд ${roundNum + 1}`, "Відповідь правильна")
            userAnswer.classList.add('correct')
            if (roundNum === 15) {
                prize = '1 000 000'
                gameOver = true
                setPopUpTitleAndText('', `Це був останній раунд. <p> Вітаємо ви виграли <span class="million">${prize}</span> грн!!!</p>
                 `)
            } else {
                roundNum += 1
                definePrizeOnBoard(roundNum - 1)
                setTimeout(() => {
                    userAnswer.classList.remove('correct')
                    putQuestion(roundNum - 1)
                }, 1000)
            }
        } else {
            userAnswer.classList.add('wrong')
            popUpText.innerHTML = `На жаль ви програли, Ваш виграш становить ${prize}грн`
            gameOver = true

        }
    }
}




function handlePhoneHelpClick() {
    if (phoneHelpAvailable) {
        let randomIndex = Math.floor(Math.random() * 4)
        let randomOption = optionsContainers[randomIndex]
        optionsContainers.forEach((el, index) => {
            if (el === randomOption) {
                el.classList.add("clue")
            }
        })
        setPopUpTitleAndText("Дзвінок другу", `Друг думає, що правильна відповідь - ${randomOption.innerText}`)
        phoneHelpAvailable = false
        phoneHelp.classList.add("used")
    }
}

function putQuestion(round) {
    optionsContainers.forEach((el, i) => {
        el.innerHTML = roundInfo[round].options[i]
        el.classList.remove("clue")
    })
    questionContainer.innerHTML = roundInfo[round].question
}

function definePrizeOnBoard(round) {
    prizes.forEach((el) => el.classList.remove("round"))
    prizes[round].classList.add('round')

}

function setPopUpTitleAndText(title, text) {
    popUpTitle.innerText = title
    popUpText.innerHTML = text
}

setPopUpTitleAndText(`Раунд ${roundNum}`, "Виберіть правильну відповідь")

putQuestion(roundNum - 1)

optionsContainer.addEventListener("click", (e) => {
        round(e.target)
    }
)
phoneHelp.addEventListener("click", (e) => {
    handlePhoneHelpClick();

})
fiftyHelp.addEventListener("click", () => {
    handleFiftyHelpClick(roundNum);
})

