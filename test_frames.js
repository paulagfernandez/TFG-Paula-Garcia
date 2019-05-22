var Erizo = require('./erizofc');
var newIo = require('socket.io-client');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var room;

var stream = Erizo.Stream(undefined, {stream: {audio:false, video:false, data: true}});

var serverUrl = "http://54.70.110.33:3001/";

function decode_base64(base64str , filename){

  var buf = Buffer.from(base64str,'base64');
	const fs = require('fs');
  fs.writeFile("../hola.png"), buf, function(error){
    if(error){
      throw error;
    }else{
      console.log('File created from base64 string!');
      return true;
    }
  };

}

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
		//  console.log('Received data ', evt.msg, 'from stream ');
		// procesar el frame
		console.log('dato recibido');
//		console.log(evt.msg);
//		var canvas = document.createElement('canvas');
//		canvas.putImageData(evt.msg,0,0);
//		var image = new Image();
//		image.src = evt.msg;
		//image.src=canvas.toDataURL("../yolo/images/hey.png");


		const fs = require('fs');
//		var PNG = require('pngjs2').PNG;
//		var img_data = Uint8ClampedArray.from(evt.msg);
//		var img_png = new PNG({width: 16, height: 16});
//		console.log(evt.msg[0]);
//		console.log(img_data);
//		console.log(evt.msg[1][1]);
//		img_png.data = Buffer.from(img_data);
//		img_png.pack().pipe(fs.createWriteStream('foto.png'));
//		console.log(evt.msg.text);
//		decode_base64(evt.msg,'holi.png')
		fs.writeFile("../envios/base.txt",evt.msg.text);
		console.log('hecho');
		const {spawn} = require('child_process')
//		const child = spawn('python3 ../yolo/yolo.py --i ../yolo/images/soccer.jpg --yolo yolo-coco ');
		const child = spawn('python3',['../yolo/analiza.py']);
//		child.stdout.on('data',(data)=>{console.log('eso \n ${data}');});


		});



	});

	room.addEventListener("stream-added", function(event) {
	  console.log('stream added', event.stream.getID());

	});

	room.connect();
});
