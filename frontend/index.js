// Main file where everything will happen, keep small
document.addEventListener("DOMContentLoaded", () => {
    fetchGames();
    createQuestionForm();
})

// let questionForm = document.getElementById("questions-form")

const BASE_URL = "http://127.0.0.1:3000"

//need a read (fetch games index)
function fetchGames() {
    fetch(`${BASE_URL}/games`)
    .then(resp => resp.json())
    .then(games => {
        // we do something w data we fetched
        for (const game of games) {
            //console.log("rails obj", game)
            let g = new Game(game.id, game.difficulty)
            //console.log("js object", g)
            g.renderGame();
        }
    })
}

// need a read (fetch questions index)

// need a create (fetch POST questions)

// create a form
// add event listener
// once form submitted => fetch post to backend
// do something with the returned obj

function createQuestionForm() {
    let questionForm = document.getElementById("questions-form")
    questionForm.innerHTML +=
    `
    To add a question to our game, please complete the info below. <br><br>
    <form>
        Question: <input type="text" id="content"> <br>
        Correct Answer: <input type="text" id="correct_answer"> <br>
        Difficulty: <br>
            <input type="radio" id="beginner" name="difficulty" value="beginner">
            <label for="beginner">Beginner</label> <br>

            <input type="radio" id="intermediate" name="difficulty" value="intermediate">
            <label for="intermediate">Intermediate</label> <br>

            <input type="radio" id="expert" name="difficulty" value="expert">
            <label for="expert">Expert</label> <br>
        Please insert the correct answer it one of the answer options. <br>
        Answer Option A: <input type="text" id="option_a"> <br>
        Answer Option B: <input type="text" id="option_b"> <br>
        Answer Option C: <input type="text" id="option_c"> <br>
        Answer Option D: <input type="text" id="option_d"> <br>
        <input type="submit" value="Add your question!">
    </form>
    `;

    questionForm.addEventListener("submit", questionFormSubmit)

}

function questionFormSubmit(event) {
    event.preventDefault()
    let newContent = document.getElementById("content").value
    let newCorrect = document.getElementById("correct_answer").value
    let newOptA = document.getElementById("option_a").value
    let newOptB = document.getElementById("option_b").value
    let newOptC = document.getElementById("option_c").value
    let newOptD = document.getElementById("option_d").value

    const radios = document.getElementsByName('difficulty');
    let difficulty // creates undef vari

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            // console.log("in the loop", radios[i].value);
            // undef vari. gets its value here
            difficulty = radios[i].value
        }
    }
    console.log(newContent, newCorrect, newOptA, newOptB, newOptC, newOptD, difficulty)
}





