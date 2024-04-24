function create_car(manufacturer: string, model : string, ...options){
    let car = {
        manufacture : manufacturer,
        model : model
    };
    options.forEach(option => {
        let[key, value] = option.split(":")
        car [key.trim()] = value.trim();
    })
    return car;
}
let mycar = create_car("toyota", "corrola", "color:black", "sunroof: true");
console.log(mycar);