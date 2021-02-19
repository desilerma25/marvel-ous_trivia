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

    // renderQuestions() {
        //gets uncaught ref error here
    //     console.log("we are working")
    //     debugger;
    
    // }
    

}

// const difficultyLevelSelected = document.getElementById("games-container")


function renderQuestions(q) {
    let gameQContainer = document.getElementById("game-questions")
    gameQContainer.innerHTML +=
    `
    <h2> ${q.content}</h2>

    <input type="radio" id="option_a" name="options" value="option_a"
    <label for="option_a">${q.option_a}</label>

    <input type="radio" id="option_b" name="options" value="option_b"
    <label for="option_b">${q.option_b}</label>

    <input type="radio" id="option_c" name="options" value="option_c"
    <label for="option_c">${q.option_c}</label>

    <input type="radio" id="option_d" name="options" value="option_d"
    <label for="option_d">${q.option_d}</label>
    `


    // console.log("we are working")
    console.log(q)
    // debugger;

}



