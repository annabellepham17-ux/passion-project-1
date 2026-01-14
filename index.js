const flowerImgs   = Array.from(document.querySelectorAll('.pic1, .pic2, .pic3, .pic4, .pic5, .pic6'));
const flowerTitles = Array.from(document.querySelectorAll('.flower1, .flower2, .flower3, .flower4, .flower5, .flower6'));
const flowerAttrs  = Array.from(document.querySelectorAll('.attribute1, .attribute2, .attribute3, .attribute4, .attribute5, .attribute6'));
const flowerNames = Array.from(document.querySelectorAll('.name1, .name2, .name3, .name4, .name5, .name6'));
//white lilies, rose, tulips, forget me not, lilacs, gardenia

let current = 0;

const front_btn = document.querySelector('.front_btn');
const back_btn = document.querySelector('.back_btn');
const flower_btn = document.querySelector('.flower_btn');
var final_flower = "";

const why = document.querySelector('.why');
const someone = document.querySelector('.person');
why.style.display = 'none';
someone.style.display = 'none';

function showIndex(i) {
  if (!flowerImgs.length) return;
  const len = flowerImgs.length;
  current = ((i % len) + len) % len;
  flowerImgs.forEach((el, idx)   => el.style.display = idx === current ? 'block' : 'none');
  flowerTitles.forEach((el, idx) => el.style.display = idx === current ? 'block' : 'none');
  flowerAttrs.forEach((el, idx)  => el.style.display = idx === current ? 'block' : 'none');
  flowerNames.forEach((el, idx)  => el.style.display = idx === current ? 'block' : 'none');
  final_flower = flowerImgs[i];
}

if (front_btn) front_btn.addEventListener('click', () => {
  showIndex(current - 1);
});

if (back_btn) back_btn.addEventListener('click', () => showIndex(current + 1));

if (flower_btn) flower_btn.addEventListener('click', () => {
  flowerTitles.forEach((el,idx) => el.style.display = 'none');
  flowerAttrs.forEach((el,idx) => el.style.display = 'none');
  flowerImgs.forEach((el, idx) => el.style.display = 'none');
  flowerNames.forEach((el, idx) => el.style.display = 'none');
  final_flower.style.display = 'block';
  front_btn.style.display = 'none';
  back_btn.style.display = 'none';
  flower_btn.style.display = 'none';
  why.style.display = 'block';
  someone.style.display = 'block';


  if(why)why.addEventListener('submit', (e) => {
    e.preventDefault();
  });
  if(someone)someone.addEventListener('submit', (e) => {
    e.preventDefault();
  });
});
showIndex(0);
