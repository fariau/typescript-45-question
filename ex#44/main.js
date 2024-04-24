function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nmaking a sandwish with the following items:\n");
    items.forEach(function (singleitems) { return console.log(singleitems); });
    console.log("now enjoy sandwish");
}
make_sandwich("chicken", "cheese", "mayo", "egg");
make_sandwich("bread", "butter", "egg");
make_sandwich("bread", "cheese", "chicken", "tomato", "mayo");
