function randint(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}


let bild1 = document.querySelector('.left1')
bild1.addEventListener("click", function(){
    anime({
        targets: '.left1',
        rotate: 360,
        duration: 300,
        easing: 'linear'
    }).finished.then(function(){
        bild1.style.transform = 'rotate(0deg)'
        anime({
            targets: '.left1',
            left: randint(0, window.innerWidth - 100),
            duration: 1000
        })
    })
    
})