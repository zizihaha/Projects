
const bannerBtn = document.querySelector('.banner-btn');
const banner = document.querySelector('.banner');
const form = document.querySelector('.form-container');
const xBtn = document.querySelector('.x-btn');
const container = document.querySelector('.container');

bannerBtn.addEventListener('click', function(){
  banner.style.display ='none';
  form.style.cssText ='opacity: 1; visibility: visible';
  container.style.background = '#cc683c';
})

xBtn.addEventListener('click', function(){
  banner.style.display ='flex';
  form.style.cssText ='opacity: 0; visibility: hidden';
  container.style.cssText = 'background: linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.7)), url(../images/bg1.jpeg) no-repeat center / cover;';
})

