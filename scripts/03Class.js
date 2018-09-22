var StarkClass = /** @class */ (function () {
    // constuctor
    function StarkClass() {
        this.name = "Toronto";
        this.saying = "WinderFell!!";
    }
    StarkClass.prototype.hello = function (person) {
        console.log("Hello " + person);
    };
    StarkClass.castle = "WinderFell"; // static member
    return StarkClass;
}());
var ned = new StarkClass();
ned.saying = "winter is coming";
console.log(StarkClass.castle);
ned.hello("Jini");
//# sourceMappingURL=03Class.js.map