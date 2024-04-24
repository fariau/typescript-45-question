let guestlist =["arisha","tasmiya","ayesha"];
let dontcome = guestlist [0];
console.log(dontcome, "nahi aasakti");
guestlist.splice(0,1, "hassan");
guestlist.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));