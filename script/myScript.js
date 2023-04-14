document.querySelector("#btnlogin").addEventListener("mouseover",(e)=>{
    document.querySelector("#iconlogin").Style.fill="#9CA0A6";
    console.log("hover");
});
if(window.innerWidth<1000)
{
    document.querySelector(".hody").classList.replace("col-md-3","col-md-4");
}
