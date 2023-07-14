const num=document.getElementsByClassName('nh')[0];
const btn=document.getElementById('btn');
const unread=document.getElementsByClassName('unread');
const box1=document.getElementById('box');
const box=document.getElementsByClassName('box');
const dot=document.getElementsByClassName('dot');
const option=document.getElementsByClassName('option')[0];
const ip=document.getElementById('ip');
const read=document.getElementById('read');
const delet=document.getElementById('delete');
const reply=document.getElementById('reply');
let close=document.getElementById('close');
let mybox =document.getElementById('mybox');
const send=document.getElementById('send')
let j=0;
for (let i = 0; i < unread.length; i++) {
    //const element = array[i];
    j++;
}
//console.log(j)
num.innerHTML=j;
console.log(unread.length)
btn.addEventListener('click',()=>{
   // alert('hi');
   for (let i = 0; i < box.length; i++) {
    //const element = array[i];
        if(box[i].classList.contains('unread')){
            box[i].classList.remove('unread');
            console.log('hi')
            dot[i].style.display='none';

        }
    }
     j=0;
    num.innerHTML=j;
})

for(let i=0;i<box.length; i++){
    box[i].addEventListener('click',()=>{
       // box[i].classList.add('option');
       option.style.display='block';
       option.style.cursor='pointer';
       read.onclick=function(){
            box[i].classList.remove('unread');
            dot[i].style.display='none';
        }
        delet.onclick=function(){
           // box[i].style.display='none';
          box[i].remove();
        }
        reply.onclick=function(){
            mybox.style.display='block';
            
            send.onclick=function(){
              let input=ip.value;
              if(input===''){
                alert('cant send empty message')
              }
              
              else{
                console.log(input);
                const newdiv=document.createElement('div');
                const newcont=document.createTextNode(input);
                newdiv.appendChild(newcont);
                const newimg=document.createElement('img');
                newimg.src='circle-user-solid.svg';
                newimg.style.cssText='height:50px; width:50px;';
                newdiv.appendChild(newimg);
                newdiv.classList.add('myrep');
                box[i].parentNode.insertBefore(newdiv,box[i+1]);
              }
            }

            
        }
          //    read.onclick=box[i].classList.remove('unread');         -> it returns undecided things dont use it
       close.addEventListener('click',()=>{
            option.style.display='none';
        })
    })
}
