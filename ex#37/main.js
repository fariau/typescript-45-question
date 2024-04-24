"use strict";
function make_shirt(size = "large", printmessage = "i love typescript") {
    console.log(`creating a ${size} shirt with the ${printmessage} print on it`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "i love javascript");
