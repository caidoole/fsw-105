var peopleWhoWantToSeeMadMaxFuryRoad = [{
    name: "Mike",
    age: 12,
    gender: "male"
}, {
    name: "Madeline",
    age: 80,
    gender: "female"
}, {
    name: "Cheryl",
    age: 22,
    gender: "female"
}, {
    name: "Sam",
    age: 30,
    gender: "male"
}, {
    name: "Suzy",
    age: 4,
    gender: "female"
}]

// #1 age old enough 


function isOldEnough() {
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log("is not old enough")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
            console.log("is old enough")
        }
    }
}
isOldEnough();



//  #2 adding the name

function whoIsOldEnough() {
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is not old enough to see Mad Max")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " " + "is old enough to see Mad Max")
        }
    }
}
whoIsOldEnough();

// # 3 adding the gender

function areTheyOldEnough() {


    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        var pronoun = '';

        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
            pronoun = "HER";
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            pronoun = "HIM";
        }

        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let " + pronoun + " in!");
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. Let " + pronoun + " in!");
        }
    }
}
areTheyOldEnough();

// #4 odds and even 

function oddsAndEven() {
    for (i = 0; i < 101; i++) {
        if (i % 2 === 0) {
            console.log("even")
        } else if (i % 2 === 1) {
            console.log("odd")
        }
    }
}
oddsAndEven();

// extra credit lights toggle on and off
var toggledLights = [
    [9, 3, 4, 2], // i = 0
    [1, 1, 1, 1, 3], // i = 1
    [2, 5, 435, 4, 3] // i = 2
];

function lightsOnOff() {
    var lightState = "Off"
    for (var i = 0; i < toggledLights.length; i++) {
        for (var j = 0; j < toggledLights[i].length; j++) {
            lightState === "Off" ? lightState = "On" : lightState = "Off"
        }
        console.log("The light is " + lightState)
        lightState = "Off"
    }

}
lightsOnOff();