class Question{

    constructor(game_id, content, correct_answer, option_a, option_b, option_c, option_d) {
        this.game_id = game_id
        this.content = content
        this.correct_answer = correct_answer
        this.option_a = option_a
        this.option_b = option_b
        this.option_c = option_c
        this.option_d = option_d
    }

    // render popup saying q was saved and hide form
    renderQSubmissionsPopUp() {
        let questionForm = document.getElementById("questions-form")
        alert("Thank you for your question submission!")
        // may need to come back to this? Do I want it gone after q is submitted?
        questionForm.style.display = "none";
        //render quiz?
    }
}

const difficultyLevelSelected = document.getElementById("games-container")

// either forEach
// or put event listener on games-container, if/else 

// difficultyLevelSelected.addEventListener("click", renderDifficultyQs)

// function renderDifficultyQs(event) {
//     // listen for target click
//     //if innerText === expert
//     //pull all expert q's
//     if (event.target.innerText === "Beginner") {
//         debugger;
//         // console.log("Beginner")
//         // display q's with game_id 1
//         renderQuestions(1)

//     } else if (event.target.innerText === "Intermediate") {
//         // display q's with game_id 2
//         console.log("Intermediate")
//         renderQuestions(2)
//     } else {
//         // display q's with game_id 3
//         console.log("Expert")
//         renderQuestions(3)
//     }

// }

function renderQuestions(game_id) {
    console.log(game_id)

    
}



