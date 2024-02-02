function preImg(imageSrc, imageName) {
    var imgPre = document.getElementById("imgPre");
    var changeText = document.getElementById("placeholderText");
    changeText.textContent = imageName;
    imgPre.src = imageSrc;
  }
  
  function reImg() {
    var imgPre = document.getElementById("imgPre");
    var changeText = document.getElementById("placeholderText");
    changeText.textContent = "Hover img";
    imgPre.src = "./img/def.jpg";
  }