"use strict";
function toUpperCase(str) {
  return str.toUpperCase();
}
let number = 5;
let template =
`<h1>${toUpperCase('radin reth')} : This is heading, ${number}</h1>
<p>This is paragraph.</p>`;

document.getElementById('template').innerHTML = template;


var promise = new Promise(function(resolve, reject) {
  var xml = new XMLHTTPRequest();
  xml.open('get', 'url');
  xml.reload = function(response) {
    resolve(response)
  }
})
