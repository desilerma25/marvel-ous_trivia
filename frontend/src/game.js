class Game{
    constructor(id, difficulty){
        this.id = id
        this.difficulty = difficulty
        this.element = document.createElement("ul") // any inst fun we get access to this.element
    }

    //instance method thats going to render the obj to dom
    renderGame() {
        let gamesDiv = document.getElementById("games-container")

        // console.log(this.difficulty)

        this.element.innerHTML +=
        `
        <button>
        ${this.difficulty} 
        </button>
        `

        gamesDiv.append(this.element)
        this.element.addEventListener("click", () => this.renderDifficultyQs())
    }

    renderDifficultyQs() {

        let difficultyBtns = document.getElementById("games-container")
        difficultyBtns.style.display = "none";

        fetch(`${BASE_URL}/games/${this.id}/questions`)
        .then(resp => resp.json())
        .then(questions => {
            for (const question of questions) {
                // console.log("rails obj", question)
                let q = new Question(question.game_id, question.content, question.correct_answer, question.option_a, question.option_b, question.option_c, question.option_d)
                // console.log("js object", q)
                q.renderQuestions();
            }
        })
    }
}