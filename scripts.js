while (playAgain = true) {
let playerWins = 1;
let pcWins = 1;
    player = userSelection()
    pcMove = pcSelection()
    function userSelection(){
        let player = prompt("Please select R, P or S")
        player = player.toLocaleUpperCase()
        while (true){
            if (player === "R"){
                alert("you have selected Rock")
                return player
            }
            else if (player === "P"){
                alert ("you have selected Paper")
               return player
            }
            else if (player === "S"){
                alert("you have selected Scissors")
                return player
            }
            else{
                alert("invalid selection")
                userSelection()
            }
        } 
    }
    
    function pcSelection(){
        let char = ["R", "P", "S"];
        let randomIndex = Math.floor(Math.random() * char.length)
        let pcMove = char[randomIndex]
        if (pcMove === "R"){
            alert("Pc has selected Rock")
            return pcMove
        }
        else if (pcMove === "P"){
            alert ("Pc has selected Paper")
           return pcMove
        }
        else if (pcMove === "S"){
            alert("Pc has selected Scissors")
            return pcMove
    }
    }
    
    resutlt()
    function resutlt (){
        if (player ==="R" && pcMove === "S"){
            alert("player wins")
            alert(`player points : ${playerWins++}`)
        }
        else if (player ==="P" && pcMove === "R"){
            alert("player wins")
            alert(`player points : ${playerWins++}`)

        }
        else if (player ==="S" && pcMove === "P"){
            alert("player wins")
            alert(`player points : ${playerWins++}`)

        }
        else if (player === pcMove){
            alert("its a tie")
        }
        else{
            alert("pc wins")
            alert(`Pc points : ${pcWins++}`)

        }
    }
    
    playAgain  = confirm("play again ?")
}