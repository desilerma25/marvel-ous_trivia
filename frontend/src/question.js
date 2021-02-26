class Question{

    constructor(game_id, game, content, correct_answer, option_a, option_b, option_c, option_d) {
        this.game_id = game_id
        this.game = game
        this.content = content
        this.correct_answer = correct_answer
        this.option_a = option_a
        this.option_b = option_b
        this.option_c = option_c
        this.option_d = option_d
        this.questionDiv = document.createElement("div")
        // this.secretWin()
    }

    // render popup saying q was saved and hide form
    renderQSubmissionsPopUp() {
        let questionForm = document.getElementById("questions-form")
        const addBtn = document.querySelector("#new-q-btn");

        alert("Thank you for your question submission!")
        questionForm.style.display = "none";

        addBtn.innerText = "Add a question!"
    }


    renderQuestions() {
        let gameQContainer = document.getElementById("game-questions")
        
        this.questionDiv.className = "trivia-qs"
        this.questionDiv.innerHTML =     
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
        <br>
        </form>
        `
        gameQContainer.append(this.questionDiv)
        
        let answerBtn = document.createElement("button")
        answerBtn.className = "answer"
        answerBtn.setAttribute("id", "check-answer")
        answerBtn.innerHTML = `Check your answer`
        this.questionDiv.append(answerBtn)
        answerBtn.addEventListener("click", () => this.checkForAnswer())
        // this.secretWin()
    }

    checkForAnswer () {

        const answerChoices = this.questionDiv.querySelector("#answer-opt")
        let selected
    
        for (let i = 0, length = answerChoices.length; i < length; i++) {
            if (answerChoices[i].checked) {
                selected = answerChoices[i].value
                if (selected === this.correct_answer) {
                    alert("That was correct. Excelsior!")
                    this.game.score++
                }
                else {
                    alert("That was false you puny human.")
                }
                this.game.renderIndividualQ();
                this.questionDiv.remove();
            }
        }
    }

    // Code to hide a secret win when logo clicked
    // secretWin() {
    //     //listen for click on img
    //     // mark answer as correct
    //     let marvelous = document.getElementById("marvelous-trivia")
    //     marvelous.addEventListener("click", () => this.excelsior())
    // }

    // excelsior() {
    //     // debugger;
    //     this.game.score++
    //     alert("You've found a secret win!")
    //     this.game.renderIndividualQ();
    //     this.questionDiv.remove();
    // }
}