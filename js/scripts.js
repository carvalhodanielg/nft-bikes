const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'


function animeScroll(){
    const windowTop = pageYOffset + (.8*window.innerHeight);

    target.forEach(function (element){
        
   
        if(windowTop>element.offsetTop){

            element.classList.add(animationClass)
        }
   
    })

}


function scrollAnime(){
    window.addEventListener('scroll', function (){
        animeScroll()
    })
}


scrollAnime()


function originalPage(){
    alert("You'll be redirected to the original page!!")
}
