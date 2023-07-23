const box=document.querySelectorAll('.box');
const cdesign=document.getElementById('cdesign');
const cname=document.getElementById('cname');
const cdesc=document.getElementById('cdesc');
const cimg=document.getElementById('ic2');
const designarr=['Flight Engineer','Commander','Mission Specialist',' Pilot'];
const namearr=['Anousheh Ansari',' Douglas Hurley','Mark Shuttleworth',' Victor Glover'];
const descarr={
    0:' Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
    1:' Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    2:'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    3:' Pilot on the first operational flight of the SpaceX Crew Dragon to the  International Space Station. Glover is a commander in the U.S. Navy where     he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
};
const imgarr=['  image-anousheh-ansari.png','  image-douglas-hurley.png','  image-mark-shuttleworth.png','  image-victor-glover.png'];

for(let i=0;i<box.length;i++){
    box[i].addEventListener('click',()=>{
    
        event.preventDefault();
        box.forEach((j)=>{
            j.style.cssText='background-color:grey';
        });
         box[i].style.cssText='background-color:white';
        cdesign.innerHTML=designarr[i];
        cname.innerHTML=namearr[i];
        cdesc.innerHTML=descarr[i];
        cimg.src=imgarr[i];
     })
}