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

const difficultyLevelSelected = document.getElementById("games-container")


function renderQuestions(q) {
    // let GameQContainer = document.getElementById("game-questions")

    // console.log("we are working")
    console.log(q)
    // debugger;

}



