let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.soccer-king.jp/wp-content/uploads/2020/06/1993verdy.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/1994verdy.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/1995marinos.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/1996kashima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/1997iwata.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/1998kashima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/1999iwata.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2000kashima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2001kashima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2002iwata.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2003marinos.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2004marinos.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2005gamba.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2006urawa.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2007kashima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2008kashima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2009kashima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2010nagoya.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2011kashiwa.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2012hiroshima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2013hiroshima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2014_Getty-Images.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2015_GettyImages.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2010nagoya.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2011kashiwa.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2012hiroshima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2013hiroshima.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2014_Getty-Images.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2015_GettyImages.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2016_kaneko.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2017_kawasakiF.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2018_GettyImages.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/2019YokohamaFM.jpg",
"https://www.soccer-king.jp/wp-content/uploads/2020/06/1_NZ6_6396.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
