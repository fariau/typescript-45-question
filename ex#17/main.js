//creating a guestlist array
var guestlist = ["arisha", "tasmiya", "ayesha", "umer"];
//message print for bigger table
console.log("good news ! we have found a bigger table for dinner");
//add more guest
guestlist.unshift("raza");
guestlist.splice(guestlist.length / 2, 0, "amna");
guestlist.push("rahima");
guestlist.forEach(function (list) { return console.log("dear ".concat(list, ", would you like to dinner with me")); });
console.log("unfortunately, i can only invite two guests to dinner with me");
//using while-loop to remove guests form the array until only two name remain
while (guestlist.length > 2) {
    var removedguest = guestlist.pop();
    console.log("sorry, ".concat(removedguest, " i cant invite you to dinner"));
}
guestlist.forEach(function (guest) {
    console.log("dear ".concat(guest, ", you are still  invited to dinner"));
});
guestlist.splice(0, guestlist.length);
console.log("empty list", guestlist);
