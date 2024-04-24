function make_sandwich(...items : string[]){
    console.log("\nmaking a sandwish with the following items:\n")
    items.forEach(singleitems => console.log(singleitems));
    console.log("now enjoy sandwish");
}
make_sandwich("chicken", "cheese", "mayo", "egg");
make_sandwich("bread", "butter", "egg");
make_sandwich("bread", "cheese", "chicken", "tomato", "mayo");