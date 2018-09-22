/// <reference path="05Module.ts" />
// NOTE: even if it compiles successfully, on running util.js it throw exception
// solution: when compile, it should compile together with --out parameter
// tsc Util.ts 05Module.ts --out Util.js    then execute Util.js 
// ?? how to make it into tsconfig.json for combining two files......
var use = new Utility.Useful();
console.log(use.timesTwo(9));
//# sourceMappingURL=Util.js.map