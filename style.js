const pic=document.querySelector('.image-container');
const  btn=document.querySelector('.btn-1');
// In next time adding the api function to get random picture .
const imageUrls = [
    'https://i.pinimg.com/564x/ac/b7/94/acb79496842a960ecbd7e84f6f23ac3f.jpg',
  'https://i.pinimg.com/564x/07/06/d9/0706d91e170716d574542e207e133b72.jpg',
  'https://i.pinimg.com/736x/86/20/cd/8620cd215c5f7b8459c13acd2dfd2ef0.jpg',
]

function changeImage(){
    const randomIndex=Math.floor(Math.random()*imageUrls.length);
    pic.src=imageUrls[randomIndex];
}
// function to show the button is clicked 
btn.addEventListener('click', changeImage);
 function btnclick(){   
};
