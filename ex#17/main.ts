//creating a guestlist array
let guestlist =["arisha","tasmiya","ayesha","umer"];

//message print for bigger table
console.log("good news ! we have found a bigger table for dinner");

//add more guest
guestlist.unshift("raza");
guestlist.splice(guestlist.length / 2, 0, "amna");
guestlist.push("rahima")

guestlist.forEach(list => console.log(`dear ${list}, would you like to dinner with me`));
console.log("unfortunately, i can only invite two guests to dinner with me");
//using while-loop to remove guests form the array until only two name remain
while(guestlist.length > 2){
    let removedguest = guestlist.pop();
    console.log(`sorry, ${removedguest} i cant invite you to dinner`);
}
guestlist.forEach(guest =>{
    console.log(`dear ${guest}, you are still  invited to dinner`)});
guestlist.splice(0, guestlist.length);
console.log("empty list",guestlist);