function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
function make_great(magician: string[]){
   return magician.map(name => `the great ${name}`)
}
var magician_name = ["harry poter", "umer", "hassan"];

let great_magician = make_great(magician_name);
show_magicians(great_magician);