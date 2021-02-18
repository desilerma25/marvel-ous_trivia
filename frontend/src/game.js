class Game{
    constructor(id, difficulty){
        this.id = id
        this.difficulty = difficulty
    }

    //instance method thats going to render the obj to dom
    renderGame() {
        let gamesDiv = document.getElementById("games-container")

        gamesDiv.innerHTML +=
        `
        <ul>
        <button>
        ${this.difficulty} 
        </button>
        </ul>
        `
    }
}