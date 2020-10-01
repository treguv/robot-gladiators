// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//Enemy Stats
var enemyName = "Roberto";
var enemyHealth = 100;
var enemyAttck = 10;
var enemyNames = ["Roborto","Amy Android", "Robo Trumble"];

//Start the game
//This is how you make a function
function fight(enemyName){
    while(enemyHealth > 0 && playerHealth > 0){
        var promptFight = window.prompt("Would you like to Fight or Skip this battle");
        //Check if they skipped
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure youd like to quit?");
            if(confirmSkip){
                playerMoney-=10;
                console.log("playerMoney", playerMoney);
                window.alert(playerName + " has chosen to skip the fight!");
                break;
            }
        }
        console.log(promptFight);
        if(promptFight == "fight" || promptFight == "FIGHT"){
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth -= playerAttack;
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health left");
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth -= enemyAttck;
            // Log a resulting message to the console so we know that it worked.
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health left");
            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } 
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // put new code under this
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

            // check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } 
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    }
    
}

function startGame(){
    for(var i = 0; i < enemyNames.length; i++){
        if(playerHealth > 0){
            window.alert("Welcome to robot gladiators! Round " + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = 10;
            fight(pickedEnemyName);
        }
        else{
            window.alert;("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    
    console.log(playerHealth);
    //Reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney= 10;
    //Play again
    endGame();
}

var endGame = function(){
    //if player is still alive
    if(playerHealth > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }else { 
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");
    if(playAgainConfirm) {
        //restart the game
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

startGame();