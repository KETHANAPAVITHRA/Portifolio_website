$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
      "Fullstack Java Developer",
      "Software Developer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
	"Full Stack Java Developer",
      "Software Developer",
      "Full Stack Developer",
      
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  //  Owl Carousel  //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});




    document.getElementById("downloadButton").addEventListener("click", function() {
        var link = document.createElement('a');
        link.href = 'Kethana_Pavithra_Resume.pdf'; // Replace with the actual path to your CV file
        link.download = 'YourCVFileName.pdf'; // Replace with the desired name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });


    document.getElementById("viewResumeForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        window.open('Kethana_Pavithra_Resume.pdf', '_blank'); // Open PDF in new tab
    });


document.getElementById("viewPdfButton").addEventListener("click", function() {
    window.open("/home/aha123/Desktop/portfolio/Kethana_Pavithra_Resume.pdf", "_blank");
});







