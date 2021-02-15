// Main file where everything will happen, keep small
document.addEventListener("DOMContentLoaded", () => {
    fetchGames()
})

const BASE_URL = "http://127.0.0.1:3000"

// need a read (fetch games)
function fetchGames() {
    fetch(`${BASE_URL}/games`)
    .then(resp => resp.json())
    .then(games => {
        // we do something w data we fetched
        console.log(games)
    })
}