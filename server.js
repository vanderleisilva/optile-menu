const express = require('express');
const app = express();
const fs = require('fs'); 
const upload = require('formidable');
const fileName = __dirname + '/public/menu/1.jpg';
const token = 'xoxb-237143336086-eY5wlMUuI970fynEknrWgSXb'; 

app.use(require('cors')());

app.get("/menu", (request, response) => {
	fs.stat(fileName, (err, stat) => {
		if(err == null) {
			response.sendFile(fileName);
			return;
		} 

		response.sendFile(__dirname + '/public/empty.png');  
	});
});

app.post("/menu", (request, response) => {
	var form = new upload.IncomingForm();

	form.parse(request, (err, fields, files) => {
		fs.rename(files.file.path, fileName, err => {
			if (err) throw err;
			response.write('File uploaded and moved!');
			response.end();
		});
	});
});

const listener = app.listen(8080, () => {
	console.log('Your app is listening on port ' + listener.address().port);
	require('./slack')(fileName, token);
});
