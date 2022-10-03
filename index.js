let compInput='';
let userInput = prompt("                               Welcome to snake water gun game                  " + "          press S for snake" + "|| press W for water || press G for gun")
var characters = 'SWG';
var charactersLength = characters.length;
compInput = characters.charAt(Math.floor(Math.random() * 
 charactersLength));
if(userInput===compInput){
  alert("Match draw")
}else if(userInput===W && compInput===G){
  alert("You won")
}else if(userInput===S && compInput===W){
  alert("You won")
}else if (userInput===G && compInput===S){
  alert("You won")
}else{
  alert("Computer win! Better luck next time!")
}

