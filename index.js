function navUp() {
  document.getElementById("navbar").classList.add("scrolled-down");
  document.getElementById("navbar").classList.remove("scrolled-up");
  document.getElementById("contentMask").style.height = "120px";
}

function navDown() {
  document.getElementById("navbar").classList.add("scrolled-up");
  document.getElementById("navbar").classList.remove("scrolled-down");
  document.getElementById("contentMask").style.height = "169px";
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerWidth > 768) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      navUp();
    } else {
      navDown();
    }
  } else {
    navDown();
  }
}

function triggerBtn() {
  var triggetContact = document.getElementById("nav-contact-tab");
  triggetContact.click();
}

document.getElementById("logo").addEventListener("mouseover", function () {
  if (window.innerWidth > 768) {
    navDown();
  }
});

fetch("home.html")
  .then((response) => response.text())
  .then((html) => (document.getElementById("nav-home").innerHTML = html));

fetch("events.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("nav-events").innerHTML = html;
  });

fetch("menu.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("nav-menu").innerHTML = html;
  });

fetch("contact.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("nav-contact").innerHTML = html;
  });
