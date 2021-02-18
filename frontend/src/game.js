class Game{
    constructor(id, difficulty){
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

    renderDifficultyQs(event) {
    // listen for target click
    //if innerText === expert
    //pull all expert q's
    // console.log(this)
    

    //call funct. to fetch q's
    renderQuestions(this.id)

}
}