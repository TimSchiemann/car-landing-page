function cycleContent(){
    let contentItems = Array.from(document.querySelectorAll('.content__item'))
    let currentItem = 0
    function swapContent(){
        currentItem < contentItems.length - 1? currentItem++ : currentItem = 0
        contentItems[currentItem].classList.remove('hidden')
        contentItems.forEach((item, index) => {
            if(index !== currentItem){
                item.classList.add('hidden')
            }    
        })
    }
    setInterval(swapContent, 10000);
}


// cycleContent()

