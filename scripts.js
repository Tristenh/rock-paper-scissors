let player = userSelection()

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
let pcMove = pcSelection()
function pcSelection(){
    let char = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * char.length)
    let pcMove = char[randomIndex]
    alert(`pc has chosen ${pcMove}`)
    return pcMove
}
resutlt()
function resutlt (){
    if (player ==="R" && pcMove === "Scissors"){
        alert("player wins")
    }
    else if (player ==="P" && pcMove === "Rock"){
        alert("player wins")
    }
    else if (player ==="S" && pcMove === "Paper"){
        alert("player wins")
    }
    else{
        alert("pc wins")
    }
}