const container = document.querySelector('.slider-container');
const btns = document.querySelectorAll('.btn');
const imgList = ["lilly", "lotus", "rose", "sunflower", "whiteflower"];


let index = 0;
btns.forEach((button)=>{
    button.addEventListener('click', ()=>{
    console.log('clicked');
    if(button.classList.contains('btn-left')){
        index--;
        if(index < 0) {
            index = imgList.length-1;
        }
        container.style.background = `url('flower images/${imgList[index]}.jpeg') center/cover no-repeat`
    }else {
        index++;
        if(index === imgList.length) {
            index = 0;
        }
        container.style.background = `url('flower images/${imgList[index]}.jpeg') center/cover no-repeat`
    }
})
})
