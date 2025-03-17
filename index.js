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
  var triggetContact = document.getElementById("nav-afspraak-tab");
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

fetch("behandelingen.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("nav-behandelingen").innerHTML = html;
  });

  fetch("afspraak.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("nav-afspraak").innerHTML = html;
    addAfsprakenToggleEvents();
  });

function addAfsprakenToggleEvents() {
  document.querySelectorAll(".afspraak-card").forEach(card => {
    const header = card.querySelector(".toggle-header");
    const content = card.querySelector(".afspraak-content");
    const button = card.querySelector(".toggle-btn");

    if (header && content && button) {
      header.addEventListener("click", function () {
        // Sluit alle andere geopende iframes
        document.querySelectorAll(".afspraak-content").forEach(otherContent => {
          if (otherContent !== content) {
            otherContent.style.maxHeight = "0";
            otherContent.style.padding = "0";
            otherContent.classList.remove("show");
          }
        });
        document.querySelectorAll(".toggle-btn").forEach(otherButton => {
          if (otherButton !== button) {
            otherButton.style.transform = "rotate(0deg)";
          }
        });

        // Toggle de huidige iframe
        if (content.classList.contains("show")) {
          content.style.maxHeight = "0";
          content.style.padding = "0";
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.padding = "15px";
        }
        content.classList.toggle("show");
        button.style.transform = content.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
      });
    }
  });
}