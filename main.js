let a = document.querySelector('.button')
let img = document.querySelector('.img');
let container = document.querySelector('.container');

function paragraphs(p){
    document.querySelector('.p').innerHTML = p;
}

function phones(phone){
    img.src = phone;
}
function colors(color){
    container.style.background = color;
    a.style.color = color;
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.content .text h2`, {delay: 500})
sr.reveal(`.content .text p`, {delay: 600})
sr.reveal(`.content .text`,{origin: 'left'})
sr.reveal(`.content .image .img`,{origin: 'right'})
sr.reveal(`.icons`,{interval: 100})
