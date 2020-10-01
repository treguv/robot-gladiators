// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
//This is how you make a javascript object


//Start the game
//This is how you make a function
function fight(enemy){
    while(enemy.health > 0 && playerInfo.health > 0){
        var promptFight = window.prompt("Would you like to Fight or Skip this battle");
        //Check if they skipped
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure youd like to quit?");
            if(confirmSkip){
                playerInfo.money = Math.max(0, playerInfo.money- 10);
                console.log("playerInfo.money", playerInfo.money);
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                break;
            }
        }
        console.log(promptFight);
        if(promptFight == "fight" || promptFight == "FIGHT"){
            //Subtract the value of `playerInfo.attack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
            enemy.health = Math.max(0,enemy.health - damage);
            // Log a resulting message to the console so we know that it worked.
            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health left");
            // Subtract the value of `enemyAttack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
            var damage = randomNumber(enemy.attack-3, enemy.attack);
            playerInfo.health = Math.max(0,playerInfo.health - damage);
            // Log a resulting message to the console so we know that it worked.
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health left");
            // check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died!");
                break;
            } 
            else {
                window.alert(enemy.hame + " still has " + enemy.health + " health left.");
            }

            // put new code under this
            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

            // check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            } 
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
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
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
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
    //Reset player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++){
        if(playerInfo.health > 0){
            window.alert("Welcome to robot gladiators! Round " + (i+1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            //If not last enemy
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    
    console.log(playerInfo.health);
 
    //Play again
    endGame();
}

var endGame = function(){
    //if player is still alive
    if(playerInfo.health > 0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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


var playerInfo = {
    name : window.prompt("What is your robots name?"),
    health : 100,
    attack : 10,
    money : 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if(this.money >= 7){
            this.health += 20;
            this.money-= 10;
        }else{
            window.alert("You dont have enough money!");
        }
    },
    upgradeAttack: function(){
        if(this.money >= 7){
            this.attack += 6;
            this.money -= 7;
        }else{
            window.alert("You don't have enough money!");
        }
    }
};
//Enemy Stats

var enemyInfo = [
    {
        name: "Roborto",
        attack : randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack : randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack : randomNumber(10, 14)
    }
];

startGame();