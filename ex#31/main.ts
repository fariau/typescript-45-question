let username: string[] = [];
if (username.length === 0){
    console.log("we need to find some users!");
} else{
    username.forEach(usersname => {
        if (usersname === "admin"){
            console.log("hellow admin, would you like to see a status report?");
        } else {
            console.log(`hello ${usersname}, thank you for logging in again.`);
        }
    });
}