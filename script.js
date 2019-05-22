
/* globals Erizo */

/* eslint-env browser */
/* eslint-disable no-param-reassign, no-console */

const serverUrl = '/';
let localStream;
let room;
let recording;
let recordingId;

const getParameterByName = (name) => {
  // eslint-disable-next-line
  name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
  const regex = new RegExp(`[\\?&]${name}=([^&#]*)`);
  const results = regex.exec(location.searh);
  return results == null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// eslint-disable-next-line no-unused-vars
const testConnection = () => {
  window.location = '/connection_test.html';
};


// eslint-disable-next-line no-unused-vars
function startRecording() {
  if (room !== undefined) {
    if (!recording) {
      room.startRecording(localStream, (id) => {
        recording = true;
        recordingId = id;
      });
    } else {
      room.stopRecording(recordingId);
      recording = false;
    }
  }
}

let slideShowMode = false;

// eslint-disable-next-line no-unused-vars
function toggleSlideShowMode() {
  const streams = room.remoteStreams;
  const cb = (evt) => {
    console.log('SlideShowMode changed', evt);
  };
  slideShowMode = !slideShowMode;
  streams.forEach((stream) => {
    if (localStream.getID() !== stream.getID()) {
      console.log('Updating config');
      stream.updateConfiguration({ slideShowMode }, cb);
    }
  });
}

const startBasicExample = () => {
  document.getElementById('startButton').disabled = true;
  document.getElementById('slideShowMode').disabled = false;
  document.getElementById('startWarning').hidden = true;
  document.getElementById('startButton').hidden = true;
  recording = false;
  const screen = getParameterByName('screen');
  const roomName = getParameterByName('room') || 'basicExampleRoom';
  const singlePC = getParameterByName('singlePC') || false;
  const roomType = getParameterByName('type') || 'erizo';
  const audioOnly = getParameterByName('onlyAudio') || false;
  const mediaConfiguration = getParameterByName('mediaConfiguration') || 'default';
  const onlySubscribe = getParameterByName('onlySubscribe');
  const onlyPublish = getParameterByName('onlyPublish');
  console.log('Selected Room', roomName, 'of type', roomType);
  const config = { audio: true,
    video: !audioOnly,
    data: true,
    screen,
    videoSize: [640, 480, 640, 480],
    videoFrameRate: [10, 20] };
  // If we want screen sharing we have to put our Chrome extension id.
  // The default one only works in our Lynckia test servers.
  // If we are not using chrome, the creation of the stream will fail regardless.
  if (screen) {
    config.extensionId = 'okeephmleflklcdebijnponpabbmmgeo';
  }
  localStream = Erizo.Stream(config);
  const createToken = (roomData, callback) => {
    const req = new XMLHttpRequest();
    const url = `${serverUrl}createToken/`;

    req.onreadystatechange = () => {
      if (req.readyState === 4) {
        callback(req.responseText);
      }
    };

    req.open('POST', url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(roomData));
  };

  const roomData = { username: 'user',
    role: 'presenter',
    room: roomName,
    type: roomType,
    mediaConfiguration };

  createToken(roomData, (response) => {
    const token = response;
    console.log(token);
    room = Erizo.Room({ token });

    const subscribeToStreams = (streams) => {
      if (onlyPublish) {
        return;
      }
      const cb = (evt) => {
        console.log('Bandwidth Alert', evt.msg, evt.bandwidth);
      };

      streams.forEach((stream) => {
        if (localStream.getID() !== stream.getID()) {
          room.subscribe(stream, { slideShowMode, metadata: { type: 'subscriber' } });
          stream.addEventListener('bandwidth-alert', cb);
        }
      });
    };

    room.addEventListener('room-connected', (roomEvent) => {
      const options = { metadata: { type: 'publisher' } };
      const enableSimulcast = getParameterByName('simulcast');
      if (enableSimulcast) options.simulcast = { numSpatialLayers: 2 };
	console.log('estoy en room');
      if (!onlySubscribe) {
	console.log('estoy en .publish');
        room.publish(localStream, options);
      }
      subscribeToStreams(roomEvent.streams);
    });

    room.addEventListener('stream-subscribed', (streamEvent) => {
      const stream = streamEvent.stream;
      const div = document.createElement('div');
      div.setAttribute('style', 'width: 320px; height: 240px;float:left;');
      div.setAttribute('id', `test${stream.getID()}`);

      document.getElementById('videoContainer').appendChild(div);
      stream.show(`test${stream.getID()}`);
    });

    room.addEventListener('stream-added', (streamEvent) => {
      const streams = [];
      streams.push(streamEvent.stream);
      subscribeToStreams(streams);
      document.getElementById('recordButton').disabled = false;
    });

    room.addEventListener('stream-removed', (streamEvent) => {
      // Remove stream from DOM
      const stream = streamEvent.stream;
      if (stream.elementID !== undefined) {
        const element = document.getElementById(stream.elementID);
        document.getElementById('videoContainer').removeChild(element);
      }
    });

    room.addEventListener('stream-failed', () => {
      console.log('Stream Failed, act accordingly');
    });

    if (onlySubscribe) {
	console.log('estoy en onlysub');
      room.connect({ singlePC });
    } else {
      const div = document.createElement('div');
      div.setAttribute('style', 'width: 320px; height: 240px; float:left');
      div.setAttribute('id', 'myVideo');
      document.getElementById('videoContainer').appendChild(div);

      localStream.addEventListener('access-accepted', () => {
        room.connect({ singlePC });
    	console.log('estoy en .show');
	    localStream.show('myVideo');
	     var bitmap;
	     var canvas= document.createElement('canvas');
	     var context = canvas.getContext('2d');
//	      var imageObj = new Image();
//		var canvas2 = document.createElement('img');
//	     var ctx = document.getContext('2d');
		canvas.id = "testCanvas";
//		canvas2.id="prue";
	       document.body.appendChild(canvas);
//		document.body.appendChild(canvas2);

       setInterval(function() {

	     bitmap = localStream.getVideoFrame();
	  var imageObj = new Image();

		context.drawImage(imageObj,0,0);

		imageObj.src = './assets/captura.jpg';
		canvas.width = bitmap.width;
	        canvas.height = bitmap.height;

	        context.drawImage(imageObj,0,0);
//		 context.putImageData(bitmap,0,0);
	//	context.putImageData("../envios");
	    // var imagi = context.getImageData(0,0,canvas.width,canvas.height);
		console.log('jej');
		var pru1 = localStream.getVideoFrameURL();
	//	var item = pru1.replace(/^data:image\/(png|jpg);base64,/,"");
		//console.log('hay va',pru1);
		var res = pru1.split('base64,');
//		document.location.href=res;
//		console.log('los 2',res);
//		console.log('solo 1',res[1]);
//		const fs = require('fs')


	//     console.log(bitmap);
	       localStream.sendData({text:res[1],timestamp:12321321});

     }, 3000);


      });
      localStream.init();
    }
  });
};

window.onload = () => {
  const onlySubscribe = getParameterByName('onlySubscribe');
  const bypassStartButton = getParameterByName('noStart');
  if (!onlySubscribe || bypassStartButton) {
    startBasicExample();
  } else {
    document.getElementById('startButton').disabled = false;
  }
};
