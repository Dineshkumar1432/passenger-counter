var cnt=document.getElementById("count");
var saveel=document.getElementById("saver");
var count=0;
function increment()
{
	count+=1;
	cnt.innerHTML=count;
}
function save(){
	/* localStorage.setItem("count" , count);
	window.alert("passenger count saved successfully");
	var a=localStorage.getItem("count");
	alert("the count is  "+a); */
	var cnt=count+"-";
	saveel.innerHTML+=cnt;
}



