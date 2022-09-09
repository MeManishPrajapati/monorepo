const express = require('express');
const PORT = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
	res.send("Yeah bro! I'm listening...");
});

app.listen(PORT, (err) => {
	if (err) {
		console.log('Error:', err);
	} else {
		console.log('Listening on ', PORT);
	}
});
