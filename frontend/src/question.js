class Question{

    constructor(game_id, content, correct_answer, option_a, option_b, option_c, option_d) {
        this.game_id = game_id
        this.content = content
        this.correct_answer = correct_answer
        this.option_a = option_a
        this.option_b = option_b
        this.option_c = option_c
        this.option_d = option_d
    }

    // render popup saying q was saved and hide form
    renderQSubmissionsPopUp() {
        let questionForm = document.getElementById("questions-form")
        alert("Thank you for your question submission!")
        // may need to come back to this? Do I want it gone after q is submitted?
        questionForm.style.display = "none";
        // figure out a  way to toggle form hidden/unhidden
        
    }


    renderQuestions() {
    let gameQContainer = document.getElementById("game-questions")

    let questionDiv = document.createElement("div")
    questionDiv.className = "trivia-qs"
    questionDiv.innerHTML =     
    `
    <h2> ${this.content}</h2>
    <form id="answer-opt">
    <input type="radio" id="option_a" name="options" value="${this.option_a}">
    <label for="option_a">${this.option_a}</label>

    <input type="radio" id="option_b" name="options" value="${this.option_b}">
    <label for="option_b">${this.option_b}</label>

    <input type="radio" id="option_c" name="options" value="${this.option_c}">
    <label for="option_c">${this.option_c}</label>

    <input type="radio" id="option_d" name="options" value="${this.option_d}">
    <label for="option_d">${this.option_d}</label>
    <br><br>
    </form>
    `
    gameQContainer.append(questionDiv)
    // create btn w. doc.ele. then append btn
    let answerBtn = document.createElement("button")
    answerBtn.className = "answer"
    answerBtn.setAttribute("id", "check-answer")
    answerBtn.innerHTML = `Check your answer`
    // gameQContainer.append(answerBtn)
    questionDiv.append(answerBtn)
    // add event listener to vari that rep btn
    answerBtn.addEventListener("click", () => this.checkForAnswer())

    console.log(this)
}

    checkForAnswer () {

        const answerChoices = document.getElementById("answer-opt")
        let selected
    
        for (let i = 0, length = answerChoices.length; i < length; i++) {
            if (answerChoices[i].checked) {
                selected = answerChoices[i].value
                console.log(selected)
                console.log(this.correct_answer)
                if (selected === this.correct_answer) {
                    console.log("Excelsior")
                }
                else {
                    console.log("FALSE")
                }
            }
        }
    }
}

// const difficultyLevelSelected = document.getElementById("games-container")


function renderQuestions(q) {
    let gameQContainer = document.getElementById("game-questions")

    let questionDiv = document.createElement("div")
    questionDiv.className = "trivia-qs"
    questionDiv.innerHTML =     
    `
    <h2> ${q.content}</h2>
    <form id="answer-opt">
    <input type="radio" id="option_a" name="options" value="option_a">
    <label for="option_a">${q.option_a}</label>

    <input type="radio" id="option_b" name="options" value="option_b">
    <label for="option_b">${q.option_b}</label>

    <input type="radio" id="option_c" name="options" value="option_c">
    <label for="option_c">${q.option_c}</label>

    <input type="radio" id="option_d" name="options" value="option_d">
    <label for="option_d">${q.option_d}</label>
    <br><br>
    </form>
    `
    gameQContainer.append(questionDiv)
    // create btn w. doc.ele. then append btn
    let answerBtn = document.createElement("button")
    answerBtn.className = "answer"
    answerBtn.setAttribute("id", "check-answer")
    answerBtn.innerHTML = `Check your answer`
    // gameQContainer.append(answerBtn)
    questionDiv.append(answerBtn)
    // add event listener to vari that rep btn
    answerBtn.addEventListener("click", () => this.checkForAnswer())

    console.log(q)
}

// function checkForAnswer () {

//     const answerChoices = document.getElementById("answer-opt")

//     // let difficulty // creates undef vari
//     let selected



//     for (let i = 0, length = answerChoices.length; i < length; i++) {
//         if (answerChoices[i].checked) {
//             selected = answerChoices[i].value
//             console.log(selected)
//             console.log(this.correct_answer)
//             if (selected === this.correct_answer) {
//                 console.log("Excelsior")
//             }
//             else {
//                 console.log("FALSE")
//             }
//         }
//     }
// }



