var current_users = ["User1", "faria", "admin", "user4", "user5"];
var new_users = ["user1", "user6", "user7", "Admin", "AYESHA"];
new_users.forEach(function (newuser) {
    if (current_users.some(function (currentuser) { return currentuser.toLowerCase() === newuser.toLowerCase(); })) {
        console.log("".concat(newuser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newuser, " is available."));
    }
});
