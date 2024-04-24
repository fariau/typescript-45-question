//creating a guestlist array
var guestlist = ["arisha", "tasmiya", "ayesha", "umer"];
//message print for bigger table
console.log("good news ! we have found a bigger table for dinner");
//add more guest
guestlist.unshift("raza");
guestlist.splice(guestlist.length / 2, 0, "amna");
guestlist.push("rahima");
guestlist.forEach(function (list) { return console.log("dear ".concat(list, ", would you like to dinner with me")); });
