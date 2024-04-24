var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array of places and print its orignal order
var place = ["china", "brazil", "afganistan", "england"];
console.log("orignal order", place);
//print the array in alphabatical order without modifying the actual array list
console.log("alphabetical order:", __spreadArray([], place, true).sort());
//show that the array is still in orignal order 
console.log("orignal order:", place);
//print the array in reverse order
console.log("reverse alphabetical order:", __spreadArray([], place, true).sort().reverse());
//show that the array is still in orignal order 
console.log("orignal order:", place);
//change the orignal array order now
console.log("reverse order:", place.reverse());
//print the array to show that its back to its orignal order 
console.log("orignal order:", place.reverse());
//show that its order has been changed in alphabetical order now
console.log("alphabetical order:", place.sort());
//we have changed again the orignal array order now in reverse order again 
console.log("reverse alphabetical order:", place.reverse());
