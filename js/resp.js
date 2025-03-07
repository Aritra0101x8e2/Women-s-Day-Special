function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
function readMore(city) {
    let dots = document.querySelector(`.card[data-city="${city}"] .dots`);
    let moreText = document.querySelector(`.card[data-city="${city}"] .more`); 
    let btnText = document.querySelector(`.card[data-city="${city}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less"; 
        moreText.style.display = "inline";
    }
}
var slideshowContainers = document.getElementsByClassName("slideshow-container");

for(let s = 0; s < slideshowContainers.length; s++) {      
    var cycle = slideshowContainers[s].dataset.cycle;
   
    var slides = slideshowContainers[s].querySelectorAll('.mySlides');
    var slideIndex = 0;
    
    showSlides(slides, slideIndex, cycle);
};

function showSlides(slides, slideIndex, cycle) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    slides[slideIndex - 1].style.display = "block";
    /* Calling same function, but with new parameters and cycle time */
    setTimeout(function() {
        showSlides(slides, slideIndex, cycle)
    }, cycle);
};














document.querySelector(".dropbtns").addEventListener("click", function() {
    document.querySelector(".dropdowns-contents").classList.toggle("show");
  });
  window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdownss = document.querySelectorAll(".dropdowns-contents");
      for (var i = 0; i < dropdownss.length; i++) {
        var openDropdown = dropdownss[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  });
 

 

  
  
  




  
  
  