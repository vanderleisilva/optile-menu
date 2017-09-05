const express = require('express');
const app = express();
const fs = require('fs'); 
const upload = require('formidable');
const token = require('./env.js').token; 

const file = {
	menu : __dirname.replace('/server','') + '/public/menu/1.jpg',
	empty : __dirname.replace('/server','') + '/public/empty.png',
} 

app.use(require('cors')());

app.get("/menu", (request, response) => {
	fs.stat(file.menu, (err, stat) => {
		if(err == null) {
			response.sendFile(file.menu);
			return;
		} 

		response.sendFile(file.empty);  
	});
});

app.post("/menu", (request, response) => {
	var form = new upload.IncomingForm();

	form.parse(request, (err, fields, files) => {
		fs.rename(files.file.path, file.menu, err => {
			if (err) throw err;
			response.write('File uploaded and moved!');
			response.end();
		});
	});
});

const listener = app.listen(8080, () => {
	console.log('Your app is listening on port ' + listener.address().port);
	require('./slack')(file.menu, token);
});
