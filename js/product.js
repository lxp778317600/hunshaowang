//手工琴效果
   var ul1=document.getElementsByClassName("ul1");
			var ul2_2=document.getElementsByClassName("ul2_2");
			var pbai=document.getElementsByClassName("pbai");
			fu(0);
		function fu(index){
			pub();
			if(ul1[index].style.height == "0px"){
			    ul1[index].style.height="175px";
			}
			else{
				ul1[index].style.height = "0px";
			}
			
			ul2_2[index].style.background="red";
			pbai[index].style.color="white";
		}
		function pub(){
			for(var i=0;i<ul1.length;i++){
				ul1[i].style.height="0px";
			}
			for(var i=0;i<ul2_2.length;i++){
				ul2_2[i].style.background="#DCDCDC";
			}
			for(var i=0;i<pbai.length;i++){
				pbai[i].style.color="gray";
			}
		}