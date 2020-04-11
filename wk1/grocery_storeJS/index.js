var shopper = {
    name: "Betty Grey",
    age: 56,
    hasCoupons: true,
    groceryCart: [
        "tomatoes",
        "chips",
        "cat food",
        "lemons",
        "teal couch coushions",
        "hobbit poster",
        "honey",
        "purple tabs",
    ],
    nameAndAge: function () {
        return "Name:  " + this.name + ", " + this.age;

    }

}

console.log(shopper.nameAndAge());
console.log(shopper.name + " has this as their first item: " + shopper.groceryCart[0]);
console.log("Does " + shopper.name + " have coupons?");
if(shopper.hasCoupons == true) {
    console.log("Yes");
} else {
    console.log("No")
}