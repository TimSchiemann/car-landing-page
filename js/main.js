/* CYCLE VIDEOS */
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
    setInterval(swapContent, 11000);
}


/* REPLACE VIDEOS ON MOBILE */
function replaceVideos(){
    const videos = [...document.querySelectorAll('.content__video')]
    let contentItems = [...document.querySelectorAll('.content__item')]
    videos.map(video => video.classList.add('hidden'))

    contentItems.map((contentItem, i) => {
        const img = document.createElement('img')
        img.setAttribute('src', `./images/${i}.jpg`)
        img.classList.add('content__img')
        contentItem.appendChild(img)
    })
    cycleContent()
}


/* DETECT IF ON MOBILE OR DESKTOP */
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    replaceVideos()
   } else {
    cycleContent()
   }