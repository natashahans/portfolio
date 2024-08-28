let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// MODAL TOGGLE
var titles = document.querySelectorAll(".service-title");
var service_descriptions = document.querySelectorAll(".service-description");
var icons = document.querySelectorAll(".bx-plus");
var headings = document.querySelectorAll(".service-title h2");

titles.forEach((title, index) => {
  title.addEventListener("click", () => {
    var isActive =
      service_descriptions[index].classList.contains("active-desc");

    service_descriptions.forEach((desc) => {
      desc.classList.remove("active-desc");
    });
    icons.forEach((icon) => {
      icon.classList.remove("bx-minus");
      icon.classList.add("bx-plus");
    });
    headings.forEach((heading) => {
      heading.classList.remove("active-heading");
    });

    if (!isActive) {
      service_descriptions[index].classList.add("active-desc");
      icons[index].classList.remove("bx-plus");
      icons[index].classList.add("bx-minus");
      headings[index].classList.add("active-heading");
    }
  });
});
