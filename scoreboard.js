const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");  
})


let count = 0;
let countR = 0;
let countStrL = document.getElementById("count-left");
let countStrR = document.getElementById("count-right");

function decrementOneL(){
    count -= 1;
    countStrL.textContent = count;
  }
function decrementOneR(){
    countR -= 1;
    countStrR.textContent = countR;
  }

  function incrementOneL(){
    count += 1;
    countStrL.textContent = count;
  }
  function incrementOneR(){
    countR += 1;
    countStrR.textContent = countR;
  }

  function incrementTwoL(){
    count += 2;
    countStrL.textContent = count;
  }
  function incrementTwoR(){
    countR += 2;
    countStrR.textContent = countR;
  }

  function incrementThreeL(){
    count += 3;
    countStrL.textContent = count;
  }
  function incrementThreeR(){
    countR += 3;
    countStrR.textContent = countR;
  }