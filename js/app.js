//var userAge = 21;
//var is_subscribed = true;

var userAge = [16, 17, 18, 21, 14, 20, 13];
var is_subscribed = [true, false, true, false, true, false, true];


for (var counter = 0; counter < userAge.length; counter++) {
    console.log(userAge[counter]);
}



if (userAge[counter] >= 18 && is_subscribed[counter] != true) {
    console.log("User is 18 or older and subscribed!");
} else if (userAge[counter] <= 18 && is_subscribed[counter] != true) {
    console.log("User is under 18 and subscribed!");
} else if (userAge[counter] >= 18 && !is_subscribed[counter] == true) {
    console.log("User is 18 or older and not subscribed!");
} else if (userAge[counter] <= 18 && !is_subscribed[counter] == true) {
    console.log("User is under 18 and not subscribed!");
} else {
    console.log("There was an error");
}