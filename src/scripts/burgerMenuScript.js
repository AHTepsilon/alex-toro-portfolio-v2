function burgerMenuScript(){
    var x = document.getElementById("burger-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    x.style.flexDirection = "Column";
  }
}

export default burgerMenuScript;