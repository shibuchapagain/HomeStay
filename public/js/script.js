let dateInput1 = document.getElementById("datePicker1");
let dateInput2 = document.getElementById("datePicker2");

dateInput1.addEventListener("click", () => {
  document.getElementById("datePicker1").type = "date";
});

dateInput2.addEventListener("click", () => {
  document.getElementById("datePicker2").type = "date";
});

const siteHeader = document.getElementById("stickyMessages");
const siteNav = document.getElementById("stickyMessage");

window.onscroll = function () {
  if (
    siteNav.offsetTop < document.documentElement.scrollTop + 26 ||
    siteNav.offsetTop < document.body.scrollTop + 26
  ) {
    siteHeader.setAttribute("class", "sticky");
  }
};

const backToTopButton = document.querySelector("#back-to-top-btn");
// console.log(backToTopButton);
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 250) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
  backToTopButton.style.display = "none";
}

// FOR MESSAGE POP-UP
function openForm() {
  document.getElementById("myForm").style.display = "block";
  // document.querySelector(".messagePopUp").style.display = "block";
}

function closeForm() {
  // document.getElementById(".messagePopUp").style.display = "none";
  document.getElementById("myForm").style.display = "none";
}
