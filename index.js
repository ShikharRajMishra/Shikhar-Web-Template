const allItems=document.querySelectorAll(".skill .skillset ul li a");
allItems.forEach(item=>
{item.addEventListener('click', function(e)
{
for(var i=0;i< allItems.length;i++){
allItems[i].classList.remove('active');
}
this.classList.add('active');
console.log("run");
});
});
// prev and next button
let num=0;
function Control(x){
num=num+(x);
Show(num);
}
function Show(){let allslides=document.querySelectorAll(".testimonial-card");
if(num>allslides.length-1){
num=0;
}
if(num<0){
num=allslides.length-1}
for(let Y of allslides){
Y.style.display="none"}
allslides[num].style.display="flex";
				}
Show();
//................display menu btn.................//

let icon=document.querySelector(".icon");
let menu=document.querySelector(".menu");
let nav=document.querySelector(".nav")
icon.addEventListener("click", show)
 function show(){
if (icon.innerHTML==="MENU"){
    icon.innerHTML="<b>"+"X"+"</b>";
    menu.style.display= "block"
    icon.style.background="red";
    icon.style.width="1.5em";
    icon.style.height="1.5em";
}
else{
    icon.innerHTML="MENU";
    menu.style.display= "none";
    icon.style.background="skyblue";
    icon.style.height="3em";
    icon.style.width="auto";
};

console.log("go"); } 