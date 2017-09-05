const RtmClient = require('@slack/client').RtmClient;
const clientEvent = require('@slack/client').CLIENT_EVENTS;
const WebClient = require('@slack/client').WebClient;
const fs = require('fs'); 

module.exports = (fileName, token) => {

	const rtm = new RtmClient(token);
	const web = new WebClient(token);
	let channel;

	rtm.on(clientEvent.RTM.AUTHENTICATED, rtmStartData => {
		for (const c of rtmStartData.channels) {
			if (c.is_member && c.name ==='general') { channel = c.id }
		}
	});

	rtm.on(clientEvent.RTM.RTM_CONNECTION_OPENED, () => {
		rtm.sendMessage("Hello my friend, if you wanna know what we have for lunch, ask me: what's for lunch?", channel);
	});

	rtm.on(clientEvent.RTM.RAW_MESSAGE, message => {

		message = JSON.parse(message);

		if (message.text && message.text.toLowerCase() == "what's for lunch?") { 

			let streamOpts = {
				file: fs.createReadStream(fileName),
				channels: channel
			};

			web.files.upload(fileName, streamOpts, function(err, res) {
				if (err) {
					console.log('Error:', err);
				} 
			});
		}
	});

	rtm.start();
}
