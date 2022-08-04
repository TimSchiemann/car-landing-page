function cycleContent(){
    let contentItems = [...document.querySelectorAll('.content__item')]
    let navItems = [...document.querySelectorAll('.content__nav-item')]
    let currentItem = 0
    console.log(contentItems)

    /* DISPLAY DIFFERENT CONTENT */
    function swapContent(){
        currentItem < contentItems.length - 1? currentItem++ : currentItem = 0
        contentItems[currentItem].classList.remove('hidden')
        navItems[currentItem].classList.add('highlight')

        for(let i=0; i<contentItems.length; i++){
            if(i !== currentItem){
                contentItems[i].classList.add('hidden')
                navItems[i].classList.remove('highlight')
            }
        }
    }
    setInterval(swapContent, 10000);
}
cycleContent()

