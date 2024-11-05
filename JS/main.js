
let nav=document.querySelector('.navigaion-wrap');
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("scroll-on")
    }else{
        nav.classList.remove("scroll-on")
    }
}








let navber=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse .collapse");
navber.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})




document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start;
        renge=end-start;
        incrment=end>start?1 :-1;
        step=math.abs(math.floor(duration/renge)),
        timer=setInterval(()=>{
            current +=incrment;
            obj.textContent=current
            if(current==end){
                clearInterval(timer);
            }
        },step);
     
    }
    counter("count1",0,1278,3000);
    counter("count2",100,8459,2400);
    counter("count3",100,8559,2800);
    counter("count4",300,1059,5000);
})
















































