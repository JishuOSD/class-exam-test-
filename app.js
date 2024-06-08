// password//
let bom1 = document.querySelector('.bom1')
let bom2 = document.querySelector('.bom2')
let Rox = document.querySelector('.Rox')

bom1.addEventListener('click',()=>{
    // alert('test')
    Rox.type = "text"
    bom1.style.display = "none"
    bom2.style.display = "block"
})



bom2.addEventListener('click',()=>{
    // alert('test')
    Rox.type = "password"
    bom2.style.display = "none"
    bom1.style.display = "block"
});
// password end//



// scoll bar//
let nav = document.querySelector('#nav');
window.addEventListener('scroll', function(){
    let test = document.documentElement.scrollTop;
     if(test > 100){
     nav.classList.add('active');
     }else{
        nav.classList.remove('active');
     }
    // console.log(test);
});
// scoll bar end//



/* <!-- mood chang --> */
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let body = document.querySelector('body');

moon.addEventListener('click', function(){
  body.classList.add("mode");
 if( body.classList.contains('mode')){
    moon.style. marginTop = '-100%';
 }
});

sun.addEventListener('click',function(){
    body.classList.remove("mode");
    if(!body.classList.contains('mode')){
    moon.style. marginTop = '0%';
    }
});
/* <!-- mood chang end --> */


// <!-- color change -->
let clrchange = document.querySelector("#clrchange");
let btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    console.log(c);
    clrchange.style.background = `rgb(${red},${green},${blue})`;
    
});

// <!-- color change -->