const express = require("express");
const path = require('path');
const app = express();
const PORTNO = 3000;

// ** Required Middlewate
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true}));

//*** Routes
/*
app.get("/search", (req, res) {
  const keyword = req.query.keyword || '';
	res.send(`Response from localhost:${PORTNO}/`);
});
*/
app.get('/search', function(req, res) {
	const keyword = req.query.keyword || '';
	res.send(`<p>You searched for: <strong>${keyword}</strong></p>`);
});

app.post('/register', function(req, res) {
	const username = req.body.username;
	const email = req.body.email;
	res.send(`<h1>Registration Successful!</h1><br><p>Username: ${username}</p><br><p>Email: ${email}</p>`);
});

app.listen(PORTNO, function() {
  console.log(`Listening on Port: ${PORTNO}`);
});
