//making down arow work ?
let about = document.querySelector("#bodyAbout");
let portfolio = document.querySelector("#bodyPortfolio")

window.addEventListener("load", arrow);
// functions 

function burgerMenu(){
  console.log("burgerMenu");
  let burger = document.querySelector(".dropDownContent");
  if (burger.style.display === "block") {
    burger.style.display ="none";
  } else {
    burger.style.display ="block";
  }
}
function arrow(){
  if (about) {
    console.log("about")
    document.querySelector(".scrollDown").addEventListener("click", onAboutClick);
  }else if (portfolio){
    console.log("portfolio")
    document.querySelector(".arrowUp").addEventListener("click", portfolioClick);
  }
}

function onAboutClick() {
  document.querySelector("#headerCV").scrollIntoView();
}
function portfolioClick(){
  document.querySelector("#headingPortfolio").scrollIntoView();
}


// eventlisteners
//document.querySelector(".scrollDown").addEventListener("click", onAboutClick);


