// var images = document.getElementsByTagName('img');
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].src = 'https://mohahamarisa.github.io/portfolio/pages/art/broodyLight.jpg';
// }

var divs = document.getElementsByTagName("div");
for(var i = 0; i < divs.length; i++){
   //do something to each div like
   divs[i].style.font = "unset";
}

var styleNode           = document.createElement ("style");
styleNode.type          = "text/css";
styleNode.textContent   = "@font-face { font-family: OldTimes; src: url('"
                        + chrome.extension.getURL ("WindowsTimesNewRomanBitmapFontNewTestFont.ttf")
                        + "') format('truetype'); }"
                        ;
document.head.appendChild (styleNode);
console.log("did style node come through?: "+ styleNode);