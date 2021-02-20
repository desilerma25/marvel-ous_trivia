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

        // let audio = document.getElementById("audio")
        // audio.pause();

        let difficultyButtons = document.getElementById("games-container")
        difficultyButtons.style.display = "none";

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
        let q = this.questions[this.currentQ]
        // q.renderQuestions();
        // this.currentQ++

        console.log("currentQ", this.currentQ)
        console.log("q", q)
        console.log("this q", this.questions)

        if (this.currentQ < this.questions["length"]) {
            q.renderQuestions();
            this.currentQ++
        } else {
            alert("you got " + this.score + " correct out of " + this.questions["length"])
            let difficultyButtons = document.getElementById("games-container")
            difficultyButtons.style.display = "block";
        }
    }

}

