/*animated headline */
const heading = document.querySelector("main .intro .left p");
words = ["Frontend Developer", "Reactjs Developer", "Web Developer"];
let index = 0;
setInterval(() => {
  changeText();
}, 2500);

function changeText() {
  heading.textContent = words[index];
  index == 2 ? (index = 0) : ++index;
  document.styleSheets[0].insertRule(
    "\
  @keyframes tofro {\
				from { width: 0;   }\
				to   { width: 100%; }\
			}"
  );
}

//Ripple Effect Plugin
$(document).ready(function () {
  $("#ripples").ripples({
    resolution: 512,
    dropRadius: 10,
  });
});

/* skills levels */
const getlevel = document.querySelectorAll(".progress");
getlevel.forEach((level) => {
  // console.log(level.dataset.percent);
  level.style.width = `${level.dataset.percent}`;
});

/* count effect */
const getvalue = document.querySelectorAll(".counter");
const countObserver = document.querySelector(".work-history");
let speed = 250;
function countIt() {
  getvalue.forEach((value) => {
    value.innerText = 0;
    const count = +value.getAttribute("data-count");
    let duration = count / speed;
    function counterUp() {
      let getValue = +value.innerText;
      if (getValue < count) {
        value.innerText = Math.ceil(getValue + duration);
        setTimeout(counterUp, 1);
      } else {
        value.innerText = count;
      }
    }
    counterUp();
  });
}

const options = {
  rootMargin: "0px 0px -100px 0px",
};
let flag = false;
const sectionObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !flag) {
    flag = true;
    countIt();
  }
}, options);

sectionObserver.observe(countObserver);

/*Active links + Filter */
const activeLink = document.querySelectorAll(".projects .tabs ul li a");
const activeTab = document.querySelectorAll(".items .item");
activeLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    activeLink.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");

    // filter Projects
    let projects = link.dataset.filter;

    activeTab.forEach((tab) => {
      tab.classList.add("active");
    });

    activeTab.forEach((tab) => {
      if (tab.dataset.filer === projects || projects == "*") {
        setTimeout(() => {
          tab.classList.remove("active");
        }, 80);
      }
    });
    // [...activeTab]
    //   .filter((tab) => tab.dataset.filer !== projects)
    //   .forEach((tab) => {
    //     tab.classList.add("hide");
    //   });
  });
});

/* magnify popup plugin */
$(document).ready(function () {
  $(".magnify").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
    },
  });
});

/*slick Slider Plugin */
$(".review").slick({
  arrows: false,
  autoplay: true,
});
