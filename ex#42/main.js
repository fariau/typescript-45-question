function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "the great ".concat(name); });
}
var magician_name = ["harry poter", "umer", "hassan"];
var great_magician = make_great(magician_name);
show_magicians(great_magician);
