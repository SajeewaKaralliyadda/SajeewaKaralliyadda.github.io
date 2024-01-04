/*------------------------------navigation--------------------------------------*/

//navigation page scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function (e)
        {e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior:'smooth'
        });
    });
});


/*------------------------------back to top button--------------------------------------*/

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  // Show or hide the button based on scroll position
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    var btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }

/*------------------------------footer--------------------------------------*/ 

//copyright year update
document.getElementById('currentYear').innerHTML = new Date().getFullYear();