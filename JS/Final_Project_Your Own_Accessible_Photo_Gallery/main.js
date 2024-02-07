function preImg(imageSrc, imageName) {
  var imgPre = document.getElementById("imgPre");
  var changeText = document.getElementById("placeholderText");
  changeText.textContent = imageName;
  imgPre.src = imageSrc;
  console.log("chagne");
}

function reImg() {
  var imgPre = document.getElementById("imgPre");
  var changeText = document.getElementById("placeholderText");
  changeText.textContent = "Hover img";
  imgPre.src = "./img/def.jpg";
  console.log("not chagne");
}
