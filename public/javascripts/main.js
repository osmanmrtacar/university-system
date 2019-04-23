let deneme = document.querySelector("#i-name")
let dugme = document.querySelector(("#dugme"));
dugme.disabled=true;

deneme.addEventListener('keyup', myFunction);


function myFunction(){
    let x = deneme.value;
    if(x.length>0){
        dugme.classList.remove("disabled");
        dugme.disabled = false;
    }
    else{
        dugme.classList.add("disabled");
        dugme.disabled = true;
    }
}