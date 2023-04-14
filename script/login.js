

let elem = document.querySelector('#Username');
let rect = elem.getBoundingClientRect();
console.log("x: "+ rect.y);
console.log("y: "+ rect.top);
// document.querySelector("#UserNamePanel>label").style.top=rect.x;

document.querySelector("#Username").addEventListener("click",()=>{
    let username=document.querySelector("#Username");
    let usernamelable=document.querySelector("#UsernameLable");
    
    usernamelable.classList.add("UsernameLablehover");
    usernamelable.classList.remove("UserNamelabel");
})
document.querySelector("#password").addEventListener("click",()=>{
    let username=document.querySelector("#password");
    let usernamelable=document.querySelector("#passwordLable");
    
    usernamelable.classList.add("passwordLablehover");
    usernamelable.classList.remove("passwordlabel");
})