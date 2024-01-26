const nav=document.querySelector('nav')

window.onscroll =function(){
    if(window.scrollY > 0){
        nav.style.background='#DFEFEF'
    }
    else{
        nav.style.background='transparent'
    }
}

 