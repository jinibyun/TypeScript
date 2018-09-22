var n = 1; // types are important on compile time. type is not converted to javascript
var n2 = 1; // any should be avoided
n2 = 123;
// built in type: either lower or upper case
// boolean, number, String, Array.....
var isWinter = false;
//var name: string = "abc";
var count = 345;
// array 
var names = ["John", "Rickon", "Jin"]; // only allow same type of item
var names3 = [1, 2, 3, 5]; // another way
var names2 = ["John", "Rickon", "Jin", 234]; // in order to have mixed data type
// enum
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
// function and retur type
function getName() {
    return "Hello";
}
function getName2() {
    console.log("Winter is coming!");
}
// functions are first class citizens, suppor the lmabda "fat arrow" syntax and use type inference
// The following are equivalent, the same signature will be infered by the  compiler, and same JavaScript will be emitted
var f1 = function (i) {
    return i * 1;
};
var f2 = function (i) {
    return i * i;
};
var f3 = function (i) { return i * i; };
var f4 = function (i) { return i * i; };
var f5 = function (i) { return i * i; };
//# sourceMappingURL=01Types.js.map