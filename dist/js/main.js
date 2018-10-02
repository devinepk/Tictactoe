let playerX = "First";
let playerO = "Second";
//let squares = document.getElementById()


document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        // "interactive" means that the DOM is ready for us manipulate
        start();

        function start() {
          // Create event listeners on every button
          let players = document.getElementsByClassName("players");
          for (let i = 0; i < players.length; i++) {
              players[i].addEventListener("click", playerX, playerO);
          }

          let buttons = document.getElementsByClassName("key");
          for (let i = 0; i < buttons.length; i++) {
              buttons[i].addEventListener("click", pressX, pressO);
          }


          function players(event); {
            event.target.innherHTML 
          }

          function pressX(event) {
            event.target.innerHTML = "X";
            console.log(event.target);

      }
          function pressO(event) {
            event.target.innerHTML = "O";
            console.log(event.target);
          }
    }
  }
}
