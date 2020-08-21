//var userAge = 21;
//var is_subscribed = true;

var users = ["18", "19"];
var is_subscribed = ["true", "false"];
var arrayLength = users.length;

for (var counter = 0; counter < arrayLength; counter++) {
    console.log(users[counter]);
}

console.log(users);
console.log(is_subscribed)

if (users >= 18 && is_subscribed) {
    console.log("User is 18 or older and subscribed!");
} else if (users <= 18 && is_subscribed) {
    console.log("User is under 18 and subscribed!");
} else if (users >= 18 && !is_subscribed) {
    console.log("User is 18 or older and not subscribed!");
} else if (users <= 18 && !is_subscribed) {
    console.log("User is under 18 and not subscribed!");
} else {
    console.log("There was an error");
}