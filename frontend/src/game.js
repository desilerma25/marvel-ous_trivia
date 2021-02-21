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

        let audio = document.getElementById("audio")
        audio.pause();
        let notWorthy = document.getElementById("not_worthy")
        notWorthy.pause();

        let difficultyButtons = document.getElementById("games-container")
        difficultyButtons.style.display = "none";

        fetch(`${BASE_URL}/games/${this.id}/questions`)
        .then(resp => resp.json())
        .then(questions => {
            for (const question of questions) {
                let q = new Question(question.game_id, this, question.content, question.correct_answer, question.option_a, question.option_b, question.option_c, question.option_d)
                this.questions.push(q); 
            }
            this.renderIndividualQ();
        })
    }
    renderIndividualQ() {
        let q = this.questions[this.currentQ]
        // console.log("currentQ", this.currentQ)
        // console.log("q", q)
        // console.log("this q", this.questions)
        if (this.currentQ < this.questions["length"]) {
            q.renderQuestions();
            this.currentQ++
        } else {
            let averageScore = Math.floor((this.score / this.questions["length"]) * 100)
            console.log(averageScore)
            if (averageScore < 70 ) {
                let notWorthy = document.getElementById("not_worthy")
                notWorthy.play();
                setTimeout(() => alert("You are not worthy! You got " + averageScore + "% right."), 1000)
            } else {
                let excelsior = document.getElementById("excelsior")
                excelsior.play();
                alert("Stan would be proud! You got " + averageScore + "% right.") 
            }
            renderPlayAgainBtn();
            
        }
    }
}




