//number
const one=document.getElementById('1').value;
const two=document.getElementById('2').value;
//const sum=Number(one.value);
const three=document.getElementById('3').value;
const four = document.getElementById('4').value;
const five = document.getElementById('5').value;
const six  = document.getElementById('6').value;
const seven = document.getElementById('7').value;
const eight = document.getElementById('8').value;
const nine = document.getElementById('9').value;
const zero = document.getElementById('0').value;
//operations
const add = document.getElementById('+');
const dif = document.getElementById('-');
const mul = document.getElementById('x');
const div = document.getElementById('/');

const pt = document.getElementById('pt');
const equal = document.getElementById('equal');
const backspace=document.getElementById('backspace');
const clear=document.getElementById('clear');

const display=document.getElementsByClassName('display')[0];

const buttons=document.getElementsByTagName('button');
for(var i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
        //display.innerHTML='0';
        const expr=display.innerHTML;
        console.log(this.className)
 
        if(this.classList.contains('oper')|| this.classList.contains('num')){
            display.innerHTML+=this.value;
        
        }
        else{
           if(this.id==='equal'){
            try{
                display.innerHTML=eval(expr);
            }
            catch(error){
               display.innerHTML='Syntax ERROR';
            }
            }
            else if(this.id==='backspace'){
                const expr2= expr.slice(0,-1);
                display.innerHTML=expr2;
            }
            else{
                display.innerHTML="";
                display.innerHTML='0';
            }    
         } 
    }
} 

const body1=document.getElementsByTagName('body')[0];

function setAccentColor(bgcolor,color) {
    document.documentElement.style.setProperty('--sliderbox', bgcolor);
    document.documentElement.style.setProperty('--sldier', color);
  }

const keyboard=document.getElementsByClassName('keyboard')[0];
const num=document.querySelectorAll('.num');
const oper=document.querySelectorAll('.oper');
const range=document.getElementById('myrange');
range.addEventListener('change',()=>{
    //alert(range.value);
    var range1=parseInt(range.value,10);
if(range1===0){
    body1.style.cssText='background-color:hsl(222,26%,31%); color:hsl(0,0%,100%);';
    display.style.cssText='background-color:hsl(224,36%,15%) ;color:hsl(0,0%,100%) ;';
    setAccentColor('hsl(224,36%,15%)','hsl(6,63%,50%)');
//    slider.style.cssText='background-color:hsl(224,36%,15%) ;accent-color:hsl(6,63%,50%) ;';
    keyboard.style.cssText='background-color:hsl(224,36%,15%) ;';
    num.forEach(n=>{
        n.style.cssText='background-color: hsl(30,25%,89%);box-shadow:0 3px hsl(28,16%,65%);color: hsl(221,14%,31%);';
    })
    oper.forEach(o=>{
        o.style.cssText='background-color: hsl(30,25%,89%);box-shadow:0 3px hsl(28,16%,65%);color: hsl(221,14%,31%);';
    })
    clear.style.cssText='background-color: hsl(225,21%,49%); color:hsl(0,0%,100%) ; box-shadow:0 3px  hsl(224,28%,35%)';
    backspace.style.cssText='background-color: hsl(225,21%,49%); color:hsl(0,0%,100%) ; box-shadow: 0 3px hsl(224,28%,35%);';
    equal.style.cssText='background-color: ; color: ; box-shadow: 0 3px ';;
    }
    else if(range1===1){
        body1.style.cssText='background-color:hsl(0,0%,90%) ;color:hsl(60, 10%, 19%) ;';
        display.style.cssText='background-color:hsl(0,0%,93%) ;color:hsl(60, 10%, 19%) ;';
        setAccentColor('hsl(0,5%,81%)',':hsl(25, 99%, 27%)');
//        slider.style.cssText='background-color: hsl(0,5%,81%) ;accent-color:hsl(25, 99%, 27%);';
        keyboard.style.cssText='background-color: hsl(0,5%,81%);';
        num.forEach(n=>{
            n.style.cssText ='background-color: hsl(45, 7%, 89%) ; color:hsl(60, 10%, 19%) ; box-shadow: 0 3px  hsl(35, 11%, 61%);';
        })
        oper.forEach(o=>{
            o.style.cssText='background-color: hsl(45, 7%, 89%) ; color:hsl(60, 10%, 19%) ; box-shadow: 0 3px  hsl(35, 11%, 61%);';
        }) 
         clear.style.cssText='background-color:hsl(185, 42%, 37%) ; color: hsl(0, 0%, 100%); box-shadow:0 3px hsl(185, 58%, 25%);';
        backspace.style.cssText='background-color: hsl(185, 42%, 37%); color: hsl(0, 0%, 100%); box-shadow: 0 3px hsl(185, 58%, 25%);';
        equal.style.cssText='background-color:hsl(25,98%,40%) ; color: hsl(0, 0%, 100%); box-shadow: 0 3px hsl(25,99%,27%);';
    }
    else{
        body1.style.cssText='color: hsl(52, 100%, 62%); background-color:  hsl(268, 75%, 9%);';
        display.style.cssText='background-color:hsl(268, 71%, 12%) ;color:hsl(52, 100%, 62%) ;';
        setAccentColor('hsl(268, 71%, 12%)','hsl(176, 100%, 44%)');
//        slider.style.cssText='background-color: hsl(268, 71%, 12%);accent-color: hsl(176, 100%, 44%) ;';
        keyboard.style.cssText='background-color: hsl(268, 71%, 12%) ;';
        num.forEach(n=>{
            n.style.cssText='background-color:hsl(281, 89%, 26%) ;color:hsl(52, 100%, 62%) ; box-shadow: 0 3px  hsl(285, 91%, 52%);';
        })
        oper.forEach(o=>{
            o.style.cssText='background-color: hsl(281, 89%, 26%); color:hsl(52, 100%, 62%) ; box-shadow: 0 3px  hsl(285, 91%, 52%);';
        })
        clear.style.cssText='background-color:hsl(268, 47%, 21%) ; color:hsl(0, 0%, 100%) ; box-shadow:0 3px hsl(290, 70%, 36%);';
        backspace.style.cssText='background-color: hsl(268, 47%, 21%); color:hsl(0, 0%, 100%) ; box-shadow: 0 3px  hsl(290, 70%, 36%);';
        equal.style.cssText='background-color:hsl(176, 100%, 44%) ; color:  hsl(198, 20%, 13%); box-shadow: 0 3px hsl(177, 92%, 70%);';
    }
   
})
