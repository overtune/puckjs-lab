var https = require('https'),
	pem = require('pem'),
	path = require('path'),
	express = require('express');

pem.createCertificate({ days:1, selfSigned:true }, function (err, keys) {
	var app = express();

	app.use('/', express.static(path.resolve('public')));

	// app.get('/', function (req, res) {
	// 	res.sendFile(path.resolve('public/index.html'));
	// });

	https.createServer({ key: keys.serviceKey, cert: keys.certificate }, app).listen(443);
});
