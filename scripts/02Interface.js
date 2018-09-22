function printName(stark) {
    console.log("name: " + stark.name + " age: " + stark.age + " address: " + stark.address);
}
// make it madatory parameter type and number: By doing it, prevent undefined error on runtime
// make javascript function more reliable
printName({ name: "Embedded", age: 11 });
printName({ name: "Joe", age: 21 });
// object that implements the "Person2" interface can be treated as a Person2
var p = { name: "Bobby", move: function () { } };
var validPerson = { name: "Bobby", age: 33, move: function () { } };
// parameter types are only important
var mySearch;
mySearch = function (src, sub) {
    return src.search(sub) != -1;
};
//# sourceMappingURL=02Interface.js.map