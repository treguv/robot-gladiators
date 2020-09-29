var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


//Enemy Stats
var enemyName = "Roberto";
var enemyHealth = 100;
var enemyAttck = 10;
console.log(playerName);

fight(playerName);

//This is how you make a function
function fight(name){
    window.alert("Welcome to robot gladiators");
    var promptFight = window.prompt("Would you like to Fight or Skip this battle");
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
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // put new code under this
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } 
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure youd like to quit?");
        if(confirmSkip){
            playerMoney-=2;
            window.alert(playerName + " has chosen to skip the fight!");
        }else{
            fight();
        }
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
    
}
