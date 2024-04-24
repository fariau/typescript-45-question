//DIFINE VERIABLE
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banamna", "mango"];
//tesst for equality and inequality with string
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log("apple is notequal to apple");
console.log(apple != "apple");
//test using lowercase fuction
console.log("is APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("APPLE is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical testest
console.log("is ten is equal to twenty");
console.log(ten == twenty);
console.log("ten is notequal to twenty");
console.log(ten != twenty);
console.log("ten is greater then 0");
console.log(ten > 0);
console.log("twenty is less then ten");
console.log(twenty < ten);
//greater then equal to
console.log("ten is greater then equal to 5");
console.log(ten >= 5);
//lessthen oe equal to
console.log("twenty is lessthen oe equal to 10");
console.log(twenty <= 10);
//testest using "and" & "or" operators
//using "and"
console.log("twenty in not equal to 10 and twenty in greater then 10");
console.log(twenty != 10 && twenty > 10);
console.log("twenty in not equal to 10 and twenty in greater then 30");
console.log(twenty != 10 && twenty > 30);
//using "or"
console.log("twenty is gerater then 50 or 20 is equal to 20");
console.log(twenty > 50 || 20 == 20);
console.log("twenty is gerater then 50 or 20 is not equal to 20");
console.log(twenty > 50 || 20 != 20);
//test whether an item is include in array
console.log("is apple include in my fruit array");
console.log(fruits.includes("apple"));
//not include
console.log("is apple not include in my fruit array");
console.log(!fruits.includes("apple"));
