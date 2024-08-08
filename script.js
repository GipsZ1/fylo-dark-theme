let errorr=document.getElementsByClassName("error");
let email=document.getElementById("email");
let form=document.getElementById("form");
form.addEventListener("submit",(de)=>{
    de.preventDefault();
    if(email.value.trim()===""){
        errorr[0].textContent="Please enter a valid email address";
    }else{
        errorr[0].textContent="";
    }

})