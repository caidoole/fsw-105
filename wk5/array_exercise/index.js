console.log("*************.filter()**************")
// .filter()
//#1
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function (num) {
        if (num >= 5)
            return num;
    });
    return result

}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//#2 
function evensOnly(arr) {
    const result = arr.filter(function (num) {
        if (num % 2 == 0)
            return num;
    });
    return result
}
console.log(evensOnly([3, 6, 8, 2, 9]));

//#3
function fiveCharatersOrFewerOnly(arr) {
    const result = arr.filter(function (str) {
        if (str.length <= 5)
            return str;
    });
    return result;

}
console.log(fiveCharatersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//#4
function peopleWhoBelongToTheIlluminati(arr) {
    const result = arr.filter(function (person) {
        if (person.member === true)
            return person;
    });
    return result;
}
console.log(peopleWhoBelongToTheIlluminati([{
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]));

//#5
function ofAge(arr) {
    const result = arr.filter(function (person) {
        if (person.age >= 18)
            return person
    });
    return result;
}
console.log(ofAge([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

console.log("************.map()*****************")
//.map
//#1
function doubleNumbers(arr) {
    const result = arr.map(function (num) {
        return num + num;
    });
    return result;
}
console.log(doubleNumbers([2, 5, 100]));

//#2
function stringItUp(arr) {
    const result = arr.map(function (num) {
        return num.toString();
    });
    return result;
}
console.log(stringItUp([2, 5, 100]));

//#3
function capitalizeNames(arr) {
    const result = arr.map(function (str) {
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
    });
    return result;

}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//#4
function namesOnly(arr) {
    const result = arr.map(function (person) {

        return person.name;
    });

    return result;

}
console.log(namesOnly([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 16
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

//#5 
function makeStrings(arr) {
    const result = arr.map(function (person) {
        if (person.age >= 18) {
            return person.name + " can go to The Matrix";
        } else
            return person.name + " is under age!!";
    });

    return result;
}
console.log(makeStrings([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 16
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }

]));

//#6
function readyToPutInTheDOM(arr) {
    const result = arr.map(function (person) {

        return "<h1>" + person.name + "</h1><h2>" + person.age + "</h2>";

    });

    return result;

}
console.log(readyToPutInTheDOM([{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 16
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

console.log("***********.reduce()*************")
// .reduce()
//#1
function total(arr) {
    const result = arr.reduce(function (finalAdditon, num) {
        finalAdditon = finalAdditon + num;
        return finalAdditon

    });
    return result
}
console.log(total([1, 2, 3]));

//#2
function stringConcat(arr) {
    const result = arr.reduce(function (finalString, num) {
        finalString = finalString + num.toString();
        return finalString;
    });
    return result

}
console.log(stringConcat([1, 2, 3]));

//#3--- dont just need to use .reduce()
function totalVotes(arr) {
    const result = arr.reduce(function (total, voters) {
        if (voters.voted) {
            total = total + 1;
        }
        return total;
    }, 0);
    return result;
}

var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];
console.log(totalVotes(voters));

//#4
function shoppingSpree(arr) {
    const result = arr.reduce(function (total, item) {
        total = total + item.price;
        return total;
    }, 0);
    return result;

}

var wishlist = [{
        title: "Tesla Model S",
        price: 90000
    },
    {
        title: "4 carat diamond ring",
        price: 45000
    },
    {
        title: "Fancy hacky Sack",
        price: 5
    },
    {
        title: "Gold fidgit Spinner",
        price: 2000
    },
    {
        title: "A second Tesla Modle S",
        price: 90000
    }
];
console.log(shoppingSpree(wishlist));

//#5- Array.concat() to help
function flatten(arr) {
    const result = arr.reduce(function (singleArray, item) {
        singleArray = singleArray.concat(item)
        return singleArray;
    });
    return result;

}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
console.log(flatten(arrays));

//#6 18-25, 26-35, 36-55 ranges, how many of each
var voters = [{
        name: 'Bob',
        age: 30,
        voted: true
    },
    {
        name: 'Jake',
        age: 32,
        voted: true
    },
    {
        name: 'Kate',
        age: 25,
        voted: false
    },
    {
        name: 'Sam',
        age: 20,
        voted: false
    },
    {
        name: 'Phil',
        age: 21,
        voted: true
    },
    {
        name: 'Ed',
        age: 55,
        voted: true
    },
    {
        name: 'Tami',
        age: 54,
        voted: true
    },
    {
        name: 'Mary',
        age: 31,
        voted: false
    },
    {
        name: 'Becky',
        age: 43,
        voted: false
    },
    {
        name: 'Joey',
        age: 41,
        voted: true
    },
    {
        name: 'Jeff',
        age: 30,
        voted: true
    },
    {
        name: 'Zack',
        age: 19,
        voted: false
    }
];

function voterResults(arr) {
    let totals = {
        youngVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        oldVotes: 0,
        olds: 0
    }
    const result = arr.reduce(function (totals, voter) {
        if (voter.age >= 18 && voter.age <= 25) {
            totals.youth = totals.youth + 1;
            if (voter.voted === true)
                totals.youngVotes = totals.youngVotes + 1;
        } else if (voter.age >= 26 && voter.age <= 35) {

            totals.mids = totals.mids + 1;
            if (voter.voted === true)
                totals.midVotes = totals.midVotes + 1;
        } else if (voter.age >= 36 && voter.age <= 55) {

            totals.olds = totals.olds + 1;
            if (voter.voted === true)
                totals.oldVotes = totals.oldVotes + 1;
        }
        return totals;
    }, totals);
    return result;

}
console.log(voterResults(voters));

console.log("*************.sort()***************")
//.sort()
//#1
function leastToGreatest(arr) {
    const numbers = arr.sort(function (a, b) {
        return a - b
    });
    return numbers;
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

// //#2
function greatestToLeast(arr) {
    const numbers = arr.sort(function (a, b) {
        return b - a
    });
    return numbers;
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//#3
function lengthSort(arr) {
    const strArray = arr.sort(function (a, b) {
        return a.length - b.length
    });
    return strArray;
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

// //#4
function alphabetical(arr) {

    const alpha = arr.sort();
    return alpha;

}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

// //#5
function byAge(arr) {
    const byAge = arr.sort(function (a, b) {
        return a.age - b.age
    });
    return byAge;
}
console.log(byAge([{
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]));

console.log("***********EXTRA CREDIT**************")
//EXTRA CREDIT!
function getWatchers() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var arr = JSON.parse(xhttp.response);
            const result = arr.reduce(function (watchers, responseData) {
                watchers = responseData.watchers_count;
                return watchers;
            }, 56);
            console.log(result);
        }
    }
    xhttp.open("GET", "https://api.github.com/users/caidoole/repos", true);
    xhttp.send();

}
getWatchers();