let buttons=document.querySelectorAll('button');
let display=document.getElementById('display')
let string="";
let arr=Array.from(buttons);
arr.forEach(button=> {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML== '='){
            string=eval(string);
            display.value=string;
        }
        else if(e.target.innerHTML == 'AC'){
            string=" ";
            display.value=string;
        }
        else if(e.target.innerHTML== 'DE'){
            string=string.slice(0,-1);
            display.value=string;
        }
        else{
         string+=e.target.innerHTML;
            display.value=string;
        }
    })
});
