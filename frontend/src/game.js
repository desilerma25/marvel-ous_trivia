class Game{

    constructor(id, difficulty){
        this.questions = []
        this.id = id
        this.difficulty = difficulty
        this.currentQ = 0
        this.score = 0
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
        .then(questions => {git 
            for (const question of questions) {
                let q = new Question(question.game_id, this, question.content, question.correct_answer, question.option_a, question.option_b, question.option_c, question.option_d)
                this.questions.push(q);
            }
            this.renderIndividualQ();
        })
    }
    renderIndividualQ() {
        let q = this.questions[this.currentQ]

        if (this.currentQ < this.questions["length"]) {
            q.renderQuestions();
            this.currentQ++
        } else {
            let averageScore = Math.floor((this.score / this.questions["length"]) * 100)
            console.log(this.questions["length"])
            if (averageScore < 70 ) {
                console.log(this)
                let notWorthy = document.getElementById("not_worthy")
                notWorthy.play();
                setTimeout(() => alert("You are not worthy! You got " + averageScore + "% right."), 500)
                console.log(this.questions)
            } else {
                // this.questions = []
                let excelsior = document.getElementById("excelsior")
                excelsior.play();
                setTimeout(() => alert("Stan would be proud! You got " + averageScore + "% right."), 500)   
            }
            this.questions = []
            this.currentQ = 0
            this.score = 0
            console.log(this.questions)
            renderPlayAgainBtn();
        }
    }
}




