//bannar图调换
var lis = document.getElementById("fis_ul").getElementsByTagName("li");
var biaoti_li = document.getElementsByClassName("biaoti_li");
tyAll();
lis[0].style.opacity = "1";
biaoti_li[0].style.background = "red";
var a = 0;
var flag;
var Mid=setInterval(bannar, 2000);
function bannar() {
	flag=true;
	tyAll();
	lis[a].style.opacity = "1";
	biaoti_li[a].style.background = "red";
	a++;
	if (a > 3) {
		a = 0;
	}
}
function tyAll() {
	for (var i = 0; i < 4; i++) {
		lis[i].style.opacity = "0";
	}
	for (var i = 0; i < 4; i++) {
		biaoti_li[i].style.background = "rgba(0,0,0,.5)";
	}
}
function anNiu(a1) {
	clearInterval(Mid);
	tyAll();
	lis[a1].style.opacity = "1";
	biaoti_li[a1].style.background = "red";
	a = a1;
	Mid = setInterval(bannar, 2000);
}

function FisanNiu() {
	if(flag){
		--a;
		flag=false;
	}
	
	--a;
	if(a==-2){
		a=2;
	}
	if (a < 0) {
		a = 3;
	}
	tyAll();
	clearInterval(Mid);
	lis[a].style.opacity = "1";
	biaoti_li[a].style.background = "red";
	Mid = setInterval(bannar, 2000);
}
function EndanNiu() {
	if(flag){
		--a;
		flag=false;
	}
	++a;
	if(a>3){
		a=0;
	}
	tyAll();
	clearInterval(Mid);
	lis[a].style.opacity = "1";
	biaoti_li[a].style.background = "red";
	Mid = setInterval(bannar, 2000);
}
