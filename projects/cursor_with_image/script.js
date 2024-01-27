const elem=document.querySelectorAll('.elem');
const img=document.querySelector('.elem img');
elem.forEach((dets)=>{
    dets.addEventListener('mouseenter',function(){
        dets.childNodes[3].style.opacity=1

    })
    dets.addEventListener('mouseleave',function(){
        dets.childNodes[3].style.opacity=0
        
    })
    dets.addEventListener('mousemove',function(val){
        console.log(val)
        dets.childNodes[3].style.left=val.x+'px';
        // dets.childNodes[3].style.right=val.y+'px';
    })
})
