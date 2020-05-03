var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = [ "carrot", "tomato", "pepper", "lettuce"];

//#1 - remove last 
function arrayExercise1(){
    vegetables.pop();
    console.log(vegetables)
}
arrayExercise1()

//#2 -remove first
function arrayExercise2(){
    fruit.shift()
    console.log(fruit)
}
arrayExercise2()

//#3- index of orange
function arrayExercise3(){
   result = fruit.indexOf("orange")
   console.log(result)
}
arrayExercise3()

//#4- add number from #3 to end of fruit
    function arrayExercise4(){
        result = fruit.push(1)
        console.log(fruit)
    }
    arrayExercise4()

//#5- length property to find the length of veg array
    function arrayExercise5(){
        results = vegetables.length
        console.log(results)
    }
    arrayExercise5()

//#6- add number from #5 to end of veg array
function arrayExercise6(){
    result = vegetables.push( 3)
    console.log(vegetables)
}
arrayExercise6()

//#7- put the two arrays together, fruit first, array name "food"
       var food = fruit.concat(vegetables)
        console.log(food)
   

//#8- remove two elements starting at index 4
        function arrayExercise8(){
        result = food.splice( 4, 2 )
        console.log(food)
    }
   arrayExercise8()

//#9- reverse your array
    function arrayExercise9(){
        result = food.reverse()
        console.log(food)
    }
    arrayExercise9()

//#10- turn array into string and return it
    function arrayExercise0(){
    result = food.join(  "," + " " )
    console.log(result)  
   }
  arrayExercise0()

// CORRECT ANSWER WILL BE = 3, PEPPER, 1, WATERMELON, ORANGE, APPLE