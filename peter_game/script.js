const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")

const questionContainerElement = document.getElementById("question-container")

const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    // Math.random() 會回傳一個介於0 ~ 1的數字，
    // 那麼，Math.random() - 0.5 自然就會回傳一個介於-0.5 ~ +0.5的數字。
    // 如果排序時，給定任兩個數字(a, b)，隨機回傳一個介於-0.5 ~ +0.5的數值，表示任兩個數字之間的大小相對關係是隨機的
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {  //移掉上一題的選項
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length>currentQuestionIndex+1) {  //確保題目全部跑完能重新一次 
        nextButton.classList.remove("hide")
    } else{
        startButton.innerText="Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add("correct")
    } else{
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question:"cos微分？",
        answers:[
            { text:"-sin", correct: true },
            { text:"sin", correct: false }
        ]
    },
    {
        question:"tan微分？",
        answers:[
            { text:"sec^2", correct: true },
            { text:"sec*tan", correct: false },
            { text:"tan^2", correct: false },
            { text:"sec^3", correct: false }
        ]
    }
]