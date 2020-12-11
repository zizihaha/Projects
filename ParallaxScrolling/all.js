let bg = document.querySelector('.bg');
let moon = document.querySelector('.moon');
let mountain = document.querySelector('.mountain');
let road = document.querySelector('.road');
let text = document.querySelector('.text');

window.addEventListener('scroll',function(){
  // 監聽滾輪事件，滾動時抓到 scrollY 的值，改變圖片的 pos 位置
  let value = window.scrollY;
  bg.style.top = value * 0.5 + 'px';
  moon.style.left = -value * 0.5 + 'px';
  mountain.style.top = -value * 0.15 + 'px';
  road.style.top = value * 0.15 + 'px';
  text.style.top = value * 1 + 'px';
})