var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});
//pllay button//
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});
//pause button//
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});
//slow down//
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=.9;
	console.log("The speed is "+video.playbackRate);
});
//speed up//
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=.9;
	console.log("The speed is "+video.playbackRate);
});
//skip button//
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 5) {
		video.currentTime += 5;
	}
	else{
		video.currentTime = 0;
		console.log("Back to the beginning")
	}
	console.log(video.duration)
	console.log("Current location " + video.currentTime);
	video.play();
});
//mute button//
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
	}
	else{
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});
//volume slider//
document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value/100;
	volume.innerHTML = this.value + "%"
	console.log(video.volume);
});
//old school//
document.querySelector("#old").addEventListener("click", graycolor() {
});

function graycolor() {
	console.log("Grayscale")
}

//original//
document.querySelector("#original").addEventListener("click", originalcolor() {
});

function originalcolor() {
	console.log("Color")
}
