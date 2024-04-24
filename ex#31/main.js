var username = [];
if (username.length === 0) {
    console.log("we need to find some users!");
}
else {
    username.forEach(function (usersname) {
        if (usersname === "admin") {
            console.log("hellow admin, would you like to see a status report?");
        }
        else {
            console.log("hello ".concat(usersname, ", thank you for logging in again."));
        }
    });
}
