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

    renderDifficultyQs(event) {
    // console.log(this.id)

    //call funct. to fetch q's
    // renderQuestions(this.id)

    // need to fix this, talk to Jenn. Move to game or q class??
        fetch(`${BASE_URL}/games/${this.id}/questions`)
        .then(resp => resp.json())
        .then(questions => {
            for (const question of questions) {
                // console.log("rails obj", question)
                let q = new Question(question.game_id, question.content, question.correct_answer, question.option_a, question.option_b, question.option_c, question.option_d)
                // console.log("js object", q)
                renderQuestions(q);
            }
        })
    }
}