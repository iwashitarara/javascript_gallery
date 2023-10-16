// JavaScript

console.log('Hello world!');
const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');

// 確認
//console.log(main);
//console.log(thumbs);
thumbs.forEach(function(item, index) {
	item.onclick = function() {
	  //console.log(this.dataset.image);
	  main.src = this.dataset.image;
	}
  });