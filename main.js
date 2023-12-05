var a=document.getElementById("in")
var b=document.getElementById("img")
let handle=(e)=>{
	console.log(a.files[0]);
	b.innerHTML=`<img src="${URL.createObjectURL(a.files[0])}" alt="" style="padding:10px"/>`
}