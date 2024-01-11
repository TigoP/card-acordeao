function toggleIcon(iconNumber) {
  var icon = document.getElementById("toggleIcon" + iconNumber); //aqui acrescenta o numeri do icon do onclick

  if (icon.src.includes("plus")) { 
    icon.src = "./assets/images/icon-minus.svg"; //se na fonte estiver plu, ao clicar alterará para minus
  } else {
    icon.src = "./assets/images/icon-plus.svg"; // estando minus, voltará a plus
  }
}

//
//
//
//
/* Tentei de muitas formas fazer algo como isso, mas não surtiu muito resultado.
function toggleIcon() {
    var icon1 = document.getElementById("toggleIcon1");
    var icon2 = document.getElementById("toggleIcon2");
    var icon3 = document.getElementById("toggleIcon3");
    var icon4 = document.getElementById("toggleIcon4");
  
    if (icon1.src.includes("icon-plus")) {
      icon1.src = "./assets/images/icon-minus.svg";
    if (icon2.src.includes("icon-plus")) {
      icon2.src = "./assets/images/icon-minus.svg";
    }
    if (icon3.src.includes("icon-plus")) {
      icon3.src = "./assets/images/icon-minus.svg";
    } 
    if (icon4.src.includes("icon-plus")) {
      icon4.src = "./assets/images/icon-minus.svg";
    }   
    } else {
      src = "./assets/images/icon-plus.svg";
    }
  }*/