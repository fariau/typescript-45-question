var guestlist = ["arisha", "tasmiya", "ayesha"];
var dontcome = guestlist[0];
console.log(dontcome, "nahi aasakti");
guestlist.splice(0, 1, "hassan");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
