// function foo() {
//     // "use strict";
//     console.log(this.a);
// }
// var obj = {
//     a : 2,
//     foo : foo
// };
// obj.foo();

function baz() {
    console.log("baz");
    bar();
}
function bar() {
    console.log("bar");
    foo();
}
function foo() {
    console.log("foo");
}
baz();