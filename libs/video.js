window.onload=function (){
	var video_video=document.getElementsByClassName('video_video');
	var video_bg=document.getElementsByClassName('video_bg');
	var video_bg_1_r=document.getElementsByClassName('video_bg_1_r');
	var video=document.getElementsByClassName('video');
	console.log(video_bg)
	for(var i=0;i<video_video.length;i++){
	video_video[i].onclick=function (){
			for(var j=0;j<video_video.length;j++){
				if(this==video_video[j]){
					video_bg[j].style.visibility = "visible";
				}
			}
		}
	}
	for(var i=0;i<video_bg_1_r.length;i++){
	video_bg_1_r[i].onclick=function (){
			for(var j=0;j<video_bg_1_r.length;j++){
				if(this==video_bg_1_r[j]){
					video_bg[j].style.visibility = "hidden";
					video[j].pause();
				}
			}
		}
	}
}