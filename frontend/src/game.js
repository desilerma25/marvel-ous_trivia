class Game{

    constructor(id, difficulty){
        this.questions = []
        this.currentQ = 0
        this.score = 0
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
                let q = new Question(question.game_id, this, question.content, question.correct_answer, question.option_a, question.option_b, question.option_c, question.option_d)
                // console.log("js object", q)
                
                this.questions.push(q); 
                // q.renderQuestions();
                
            }
            this.renderIndividualQ();
        })
    }
    renderIndividualQ() {
        //render one at a time
        // access this.q

        let q = this.questions[this.currentQ]
        q.renderQuestions();
        // increase count by 1
        this.currentQ++
        // current.renderQuestions();
        // renderIndividualQ();
        // trigger again
        // add next btn, calls funct again
        // or when check ans. trigger


        // check if last, dont render, alert score
    }

}