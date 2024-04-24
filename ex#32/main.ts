let current_users: string[] = ["User1", "faria", "admin", "user4", "user5"];
let new_users = ["user1", "user6", "user7", "Admin", "AYESHA"];

new_users.forEach(newuser => {
    if(current_users.some(currentuser => currentuser.toLowerCase()=== newuser.toLowerCase())){
        console.log(`${newuser} will need to enter a new username.`);
    } else {
        console.log(`${newuser} is available.`);
    }
});