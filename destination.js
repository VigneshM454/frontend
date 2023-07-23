const pimg=document.getElementById('planetimg1');
const p=document.querySelectorAll('.planet');
const pname=document.getElementById('planetname');
const pdesc=document.getElementById('planetdesc');
const pdist=document.getElementById('planetdist');
const ptime=document.getElementById('planettime');
const imgarr=["    image-moon.png","    image-mars.png","    image-europa.png","    image-titan.png"];
//const namearr=[];
const descarr={
    0:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    1:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    2:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug  wintery cabin.",
    3:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
};
const distarr=['  384,400 km',' 225 mil. km','628 mil. km',' 1.6 bil. km'];
const timearr=['  3 days','9 months','3 years','  7 years'];
for(let i=0;i<p.length;i++){
    p[i].addEventListener('click',()=>{
        event.preventDefault();
        p.forEach((j)=>{
           // j.classList.remove('active');
            j.style.borderBottom='none'
        });
       // p[i].classList.add('active');
        pname.innerText=p[i].innerHTML;
        p[i].style.borderBottom="4px solid white";
        pdesc.innerHTML=descarr[i];
        pdist.innerHTML=distarr[i];
        pimg.src=imgarr[i];
        ptime.innerHTML=timearr[i];
    
    })
}