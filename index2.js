const btn=document.getElementsByClassName('btn')[0];
const modal=document.getElementById('mymodal');
const modalcontent=document.getElementsByClassName('modal-content')[0];
const close=document.getElementById('close');
const windowWidth = window.innerWidth;
const triangle=document.getElementsByClassName('bgpentagon')[0];
const rockdiv=document.getElementById('rock');
const scissordiv=document.getElementById('scissor');
const paperdiv=document.getElementById('paper');
const lizarddiv=document.getElementById('lizard');
const spockdiv=document.getElementById('spock');
const step2=document.getElementsByClassName('step2')[0];
const pick1=document.getElementsByClassName('pick1')[0];
const pick2=document.getElementsByClassName('pick2')[0];
const result=document.getElementsByClassName('result')[0];
const divarr=[rockdiv,scissordiv,paperdiv,lizarddiv,spockdiv];
const imgarr=[' icon-rock.svg',' icon-scissors.svg',' icon-paper.svg'," icon-lizard.svg" ," icon-spock.svg"];
const h1=document.getElementById('h1');
const score=document.getElementById('score');
var score1=parseInt(score.innerHTML,10);
let varstyle1,varstyle2;
const play=document.getElementById('play');
    for (let j = 0; j < divarr.length; j++) {
        //  const element = img[i];
        divarr[j].addEventListener('click',()=>{
            triangle.style.display='none';
            step2.style.display='block';
            let x=Math.floor((Math.random()*10)%5);
           pick1.style.backgroundImage = `url('${imgarr[j]}')`;
           pick1.style.zIndex='3';
           varstyle1=getComputedStyle(divarr[j]);
           pick1.style.border=varstyle1.border;
           
           setTimeout(() => {
            pick2.style.backgroundImage=`url('${imgarr[x]}')`;
            pick2.style.backgroundColor='white';
            varstyle2=getComputedStyle(divarr[x]);
            pick2.style.border=varstyle2.border; 
           }, 3000);
    
           setTimeout(()=>{
            let text;
            if(x===j){
                text='YOU DRAWN';
            }
            else{
                if(j===0){//rock
                    
                    if(x===1){//scissor
                        text='YOU WIN';
                        score1+=2;
                    }
                    else if(x===2){//paper
                        text='YOU LOOSE';
                        score1-=1;
                    }
                    else if(x===3){//lizard
                        text='YOU WIN';
                        score1+=2;
                    }
                    else{//spock
                        text='YOU LOOSE';
                        score1-=1;
                    }
                }
                else if(j===1){//scissor
                    if(x===0){//rock
                        text='YOU LOOSE';
                        score1-=1;
                    }
                    else if(x===2){//paper
                        text='YOU WIN';
                        score1+=2;
                    }
                    else if(x===3){//lizard
                        text='YOU WIN';
                        score1+=2;
                    }
                    else{//spock
                        text='YOU LOOSE';
                        score1-=1;
                    }
                }
                else if(j===2){//paper
                    if(x===0){//rock
                        text='YOU WIN';
                        score1+=2;
                    }
                    else if(x===1){//scissor
                        text='YOU LOOSE';
                        score1-=1;
                    }
                    else if(x===3){//lizard
                        text='YOU LOOSE';
                        score1-=1;
                    }
                    else{//spock
                        text='YOU WIN';
                        score1+=2;
                    }
                }
                else if(j===3){//lizard
                    if(x===0){//rock
                        text='YOU LOOSE';
                        score1-=1;
                    }
                    else if(x===1){//scissor
                        text='YOU LOOSE';
                        score1-=1;
                    }
                    else if(x===2){//paper
                        text='YOU WIN';
                        score1+=2;
                    }
                    else{//spock
                        text='YOU WIN';
                        score1+=2;
                    }
                }
                else{//spock
                    if(x===0){//rock
                        text='YOU WIN';
                        score1+=2;
                    }
                    else if(x===1){//scissor
                        text='YOU WIN';
                        score1+=2;
                    }
                    else if(x===2){//paper
                        text='YOU LOOSE';
                        score1-=1;
                    }
                    else{//lizard
                        text='YOU LOOSE';
                        score1-=1;
                    }
                    
                }
            }
             
            if (text === 'YOU LOOSE') {
               // pick2.style.boxShadow = '0 0 0 10px rgba(0, 0, 191, 0.9),0 0 0 20px rgba(51, 51, 192, 0.7),0 0 0 30px rgba(0, 0, 191, 0.5);';
               pick2.style='box-shadow:rgba(31, 55, 86, 0.5) 0px 0px 10px 33px, rgb(59 72 89 / 59%) 0px 0px 0px 70px, rgba(31, 55, 86, 0.5) 0px 0px 0px 120px;';  
               if(windowWidth<=400){
                pick2.style='box-shadow:rgba(31, 55, 86, 0.5) 0px 0px 10px 18px, rgb(59 72 89 / 59%) 0px 0px 0px 30px, rgba(31, 55, 86, 0.5) 0px 0px 0px 80px';
             }              
             pick2.style.backgroundImage=`url('${imgarr[x]}')`;
              pick2.style.backgroundColor='white';
              pick2.style.border=varstyle2.border; 

            } else {
              //  pick1.style.boxShadow = '0 0 0 10px rgba(0, 0, 191, 0.9),0 0 0 20px rgba(51, 51, 192, 0.7),0 0 0 30px rgba(0, 0, 191, 0.5);';
              pick1.style='box-shadow:rgba(31, 55, 86, 0.5) 0px 0px 10px 33px, rgb(59 72 89 / 59%) 0px 0px 0px 70px, rgba(31, 55, 86, 0.5) 0px 0px 0px 120px';
              if(windowWidth<=400){
                 pick1.style='box-shadow:rgba(31, 55, 86, 0.5) 0px 0px 10px 18px, rgb(59 72 89 / 59%) 0px 0px 0px 30px, rgba(31, 55, 86, 0.5) 0px 0px 0px 80px';
              }               
               pick1.style.backgroundImage = `url('${imgarr[j]}')`;
                pick1.style.backgroundColor='white';
                pick1.style.border=varstyle1.border; 
                ;
            }
              
            score.innerHTML= score1;
            result.style='display:flex';
            h1.innerText=text;
        },5000);
        })
      }
    
function playagain(){
    triangle.style.display='block';
    step2.style.display='none';
  //  pick2.style.backgroundImage='none';
  //  pick1.style.backgroundImage='none';
    pick1.style='box-shadow:none;';
    pick2.style='box-shadow:none;';
    result.style.display='none'
    h1.innerHTML='';
}

function show(){
    modal.style.display='flex';
}
close.addEventListener('click',()=>{
    modal.style='display:none;';
})