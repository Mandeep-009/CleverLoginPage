var usernameInput=document.querySelector("#username");
var passwordInput=document.querySelector("#password");
var submitButton=document.querySelector("#btn");
var parentDiv=document.querySelector(".container");
var a=0;
var b=0;
var left=1;
var warning=0;
function usernameInputHandler(event){
    if(usernameInput.value!="") a=1;
    else a=0;
}
function passwordInputHandler(){
    if(passwordInput.value!="") b=1;
    else b=0;
}
function submitButtonHandler(){
    
    const btn=this;
    if(a==1&&b==1){
        btn.style.transform="translate(75px,0px)";
        if(warning==1){
            var tempDiv=document.querySelector("#abc");
            tempDiv.remove();
            warning=0;
        }
    }
    else{
        if(warning==0){
            var newDiv=document.createElement("div");
            newDiv.id="abc";
            newDiv.textContent="*please enter both username and password";
            parentDiv.appendChild(newDiv);
            warning=1;
        }
        
        if(left==0){
            btn.style.transform="translate(0px,0px)";
            left=1;
        }
        else{
            btn.style.transform="translate(160px,0px)";
            left=0;
        }
    }
}
usernameInput.addEventListener("input",usernameInputHandler);
passwordInput.addEventListener("input",passwordInputHandler);
submitButton.addEventListener("mouseover",submitButtonHandler);

