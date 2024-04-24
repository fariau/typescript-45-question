function show_magicians(magician) {
    magician.forEach(name => console.log(name));
}
function make_great(magician: string[]){
   return magician.map(name => `the great ${name}`)
}
var magician_name = ["harry poter", "umer", "hassan"];

let copy_megician_name = magician_name.slice()

let copy_great_magician = make_great(copy_megician_name);
//orignal array
show_magicians(magician_name);
//copied
show_magicians(copy_great_magician);