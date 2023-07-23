const list=document.getElementById('list');
const clos=document.getElementById('close');
const ul=document.getElementById('ul');
const anchor=ul.querySelectorAll('#ul li a');

for(let i=0;i<anchor.length;i++){
  anchor[i].addEventListener('click',()=>{
    //event.preventDefault();
    anchor.forEach((j)=>{
      j.classList.remove('active');
    });
       anchor[i].classList.add('active');
      //anchor.classList.add('active');
    
  })
}
  
function show(){
   list.style.display='flex'; 
   ul.style.display='flex';
    clos.style.display='flex';
}
clos.addEventListener('click',()=>{
    list.style.display='none';
  /*  ul.style.display='none'*/
})