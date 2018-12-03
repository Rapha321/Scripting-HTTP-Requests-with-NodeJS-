
function getAndPrintHTML (options, callback) {

  // while https is built-in to Node, it is a module, so it must be required
  var https = require('https');

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    let buffer = "";
    response.on('data', function (data) {
      buffer += data + '\n';
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      callback(buffer);
      // console.log('Chunk Received. Length:', buffer);
      // console.log('Response stream complete.');
    });

  });

}


function printHTML (html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getAndPrintHTML(requestOptions, printHTML);