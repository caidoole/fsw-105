//Preliminaries//

var result = '';
if( 5 > 3){
  result = "is greater than";
};

console.log(result);


var cat= {
  length: 3,
  color: "orange"
}

var dog = {
  length: 15,
  color: "brown"
}

if (cat.length === 3){
  result = "is the length";
}

console.log(result)

if (cat === dog){
  result="equal"  
}else{
    result="not the same"
}

console.log(result)


// //Bronze//

var person = {
    name:"Bobby",
    age: 12
} 

  if(person.age >=18){
  result = person.name + " can go to the movie"
}else{
  result =  person.name + " can not go to the movie"
}
  console.log(result)

if (person.name.startsWith("B")){
  result= person.name + " can go to the movie"

}else{
  result = person.name + " can not go to the movie"
}
console.log(result)

if(person.name. startsWith("B") && person.age >= 18){
  result =  person.name + " can go to the movie"
}else{
  result =  person.name + " can not go to the movie"

}
console.log(result)


// //Silver//

if(1 === 1){
  result = "strict"

  console.log(result)

}if (1 === "1") {
  result = "abstract"
  
} else {
  result = "not equal at all"
}

if(1 <= 2 && 2 === 4){
  result = "yes"
}else{ result = "no"}

console.log(result)


//Extra Credit//

// function getSomething(){
// return (condition ? 'truthy' : 'falsy')
// }

function getSomething(){
return ((1 !== "1") ? "abstract" : "not equal at all" )
}

console.log(getSomething());


//Gold//
var string = "dog";

if (string.match(dog)){
  result = "true" 
}else{ result = "not true"}

console.log(result)

if (typeof variable === "boolean"){
  result = "true"
}

console.log( result)

if (typeof (variable) !== 'undefined'){
result = "defined"
}else{ result = "defined"}

console.log(result)

var s = 6
if(s > 12){
  result = "true"
}else{ result = "null"}

console.log(result)

var c = 1
if(c >.17){
  result = "true"
}else{result = "null"}

console.log (result)

var d = 45
if ( d < 16 ){
  result = "true"
}else {result = "null"}

console.log (result)



var myNum = 10;

function oddOrEven(myNum){
  result = ((myNum%2 === 0)  ? "even" : "odd")
  return result;
}
console.log(oddOrEven(myNum))

// if( myNum%2 == 0 ){
//   result ="even"
// }else{result = "odd"}

// console.log(result)
