var userAge = 21;
var is_subscribed = true;

console.log(userAge);
console.log(is_subscribed)

if (userAge >= 18 && is_subscribed) {
    console.log("User is 18 or older and subscribed!");
} else if (userAge <= 18 && is_subscribed) {
    console.log("User is under 18 and subscribed!");
} else if (userAge >= 18 && !is_subscribed) {
    console.log("User is 18 or older and not subscribed!");
} else if (userAge <= 18 && !is_subscribed) {
    console.log("User is under 18 and not subscribed!");
} else {
    console.log("There was an error");
}