//creating a guestlist array
let guestlist =["arisha","tasmiya","ayesha","umer"];

//message print for bigger table
console.log("good news ! we have found a bigger table for dinner");

//add more guest
guestlist.unshift("raza");
guestlist.splice(guestlist.length / 2, 0, "amna");
guestlist.push("rahima")
guestlist.forEach(list => console.log(`dear ${list}, would you like to dinner with me`));
