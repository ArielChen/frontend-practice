function mainArticle() {
  'use strict';
  var i, photo, floatImg;
  //目標：
  //1. 使用HTML DOM動態產生main裡面的內容
  //2. active效果呈現

  for (i = 1; i < 5; i++) {
    console.log(i);
    photo = document.getElementById("photo" + i);
    photo.innerHTML = "<img src='./photo/stationery-00" + i + ".jpg' alt='' / id='num" + i + "'>";

    floatImg = document.getElementById("num" + i);
    if (i % 2 === 0) {
      floatImg.style.float = "left";
    } else {
      floatImg.style.float = "right";
    }
  }
}
mainArticle();
