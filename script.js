const count = 10;
const apiKey = 'y4wQKzGqe5W7ceT6lJqHU1X7m4VKBwDuKohnQP-MIVk';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

const imgContainer = document.getElementById('img-container')
let photoArrays = [];

async function getPhoto(){
    try{
        const response = await fetch(apiUrl);
        photoArrays = await response.json();
        displayImage();
    }catch(err){
        console.log(err);
    }
        
}
function displayImage(){
    photoArrays.forEach((photo) => {
        const item = document.createElement('a')
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');


        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('title',photo.atl_description);
        img.setAttribute('alt',photo.atl_description);

        item.appendChild(img);
        imgContainer.appendChild(item);
    });
}
getPhoto();

window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){
        // ดึงภาพมาแสดงผล
        getPhoto();
    }
})