var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States

//"WIN" - Player robot has defeated all enemy-robotos
// * Fight all enemy-robots
// * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

//Create function - This is a function declaration
// function fight() {
//     window.alert("Welcome to Robot Gladiators!");
// }

//Execute function
// fight ();

//Create function - This is a function expression
var fight = function(enemyName) {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    //if player chooses to fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        //Subtract the value of "playerAttack" from the value of "enemyHealth" and use that result to update the value in the "enemyHealth" variable
            enemyHealth = enemyHealth-playerAttack;

        //Log a resulting message to the console so we know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        )

        //Check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        //remove player's health by subtracting the amount set in the enemyAttack variable
        //Subtract the value of "enemyAttck" from the value of "playerHealth" and use that result to update the value in the "playerHealth" variable
        playerHealth = playerHealth - enemyAttack;

        //Log a resulting message to the console so we know that it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )

        //Check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    //if player chooses to skip
    } else if (promptFight ==="skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");

            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }

        //if no (false), ask question again by running fight() again
        else {
            fight();
        }

    //if the player chooses anything other than fight or skip
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
    
};

//Execute function
// fight ();

//Looping through fights
for (var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}