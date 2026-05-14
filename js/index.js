FontAwesome.config.autoReplaceSvg = false;
let lightContainer = document.querySelector(".light-container");
let closebtn = document.getElementById("closeBtn");
let nextbtn = document.getElementById("nextBtn");
let prevbtn = document.getElementById("prevBtn");
let imgBox = document.querySelector(".img-box");
let currentIndex;

// add image boxs

let imgs = [
  { img: "imgs/12d0d29ddcd1c8e7d133dccc8ba6b878.jpg" },
  { img: "imgs/4f298c8e095c235e8df1b2c643eda112.jpg" },
  { img: "imgs/5e9172640c492f0221ea1d5fdde99817.jpg" },
  { img: "imgs/6346f109bb104084963a34dcdf4d5ec3.jpg" },
  { img: "imgs/67c61c35b6ddf0f4fc78cba84ae5ef17.jpg" },
  { img: "imgs/c4ff6d1aa5a624790827d766293b0c97.jpg" },
  { img: "imgs/12d0d29ddcd1c8e7d133dccc8ba6b878.jpg" },
  { img: "imgs/4f298c8e095c235e8df1b2c643eda112.jpg" },
  { img: "imgs/c4ff6d1aa5a624790827d766293b0c97.jpg" },
];

let box = "";
for (let i = 0; i < imgs.length; i++) {
  box += ` <div class="col-md-4">
              <div class="box position-relative h-100">
                <img class="w-100 h-100 my-img" src="${imgs[i].img}" alt="">
                <div class="text p-2 bg-white text-center position-absolute" style="bottom: 15px; left: 50%; transform: translateX(-50%); width: 80%;">
                  <h5 >Lorem, ipsum dolor.</h5>
                  <p class="small mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
        </div>`;
}
document.getElementById("row-data").innerHTML = box;

// display light container and change photo

let allimg = document.querySelectorAll(".my-img");
for (let i = 0; i < allimg.length; i++) {
  allimg[i].addEventListener("click", function (e) {
    currentIndex = i;
    lightContainer.classList.remove("d-none");
    let currentSrc = e.target.getAttribute("src");
    imgBox.style.backgroundImage = `url(${currentSrc})`;
  });
}

// close light container
closebtn.addEventListener("click", function () {
  closeSlider();
});
function closeSlider() {
  lightContainer.classList.add("d-none");
}

// next and prev btn
nextbtn.addEventListener("click", function () {
  slider(1);
});

prevbtn.addEventListener("click", function () {
  slider(-1);
});

function slider(step) {
  currentIndex += step;
  if (currentIndex == allimg.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = allimg.length - 1;
  }
  let newSrc = allimg[currentIndex].getAttribute("src");
  imgBox.style.backgroundImage = `url(${newSrc})`;
}

//keys

document.body.addEventListener("keydown", function (e) {
  if (!lightContainer.classList.contains("d-none")) {
    if (e.key == "ArrowRight") {
      slider(1);
    } else if (e.key == "ArrowLeft") {
      slider(-1);
    } else if (e.key == "Escape") {
      closeSlider();
    }
  }
});

document.addEventListener("click" , function (e) {
  if (e.target == lightContainer) {
    closeSlider()
  }
})







// console.log(document.addEventListener("click", function(e) {
//     console.log("clicked:", e.target);
// }));
