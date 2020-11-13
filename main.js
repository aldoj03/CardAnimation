const container = document.querySelector('.container')
const card = document.querySelector('.card')
const main = document.querySelector('.main')
const type = document.querySelector('.type')
const cartBtn = document.querySelector('.cart-btn')
const title = document.querySelector('.title')
const granos = document.querySelector('.granos')
const cafe = document.querySelector('.cafe')

container.addEventListener('mousemove', e=>{

    let XAxis = ( window.innerWidth / 2 - e.pageX )/ 20
    let YAxis = ( window.innerHeight / 2 - e.pageY ) / 20
    console.log(XAxis,YAxis);
    card.style.transform = `rotateY(${XAxis}deg) rotateX(${YAxis}deg)`  
    
})

container.addEventListener('mouseenter', e=>{
    
    card.style.transition = 'none'
    main.style.transform = `translateZ(100px)`
    cartBtn.style.transform = `translateZ(30px)`
    type.style.transform = `translateZ(30px)`
    title.style.transform = `translateZ(30px)`
    granos.style.transform = ` translateZ(0px) translate(-30px, -60px) rotate(-10deg)`
    cafe.style.transform = ` translate(-25px, -40px) rotate(-12deg) `



})
container.addEventListener('mouseleave', e=>{
    card.style.transition = 'all 300ms ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    
    
    main.style.transform = `translateZ(0px)`
    cartBtn.style.transform = `translateZ(0px)`
    type.style.transform = `translateZ(0px)`
    title.style.transform = `translateZ(0px)`
    granos.style.transform = `translateZ(0px) translate(0px, -20px) rotate(-10deg)`
    cafe.style.transform = ` translate(-25px, -40px) rotate(10deg)`




})