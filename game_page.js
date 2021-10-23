player_1score = 0;
player_2score = 0;

player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

document.getElementById("player_1name").innerHTML=player1_name
document.getElementById("player_2name").innerHTML=player2_name

 
document.getElementById("player_1score").innerHTML=player_1score
document.getElementById("player_2score").innerHTML=player_2score

document.getElementById("Question_Turn").innerHTML=player1_name
document.getElementById("Answer_Turn").innerHTML=player2_name