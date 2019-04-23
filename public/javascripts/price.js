let nameInput = document.querySelector("#i-name");
let priceInput = document.querySelector('#i-price');
let manuInput = document.querySelector('#i-manu-id');
let dugme = document.querySelector(("#dugme"));
dugme.disabled=true;

nameInput.addEventListener('keyup', myFunction);
priceInput.addEventListener("keyup", myFunction);
manuInput.addEventListener('keyup', myFunction);

function numberCheck(evt)
{
    if (evt.which < 48 || evt.which > 57)
    {
        console.log('deneme');
        evt.preventDefault();
    }
    else{
        console.log('ben')
        return myFunction();
    }
};
    
    
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  console.log(parseFloat(r));
  return parseFloat(r);
}    
    
function myFunction(){
    
    let n = nameInput.value;
    let p = priceInput.value;
    let m = manuInput.value;
    let c= circumference(p);
    console.log(p);
    if(n.length>0 && c!==0 && p.length>0 && m.length){
        dugme.classList.remove("disabled");
        dugme.disabled = false;
        p=c;
    }
    else{
        dugme.classList.add("disabled");
        dugme.disabled = true;
    }
}