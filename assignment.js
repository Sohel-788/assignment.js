//feet to mile converter function
//feetToMile
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(52800);
console.log("This is feet to mile output:", result, "miles."); //You can input any of your desired values.

//woodCalculator
function woodCalculator(chair, table, cot) {
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var cotCount = cot * 5;
    var woodCount = chair + table + cot;
    return woodCount;
}
var totalWood = woodCalculator(2, 3, 4); //You can input any of your desired values.
console.log("Your wood is:", totalWood, "", "Cubic feet");

//brickCalculator
function brickCalculator(numberofFloor) {
    var firstTenFloor = 10;
    var tenToTwentyFloor;
    var moreThanTwentyFloor;
    if (numberofFloor <= 0) {
        return 'Number of floor must have be greater than zero'
    } else {
        if (numberofFloor <= 10) {
            firstTenFloor = numberofFloor;
            var result1 = firstTenFloor * 15 * 1000;
            return result1;
        } else if ((numberofFloor > 10) && (numberofFloor <= 20)) {
            tenToTwentyFloor = numberofFloor - firstTenFloor;
            var result2 = ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor * 12 * 1000));
            return result2;
        } else if (numberofFloor > 20) {
            var tenToTwentyFloor = 10;
            var moreThanTwentyFloor = numberofFloor - firstTenFloor - tenToTwentyFloor;
            var result3 = ((firstTenFloor * 15 * 1000) + (tenToTwentyFloor * 12 * 1000) + (moreThanTwentyFloor * 10 * 1000));
            return result3;
        }
    }
}
var totalBricks = brickCalculator(10); // You can input any of values here() except 0; 
console.log("You need total:", totalBricks, "bricks")

//tinyFriend
var friends = ["SOHEL", "SOHAG MIA", "SADIK KAKU", "ALTAF", "HASU APA", "ANIS", "ATAUR RAHMAN", "MONIR"];

function tinyFriend(friendsList) {
    var smallest = friends[0];
    for (i = 0; i < friends.length; i++) {
        var currentFriends = friendsList[i];
        if (currentFriends.length < smallest.length) {
            smallest = currentFriends;
        }
    }
    return smallest;
}
var smallestName = tinyFriend(friends);
console.log("The tiny friend according to the character is:", smallestName)