const express = require('express');
const app = express();
const fs = require('fs'); 

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

app.get("/menu", function (request, response) {
  var file = __dirname + '/public/menu/1.jpg'

  fs.stat(file, (err, stat) => {
    if(err == null) {
        response.sendFile(file);
		return;
    } 

  	response.sendFile(__dirname + '/public/empty.png');  
  });
});

app.post("/menu", function (request, response) {

});

const listener = app.listen(8080, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
