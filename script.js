const projectContainer = [...document.querySelectorAll('.project-container')];
const prevBtn = [...document.querySelectorAll('.pre-btn')];
const nextBtn = [...document.querySelectorAll('.nxt-btn')];

projectContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth/2;
    })
    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth/2;
    })
})