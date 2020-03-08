var index1=document.getElementById('index_1');
var index_ul_1=document.getElementById('index_ul_1');
var jian1=document.getElementById('jian1');
var jian2=document.getElementById('jian2');
var lis=document.getElementById('index_ul_1').getElementsByTagName('li');
var qq=0;
var timer=null;
function dian(d){
	clearInterval(timer);
	qq=d;
	scrollShow();
}
function clear(){
			lis[0].className='index_li_1';
			lis[1].className='index_li_1';
			lis[2].className='index_li_1';
			lis[3].className='index_li_1';
			lis[4].className='index_li_1';
}
function scrollShow(){
	 timer=setInterval(function (){
		if(qq==0){
			clear();
			index_1.className='index_1';
			lis[0].className='index_li_2';
			qq++;
		}else if(qq==1){
			clear();
			index_1.className='index_2';
			lis[1].className='index_li_2';
			qq++;
		}else if(qq==2){
			clear();
			index_1.className='index_3';
			lis[2].className='index_li_2';
			qq++;
		}else if(qq==3){
			clear();
			index_1.className='index_4';
			lis[3].className='index_li_2';
			qq++;
		}else if(qq==4){
			clear();
			index_1.className='index_5';
			lis[4].className='index_li_2';
			qq=0;
		}
	},3000)
}
scrollShow();
