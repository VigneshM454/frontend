const box=document.querySelectorAll('.box');
const tname=document.getElementById('techname');
const tdesc=document.getElementById('techdesc');
const timg=document.getElementById('s1');
const namearr=['Launch vehicle',' Space capsule','Spaceport'];
const descarr={
    0:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    1:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    2:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
};

let imgarr;
//window.addEventListener('resize',()=>{
    function sizecheck(){
        if(window.innerWidth<900){
        //    alert('hi');
            s1.src='  image-launch-vehicle-landscape.jpg'
            imgarr=['  image-launch-vehicle-landscape.jpg','  image-space-capsule-landscape.jpg','  image-spaceport-landscape.jpg'];
        }
        else{
            s1.src='  image-launch-vehicle-portrait.jpg';
            imgarr=['  image-launch-vehicle-portrait.jpg','  image-space-capsule-portrait.jpg','  image-spaceport-portrait.jpg'];
        }
    }
    
//})
sizecheck();
window.addEventListener('load',sizecheck);
window.addEventListener('resize',sizecheck);

for(let i=0;i<box.length;i++){
    box[i].addEventListener('click',()=>{
       
        box.forEach((j)=>{
            j.style.cssText='background-color:transparent;border:2px solid white; color:white;';
        })
        box[i].style.cssText='background-color:white; color:black';
        tname.innerHTML=namearr[i];
        tdesc.innerHTML=descarr[i];
        timg.src=imgarr[i];
    })
}