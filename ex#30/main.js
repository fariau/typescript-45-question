var usersname = ["admin", "user1", "user2", "user3", "user4"];
usersname.forEach(function (usersname) {
    if (usersname === "admin") {
        console.log("hellow admin, would you like to see a status report?");
    }
    else {
        console.log("hello ".concat(usersname, ", thank you for logging in again."));
    }
});
