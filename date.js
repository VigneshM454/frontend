//label
const labels = document.querySelectorAll('.label');
const inputs = document.querySelectorAll('.ip');

const derror=document.querySelector('.derror');
const merror=document.querySelector('.merror');
const yerror=document.querySelector('.yerror');

//input box
const date1=document.getElementById('date');
const month1=document.getElementById('month');
const year1=document.getElementById('year');
//para
const para=document.querySelectorAll('p');

//btn
const btn=document.getElementById('btn');

//output
const od=document.getElementById('od');
const om=document.getElementById('om');
const oy=document.getElementById('oy');
const line=document.getElementsByClassName('line')[0];
if(window.innerWidth<=375){
   // line.createElement('HR') 
   var hr=document.createElement('hr');
   line.appendChild(hr);   
}
btn.addEventListener('click',()=>{
    const daten =new Date();
/*   date.toDateString
    /*console.log(date);
    console.log(date.getDate())
    console.log(date.getFullYear())
    console.log(date.getMonth())
  //  alert( Date(d));
*/
var yearnow= parseInt(daten.getFullYear(),10); 
var monthnow=parseInt(daten.getMonth(),10)+1;
var datenow=parseInt(daten.getDate(),10);
console.log(datenow+'/'+monthnow+'/'+yearnow)
console.log(typeof datenow)
    //7/7/2023 
// console.log('date now is'+ datenow +" datatype is"+ typeof datenow);
//console.log(date1.value)
//const n=yearnow+monthnow;
//const usrdate=date1.value;
//const datepart=usrdate.split('-');
// console.log(datepart)
var date= parseInt(date1.value,10);
var month= parseInt(month1.value,10);
var year= parseInt(year1.value,10);

function dates(month,year){
    if(month== 1||month==3||month==5||month==7||month==8||month==10||month==0){
      return 31;
    }
    else if(month == 4||month==6||month==9||month==11){
        return 30;
    }
    else{
        if(year%4===0){
            return 29;
        }
        else{
            return 28;//29
        }
    }
}

var y,m,d;

function age(){
    if(yearnow===year){
        y=0;
        if(monthnow===month){
            m=0;
            d=datenow-date;
        }
        else if(monthnow>month){
            if(datenow>=date){
                m=monthnow-month;
                d=datenow-date;
            }
            else if(datenow<date){
                datenow+=dates((monthnow-1)%12,yearnow);
                //monthnow--;
                m=monthnow-1-month;
                d=datenow-date;
            }
        }
        else{
            alert('invalid date');
        }
    }
    else if(yearnow> year){
        if(monthnow===month){          
            if(datenow>=date){
                m=monthnow-month;
                d=datenow-date;
                y=yearnow-year;
            }
            else if(datenow<date){
                datenow+=dates((monthnow-1)%12,monthnow);
                m=monthnow-1-month+12;
                y=yearnow-year-1;
                d=datenow-date;
            }
        }
        else if(monthnow>month){
            y=yearnow-year;
            if(datenow>=date){
                m=monthnow-month;
                d=datenow-date;
            }
            else if(datenow<date){
                datenow+=dates((monthnow-1)%12,yearnow);
                m=monthnow-1-month;
                d=datenow-date;
            }
        }
        else if(monthnow<month){
            monthnow+=12;
            y=yearnow-1-year;
            if(datenow>=date){
                m=monthnow-month;
                d=datenow-date;
            }
            else if(datenow<date){
                datenow+=dates((monthnow-1)%12,yearnow);
                m=monthnow-1-month;
                d=datenow-date;
            }
        }
    }
    else{
        
    }
}
 //if any empty value
 if(date1.value==='' || month1.value==='' || year1.value===''){
    derror.style="color:red";
    merror.style="color:red";
    yerror.style="color:red";
      derror.innerHTML='this field is required';
      merror.innerHTML='this field is required';
      yerror.innerHTML='this field is required';
    para.forEach(pa=>{
        pa.style.display='block'
    })
    // Apply styles to labels
    labels.forEach(label => {
    label.style.color = 'red';
    });
    // Apply styles to inputs
    inputs.forEach(input => {
    input.style.borderColor = 'red';
    input.style.opacity = '0.5';
    });

         od.innerHTML='--';
         om.innerHTML='--';
         oy.innerHTML='--';
  }
//error invalid date
else if( (year===yearnow && month>=monthnow )||((year==yearnow && month==monthnow && date>datenow)))
{
   labels.forEach(label => {
       label.style.color = 'red';
       });
       inputs.forEach(input => {
       input.style.borderColor = 'red';
    //   input.style.opacity = '0.5';
       });       
       od.innerHTML='--';
        om.innerHTML='--';
        oy.innerHTML='--';
        para.forEach(pa=>{
           pa.style.display='block'
       })
}

else{
   // age();
 //  ip.style="border-color:red";
 if((date<1||date>dates(month,year))||(month<1 || month>12)||(year<1000 || year>yearnow)){
    labels.forEach(label => {
        label.style.color = 'red';
        });
        inputs.forEach(input => {
        input.style.borderColor = 'red';
     //   input.style.opacity = '0.5';
        });       
        od.innerHTML='--';
         om.innerHTML='--';
         oy.innerHTML='--';

         if(date<1||date>dates(month,year)){
            para[0].style.display="block";
         }
         if(!(date<1||date>dates(month,year))){
            para[0].style.display="none";
         }
         if(month<1 || month>12){
            para[1].style.display="block";
         }
         if(!(month<1 || month>12)){
            para[1].style.display="none";
         }
         if(year<1000 || year>yearnow){
            para[2].style.display="block";
         }
         if(!(year<1000 || year>yearnow)){
            para[2].style.display="none";
         }
 } 

else{
        age();
        derror.style="display:none";
        merror.style="display:none";
        yerror.style="display:none";
        labels.forEach(label => {
            label.style.color = 'black';
            });

            inputs.forEach(input => {
            input.style.borderColor = 'black';
            input.style.opacity = '1';
            });      //  yerror.style="color:black"
         od.innerHTML=d;
         om.innerHTML=m;
         oy.innerHTML=y;       
    }
  }
  
// var i=1+dates(5);
/*
0   -dec            6
1    -jan           7
2     -feb          8
3                   9
4                   10
5                   11      -nov
*/

})