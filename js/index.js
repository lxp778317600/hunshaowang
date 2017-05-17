//图片移动移出自动切换
var Mid;
var num = 0;
var flag2 = true;
var arr = [0, -218, -433];
var mar1 = document.getElementById("mar1");
var aa1=document.getElementsByClassName("aa1");aa1[0].style.color="red";
Mid = setInterval(Show, 2000);

function Show() {
	mar1.style.top = arr[num] + "px";
	aa1[num].style.color="red";
	console.log(flag);
	if (flag2) {
		down();
	} else {
		up();
	}
}

function down() {
	num++;
	if (num == 2){
		flag2 = false;
	}
}
function up() {
	--num;
	if (num == 0) {
		flag2 = true;
	}
}
function over_(index) {
	num = index;
	clearInterval(Mid);
	var mar1 = document.getElementById("mar1");
	mar1.style.top = arr[index] + "px";
}

function out_(dd){
	if(dd==0){
	flag2=true;
	num=dd+1;
	}
	else{flag2=false;
	  num=dd-1;
	}
	
	Mid = setInterval(Show, 2000);
}