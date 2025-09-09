let all1=1;
document.querySelector('.js-1').addEventListener('click',()=>{
    document.querySelector('.input-js').value+=all1
})
let all2=2;
document.querySelector('.js-2').addEventListener('click',()=>{
    document.querySelector('.input-js').value+=all2
})
let all3=3;
document.querySelector('.js-3').addEventListener('click',()=>{
    document.querySelector('.input-js').value+=all3
})
let all4=4;
document.querySelector('.js-4').addEventListener('click',()=>{
    document.querySelector('.input-js').value+=all4
})
let all5=5;
document.querySelector('.js-5').addEventListener('click',()=>{
    document.querySelector('.input-js').value+=all5
})
let all6=6;
document.querySelector('.js-6').addEventListener('click',()=>{
    document.querySelector('.input-js').value+=all6
})
let all7=7;
document.querySelector('.js-7').addEventListener('click',()=>{
    document.querySelector('.input-js').value+=all7
})
let all8=8;
document.querySelector('.js-8').addEventListener('click',()=>{
    document.querySelector('.input-js').value+=all8
})
let all9=9;
document.querySelector('.js-9').addEventListener('click',()=>{
    document.querySelector('.input-js').value+=all9
})
let all0=0;
document.querySelector('.js-0').addEventListener('click',()=>{
    document.querySelector('.input-js').value+=all0
})
document.querySelector('.js-plu').addEventListener('click',()=>{
    let allp=  document.querySelector('.js-plu').innerHTML
    document.querySelector('.input-js').value+= allp
})
document.querySelector('.js-min').addEventListener('click',()=>{
    let allp=  document.querySelector('.js-min').innerHTML
    document.querySelector('.input-js').value+= allp
})
document.querySelector('.js-mul').addEventListener('click',()=>{
    let allp=  document.querySelector('.js-mul').innerHTML
    document.querySelector('.input-js').value+= allp
})
document.querySelector('.js-d').addEventListener('click',()=>{
    let allp=  document.querySelector('.js-d').innerHTML
    document.querySelector('.input-js').value+= allp
})
document.querySelector('.js-dot').addEventListener('click',()=>{
    let allp=  document.querySelector('.js-dot').innerHTML
    document.querySelector('.input-js').value+= allp
})


document.querySelector('.js-00').addEventListener('click',()=>{
    let allp=  document.querySelector('.js-00').innerHTML
    document.querySelector('.input-js').value+= allp
})

document.querySelector('.js-ac').addEventListener('click',()=>{
    document.querySelector('.input-js').value=''
})

document.querySelector('.js-de').addEventListener('click',()=>{
    //  string().slice(0,-1)
    let  s1=document.querySelector('.input-js').value
    s1= s1.slice(0,-1)
    // console.log( s1)
    document.querySelector('.input-js').value=s1
})


document.querySelector('.js-equ').addEventListener('click',()=>{
    // let allll=document.querySelector('.input-js').value
    // // JSON.parse(allll)
    // console.log(typeof allll)
    let allll=document.querySelector('.input-js').value
if(allll === ""){
    console.log('write some number')
}else{
document.querySelector('.input-js').value=eval(allll )}
})























