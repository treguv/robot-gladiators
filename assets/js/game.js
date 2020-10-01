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
var enemyAttack = 10;
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
                playerMoney = Math.max(0, playerMoney- 10);
                console.log("playerMoney", playerMoney);
                window.alert(playerName + " has chosen to skip the fight!");
                break;
            }
        }
        console.log(promptFight);
        if(promptFight == "fight" || promptFight == "FIGHT"){
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            var damage = randomNumber(playerAttack -3, playerAttack);
            enemyHealth = Math.max(0,enemyHealth - damage);
            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health left");
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            var damage = randomNumber(enemyAttack-3, enemyAttack);
            playerHealth = Math.max(0,playerHealth - damage);
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

function shop(){
    console.log("Entered the shop");
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    
    switch(shopOptionPrompt){
        case "REFILL":
        case("refill"):
            if(playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");

                //increase health and decrease money
                playerHealth +=20;
                playerMoney-=7;
                break;
            }
        case "UPGRADE":
        case "upgrade":
            if(playerMoney>=7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            
                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
                break;
            }
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
        
            // do nothing, so function will end
            break;
          default:
            window.alert("You did not pick a valid option. Try again.");
        
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
}

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max-min + 1)) + min;
    return value;
}
function startGame(){
    for(var i = 0; i < enemyNames.length; i++){
        if(playerHealth > 0){
            window.alert("Welcome to robot gladiators! Round " + (i+1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);
            //If not last enemy
            if (playerHealth > 0 && i < enemyNames.length - 1) {
               var storeConfirm = window.confirm("Would you like to shop?");
               if(storeConfirm) {
                shop();
               }
            }
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