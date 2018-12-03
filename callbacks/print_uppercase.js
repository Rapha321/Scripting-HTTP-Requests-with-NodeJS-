var getHTML = require('./http-functions1');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  let output = html.toUpperCase()
  console.log(output);
}

getHTML(requestOptions, printHTML);