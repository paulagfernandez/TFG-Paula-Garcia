var Erizo = require('./erizofc');
var newIo = require('socket.io-client');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var room;

var stream = Erizo.Stream(undefined, {stream: {audio:false, video:false, data: true}});

var serverUrl = "http://54.70.110.33:3001/";



var createToken = function(userName, role, callback) {

    var req = new XMLHttpRequest();
    var url = serverUrl + 'createToken/';
    var body = {username: userName, role: role};

    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            callback(req.responseText);
        }
    };

    req.open('POST', url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(body));
};


createToken("user", "presenter", function (token) {
 	console.log("TOKEN CREADO");
	console.log('TOKEN', token);

	room = Erizo.Room(newIo, undefined, undefined, {token: token});

	stream.init();

	room.addEventListener("room-connected", function(event) {
	  console.log("Connected!", event);

	  // coger stream de event
	  var stream1 = event.streams[0];
	  room.subscribe(stream1, {audio: false, video: false, data: true});
	  console.log('me he conectado');

	  stream.sendData('hola');

	  stream1.addEventListener("stream-data", function(evt){
		
		console.log('dato recibido');
		const fs = require('fs');
		fs.writeFile("../envios/base.txt",evt.msg.text);
		console.log('hecho');
		const {spawn} = require('child_process')

		const child = spawn('python3',['../yolo/analiza.py']);



		});



	});

	room.addEventListener("stream-added", function(event) {
	  console.log('stream added', event.stream.getID());

	});

	room.connect();
});
