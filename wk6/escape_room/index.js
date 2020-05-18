const readlineSync = require('readline-sync');
const userName = readlineSync.question("What is your user name? ")

const strIntroduction = `Welcome ${userName} to the Escape Room O' DOOM!!!!!!! `
console.log(strIntroduction);

let isAlive = true;
let hasKey = false;
let hasAxe = false;

while (isAlive){
    let menuOption = readlineSync.keyIn(`Press 1 to put your hand in the hole \nPress 2 for finding the key \nPress 3 to open the door \nPress 4 to drink from canteen \nPress 5 to open nearby crate \n`, {limit: '$<1-5>'});

    if(menuOption == 1){
        console.log (`Oh no ${userName} you have died... GAME OVER`)
        isAlive = false;
    }
    else if (menuOption == 2 && hasKey == false){
        console.log (`${userName} you have found the key`)
        hasKey = true;
    }
    else if (menuOption == 2 && hasKey == true){
        console.log(`${userName} you have the key!!`)
    }
    else if (menuOption == 3 && hasKey == false && hasAxe == false){
        console.log(`${userName} you don't have the key please look again `)
    }
    else if (menuOption == 3 && (hasKey == true || hasAxe == true) ){
        if(hasKey){
            console.log(`${userName} you have inserted the key into the door, you have unlocked it and escaped!! `);
        } else 
        {
            console.log(`${userName}, you use your new axe to chop down the door and escaped!! (What were you thinking, ${userName}?)`);
        }
        isAlive = false;
    }
    else if (menuOption == 4){
        console.log(`You feel refreshed!!`);
    }
    else if (menuOption == 5){
        console.log(`Congratulations ${userName}, you have found an axe!!`);
        hasAxe = true;
    }

    if(!isAlive){
        console.log(`${userName} would you like to try again?`)
        let startAgain = readlineSync.keyIn(`Press 1 to CONTINUE \nPress 2 to QUIT \n`, {limit: '$<1-2>'});
        if(startAgain == 1)
        {
            isAlive = true;
            hasKey = false;
            hasAxe = false;
        }
        else {
            isAlive = false;
        }
        
    }

} 






//([query, [options]])
//Enter 1 to put hand in the hole = death
//Press 2 to find the key = alive
//Press 3 to open the door = death but winner