const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  pagination: {
    el: "#mainVisual .pagination",
    type: "bullets",
    clickable: true,
  },
});

const productSlider = new Swiper("#product .list", {
  speed: 600,
  slidesPerView: 1, //화면에 보여지는 개수
  slidesPerGroup: 1, //묶음
  navigation: {
    prevEl: "#product .prev",
    nextEl: "#product .next",
  },
});

const btnAll = document.querySelector(".all");
const sns = document.querySelector(".sns");
const gnb = document.querySelector("#gnb");
console.log(sns);
btnAll.addEventListener("click", function () {
  //alert("all을 눌렀습니다."
  gnb.classList.toggle("on");
  // toggle = add, remove를 동시에 사용
});
sns.addEventListener("click", function () {
  sns.classList.toggle("on");
  // toggle = add, remove를 동시에 사용
});
