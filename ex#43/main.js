function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "the great ".concat(name); });
}
var magician_name = ["harry poter", "umer", "hassan"];
var copy_megician_name = magician_name.slice();
var copy_great_magician = make_great(copy_megician_name);
show_magicians(magician_name);
show_magicians(copy_great_magician);
