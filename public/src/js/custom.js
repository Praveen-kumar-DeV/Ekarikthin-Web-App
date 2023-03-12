
(function ($) {

    "use strict";

    // MENU
    $('.navbar-collapse a').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });

    // CUSTOM LINK
    $('.smoothscroll').click(function () {
        var el = $(this).attr('href');
        var elWrapped = $(el);
        var header_height = $('.navbar').height();

        scrollToDiv(elWrapped, header_height);
        return false;

        function scrollToDiv(element, navheight) {
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop - navheight;

            $('body,html').animate({
                scrollTop: totalScroll
            }, 300);
        }
    });

})(window.jQuery);

let appHeader = `
  <header >
  <nav class="navbar navbar-expand-lg" style="background:black;">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <div class="titlenav">
                            <div class="titlepos">
                                <img src="/favicon.ico" alt="your-image-description" class="titlelogo">
                            </div>
                            <div class="logotext">
                            <p>karikthin</p>
                            </div>      
                        </div>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav align-items-lg-center ms-auto me-lg-4">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="/Events">Events</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="/Gallery">Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/Organisers">Organizers</a>
                            </li>
                         <!--   <li class="nav-item">
                                <a class="nav-link" href="Magazine.pdf" download>E-magazine</a>
                            </li> -->
                            <li class="nav-item">
                                <a href="/register" class=" nav-link">Register</a>
                            </li>
                        </ul>

                        
                    </div>
                </div>
            </nav>
  </header>
  `;
document.getElementById("app-header").innerHTML = appHeader;

let appFooter = `
  <footer class="site-footer">
 
  
  <div class="container">
      <div class="row">
  
          <div class="col-lg-6 col-12 mb-4 pb-2">
              <h5 class="site-footer-title mb-3">Links</h5>
  
              <ul class="site-footer-links">
                  <li>
                      <a href="/Events" class="site-footer-link">Events</a>
                  </li>
                  <li >
                      <a href="/Gallery" class="site-footer-link">Gallery</a>
                  </li>
                  <li >
                      <a href="/Organisers" class="site-footer-link">Organizers</a>
                  </li>
                  
                  <li>
                      <a href="/register" class="site-footer-link">Register</a>
                  </li>
                
              </ul>
          </div>
  
          <div class="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <h5 class="site-footer-title mb-3">Contact</h5>
              <p class="text-white d-flex">
                  <a href="mailto:nitn.ekarikthin@gmail.com" class="site-footer-link">
                    <span style="color:yellow">Email</span>:nitn.ekarikthin@gmail.com
                  </a>
              </p>
              <ul class="social-icon d-flex align-items-center justify-content-flex-start">
              <li class="social-icon-item">
                  <a href="https://www.facebook.com/profile.php?id=100079674564881" class="social-icon-link">
                      <span class="bi-facebook"></span>
                  </a>
              </li>

              <li class="social-icon-item">
                  <a href="https://youtube.com/@Ekarikthin" class="social-icon-link">
                      <span class="bi-youtube"></span>
                  </a>
              </li>

              <li class="social-icon-item">
                  <a href="https://instagram.com/ekarikthin_?igshid=ZDdkNTZiNTM=" class="social-icon-link">
                      <span class="bi-instagram"></span>
                  </a>
              </li>
          </ul>
          </div>
  
          <div class="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
              <h5 class="site-footer-title mb-3">Location</h5>
              <p class="text-white d-flex mt-3 mb-2">
                  National Institute of Technology, Nagaland</p>
                  <p class="text-white d-flex mt-3 mb-2">
                      Chumukedima, Dimapur 797103</p>
                      <p class="text-white d-flex mt-3 mb-2">
                          Nagaland, India</p>
          </div>
      </div>
  </div>
  
 
  </footer>
  <div class="site-footer-bottom">
  <div class="col-12  text-center">
      <p class="copyright-text"> ©Copyright Ekarikthin'23 .All Rights Reserved</p>
      <p class="copyright-text">Designed by students of Nit Nagaland</p>
  </div>
</div>
  
  `;
document.getElementById("app-footer").innerHTML = appFooter;




