//!if else statements are not practical
//!do this instead
let age = 16;
console.log(age);

//*if (age === 16) {let name = "SMT"};
//*this will return {false} if the first statement is false
let name = age === 16 && "SMT";
//? let name = age !== 16 || "SMT"; this is the same?
console.log(name);

//*if (age !== 16) {let friendCount = 100};
//*will return {true} if the first statement is true
let friendCount = age === 16 || 100;
//? let friendCount = age !== 16 && 100; this is the same?
console.log(friendCount);

//*if (age === 16) {let smth = "wow"} else {let smth = "what"};
let smth = age === 16 ? "wow" : "what";
console.log(smth);