// Proxying a normal object
var target = {};
var handler = {
  get: function (receiver, mimi) {
    return `Hello, ${mimi}!`;
  }
};

var p = new Proxy(target, handler);

console.log(p.cambodia)
