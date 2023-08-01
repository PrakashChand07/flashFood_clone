
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar_main");
    const offset = 60; 
    if (window.scrollY > offset) {
      navbar.classList.add("no-box-shadow");
    } else {
      navbar.classList.remove("no-box-shadow");
    }
  });
  
 
 
 
 function toggleHiddenText() {
    var hiddenText = document.getElementById("hiddenText");
    const textElement = document.getElementById("toggleButton");
    hiddenText.classList.toggle("hidden");
    if (textElement.innerText === "see more") {
        textElement.innerText = "see less";
      } else {
        textElement.innerText = "see more";
      }
  }

  const toggleBtn = document.getElementById('barBtn');
  const elementToToggle = document.getElementById('navbarToggle');
  toggleBtn.addEventListener('click', function() {
    elementToToggle.classList.toggle('hidden');
  });
