// Proxying a normal object
var target = {};
var handler = {
  get: function (receiver, mimi) {
    return `Hello, ${mimi}!`;
  }
};

var p = new Proxy(target, handler);

//console.log(p.cambodia)

let { op: a, lhs: { op: b }, rhs: c } = { op: 1, lhs: { op: 2 }, rhs: 3 }


//console.log(`a = ${a} `)
let obj = { a: 1}
function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name: n, val: v }) {
    console.log(n, v)
    console.log(arguments[0])
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })
