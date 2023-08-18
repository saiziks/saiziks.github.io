let block = document.querySelector('.block')
document.addEventListener('mousemove', function(e){
    const dx = e.clientX - window.innerHeight / 2
    const dy = e.clientY - window.innerHeight / 2
    
    
    const angleX = (5 * dx) / window.innerHeight / 2
    const angleY = (5 * dy) / window.innerHeight / 2


    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})
