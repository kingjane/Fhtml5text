chrome.runtime.sendMessage({greeting: "haha"},
  function(response) {
   		var u=response.farewell;
   		document.write('<video id="vi" width="1320" height="650" src="' + u + '" controls></video>');
  });

setTimeout(function() {
	document.body.style.backgroundImage = "url('http://a.hiphotos.baidu.com/album/w=575/sign=ecd10d78553d26972ed3085a60fab24f/d52a2834349b033b1788cc6811ce36d3d539bd7b.jpg?psign=1788cc6811ce36d3d539b6003af33a87e850352ac65c9943')";
	var vd = document.getElementsByTagName("video")[0];
	vd.playbackRate = 1.6;
	function keyDown(){
	switch(event.keyCode){
		case 37: vd.currentTime-=5;
		break;
		case 39: vd.currentTime+=5;
		break; 
		case 83: 
		var num=Number(prompt("What speed do you want? my dear guy"));
		vd.playbackRate = (num == 0 ? 1.6 : num);
		break;
		case 32: 
			if (vd.paused)
				vd.play();
			else
				vd.pause();
		break;
		default: 
		break;
	}
}
	document.onkeydown = keyDown; 
}, 1000);
