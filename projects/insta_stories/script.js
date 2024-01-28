let arr=[{
    dp: "https://cdn.pixabay.com/photo/2023/04/22/07/33/sky-7943218_1280.jpg",story:"https://cdn.pixabay.com/photo/2023/04/22/07/33/sky-7943218_1280.jpg"},

    {dp:"https://media.istockphoto.com/id/1309101136/photo/anger-man-confused-image.jpg?s=2048x2048&w=is&k=20&c=Ed1q7SlHJJRBE7Qx2DP32TvhLXlq629c-fzU4TrJgQI=" ,
    story:"https://media.istockphoto.com/id/1309101136/photo/anger-man-confused-image.jpg?s=2048x2048&w=is&k=20&c=Ed1q7SlHJJRBE7Qx2DP32TvhLXlq629c-fzU4TrJgQI="},
    
    {dp:"https://cdn.pixabay.com/photo/2015/07/15/09/00/man-845847_1280.jpg", story:"https://cdn.pixabay.com/photo/2015/07/15/09/00/man-845847_1280.jpg"},
    
    {dp:"https://cdn.pixabay.com/photo/2017/12/23/17/54/hand-3035665_1280.jpg", story:"https://cdn.pixabay.com/photo/2017/12/23/17/54/hand-3035665_1280.jpg"},
    
    {dp:"https://cdn.pixabay.com/photo/2016/06/11/12/13/pink-hair-1450045_1280.jpg", story:"https://cdn.pixabay.com/photo/2016/06/11/12/13/pink-hair-1450045_1280.jpg"},
   
    {dp:"https://imgs.search.brave.com/j6oR8Qh9vtsaWiUfkBWR44vj3tr9ExSqveTcsrwTYac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aS13YWxrLWEtbG9u/ZWx5LXJvYWQuanBn/P3dpZHRoPTEwMDAm/Zm9ybWF0PXBqcGcm/ZXhpZj0wJmlwdGM9/MA", 
    story:"https://imgs.search.brave.com/j6oR8Qh9vtsaWiUfkBWR44vj3tr9ExSqveTcsrwTYac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aS13YWxrLWEtbG9u/ZWx5LXJvYWQuanBn/P3dpZHRoPTEwMDAm/Zm9ybWF0PXBqcGcm/ZXhpZj0wJmlwdGM9/MA"
}]
const storiyan=document.querySelector('.storiyan');
const fullscreen=document.querySelector('.full-screen')
var clutter="";
arr.forEach(function(elem,indx){
    clutter+=`<div class="story">
    <img id="${indx}" draggable="false" src="${elem.dp}" alt=""></div>`
})

storiyan.innerHTML=clutter;
storiyan.addEventListener("click",(dets)=>{
    let value=arr[dets.target.id].story;
    storiyan.addEventListener("click",()=>{
        fullscreen.style.display="block";
        fullscreen.style.backgroundImage=`url(${arr[dets.target.id].story})`;

        setTimeout(() => {
            fullscreen.style.display="none";
        }, 3000);
    })
})

