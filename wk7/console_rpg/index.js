var readlineSync = require('readline-sync');

let quitGame = false;
const userName = readlineSync.question("What is your user name? ")
console.log(`******`)
const strIntroduction = `Welcome ${userName}, you have been summoned to the edge of Wicked Woods by the High Queen of The Mists. \nThe land has become over run by the Gray Matter Creatures poisioned by the befallen King. \nWill you help us in stopping their spread and reclaiming our land?\n`
console.log(strIntroduction);


let joinQuest = readlineSync.keyIn(`Join: 1\nQuit: 2\nChoice:  `, {
    limit: '$<1-2>'
})
let questerClass = '';

if (joinQuest == 1) {
    console.log(`******`)
    console.log(`${userName} has joined the quest!`);
    console.log(`******`)
} else {
    console.log(`******`)
    console.log(`${userName} has choosen not to fight. The Gray Matter Creatures over take the land and the world falls to darkness...`)
    alive = false;
    quitGame = true;
    console.log(`******`)
}

if (!quitGame) {
    const classIndex = readlineSync.keyIn(`${userName} Please Pick your class of fight: \nPress 1 for Warrior \nPress 2 for Cleric \nPress 3 for Rogue \nPress 4 for Bard\nChoice:  `, {
        limit: '$<1-4>'
    });
    if (classIndex == 1) {
        console.log(`******`)
        console.log(`${userName} has become our WARRIOR!!`)
        console.log(`******`)
        questerClass = "Warrior";
    } else if (classIndex == 2) {
        console.log(`******`)
        console.log(`${userName} has choosen the magic of CLERIC!!`)
        console.log(`******`)
        questerClass = "Cleric";
    } else if (classIndex == 3) {
        console.log(`******`)
        console.log(`${userName} is to be trusted as the ROGUE!!`)
        console.log(`******`)
        questerClass = "Rogue";
    } else if (classIndex == 4) {
        console.log(`******`)
        console.log(`${userName} will guard the world as only a BARD can do!!`)
        console.log(`******`)
        questerClass = "Bard";

    };

    const villains = ["Land-Pirates", "Demon-Seeds", "Zombie-Arachnids", "Sirens"];
    const villainAttacks = ["Fanged-Bite", "Sword-Swipe", "Venom", "Heart-Attack"];
    const loot = ["Diamond", "Lighting", "Journal-Of-Ra", "Harpy-Harp"];
    const abilites = ["Bubble-Blast", "Eternal-Flame", "Night-Shade", "Thunder-Struck"];

    let prize = [];

    function gamebegin() {
        let alive = true;
        let hasEscaped = false;

        let heroHealth = 100;
        let heroAttack = abilites[Math.floor(Math.random() * abilites.length)];
        let heroDamage = Math.floor(Math.random() * (21 - 3 + 7) + 5);

        let villain = villains[Math.floor(Math.random() * villains.length)]
        let villainHealth = 100;
        let villainAttack = villainAttacks[Math.floor(Math.random() * villainAttacks.length)]
        let villainDamage = Math.floor(Math.random() * (7 * 2 * 5) - 6);

        while (alive) {

            villain = villains[Math.floor(Math.random() * villains.length)];
            villainHealth = 100;
            villainAttack = villainAttacks[Math.floor(Math.random() * villainAttacks.length)]
            villainDamage = Math.floor(Math.random() * (7 * 2 * 5) - 6);

            let index = readlineSync.keyIn(`${userName} what will you do next?\nWalk: 1 or w\nPrint: 2\nQuit: 3\nChoice:  `, {
                limit: '$<1,2,3,w>'
            })
            console.log(`******`)
            if (index == 3) {
                console.log(`******`)
                console.log(`${userName} has abandoned the quest, the land is forfeit to darkness...`);
                quitGame = true;
                alive = false;
                console.log(`******`)
            } else if (index == 2) {
                console.log(`*****Quester Information*****\nUser Name:  ${userName}\nHero Health: ${heroHealth}\nClass: ${questerClass}\nLooted: ${prize}\n***************`)
            } else if (index == 1 || index == 'w') {
                let key = Math.random();
                if (key <= .3) {
                    console.log(`******`)
                    console.log("Walking in the heavy mist along the bog waters edge, knee high grass ripples in the breeze...");
                    console.log(`******`)
                } else if (key >= .3) {
                    console.log(`******`)
                    villain = villains[Math.floor(Math.random() * villains.length)];
                    console.log(`${villain} come into view`);
                    hasEscaped = false;
                    console.log(`******`)
                    while (villainHealth > 0 && heroHealth > 0 && hasEscaped != true) {
                        villainAttack = villainAttacks[Math.floor(Math.random() * villainAttacks.length)]
                        villainDamage = Math.floor(Math.random() * (25));
                        heroAttack = abilites[Math.floor(Math.random() * abilites.length)];
                        heroDamage = Math.floor(Math.random() * (25) + 5);

                        const userChoice = readlineSync.keyIn(`${userName} will you stand and fight or try to run?\nEnter "f" to fight or Enter "r" to run\nChoice:  `, {
                            limit: '$<r,f>'
                        }) 
                        console.log(`******`)

                        switch (userChoice) {
                            case "r":
                                const run = Math.random();
                                if (run >= 0.5) {
                                    console.log(`You have out run ${villain}`);
                                    console.log(`******`)
                                    hasEscaped = true;
                                } else if (run < 0.5) {
                                    console.log(`${villain} blocks your path, you could not escape!!`)
                                    console.log(`${villain} attacks with ${villainAttack} for ${villainDamage} DMG!`);
                                    heroHealth = heroHealth - villainDamage;
                                    console.log(`******`)
                                    hasEscaped = false;
                                }
                                break;
                            case "f":
                                const fight = Math.random();
                                if (fight >= 0.4) {
                                    console.log(`******`)
                                    console.log(`${userName} has attacked with ${heroAttack} for ${heroDamage} DMG!`);
                                    villainHealth = villainHealth - heroDamage;

                                    if (villainHealth > 0) {
                                        console.log(`${villain} attacks with ${villainAttack} for ${villainDamage} DMG!`);
                                        heroHealth = heroHealth - villainDamage;
                                    }
                                    console.log(`******`)
                                } else if (fight < 0.4) {
                                    console.log(`******`)
                                    console.log(`${userName} has MISSED!!`)
                                    console.log(`${villain} attacks with ${villainAttack} for ${villainDamage} DMG!`);
                                    console.log(`******`)
                                    heroHealth = heroHealth - villainDamage;
                                }
                                break;
                            default:
                                console.log(`${villain} attacks with ${villainAttack} for ${villainDamage} DMG!`);
                                heroHealth = heroHealth - villainDamage;
                                console.log(`******`)
                                break;
                        }

                        if (heroHealth <= 0) {
                            console.log(`******`)
                            console.log(`${userName} has perished, perhaps you are not the hero we needed after all!`)
                            console.log(`******`)
                            alive = false;
                        } else if (villainHealth <= 0) {
                            console.log(`******`)
                            lootDropped = loot[Math.floor(Math.random() * loot.length)]
                            prize.push(lootDropped)
                            console.log(`Congratulations you did not die!  ${villain} has dropped a ${lootDropped}`);
                            console.log(`******`)
                        }

                    }

                }
            }

            if (!alive && !quitGame) {
                console.log(`******`)
                console.log(`${userName} would you like to attempt to redeem yourself and try again?\n`);
                let continueQuest = readlineSync.keyIn(`Press 1 to RESSURECT \nPress 2 to ABANDON HUMANITY \nChoice:  `, {
                    limit: '$<1-2>'
                });
                if (continueQuest == 1) {
                    console.log(`******`)
                    console.log(`${userName} is RESSURECTED!`)
                    console.log(`******`)
                    heroHealth = 100;
                    alive = true;
                } else {
                    console.log(`******`)
                    console.log(`${userName} has chosen to abandon humanity to the Gray Matter Creatures...`)
                    alive = false;
                    console.log(`******`)
                }
            }
        }

    }

    gamebegin();
}