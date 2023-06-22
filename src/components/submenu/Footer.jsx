import React from 'react'
import { LogoFacebook, LogoInstagram, LogoTwitter, LogoYoutube } from 'react-ionicons'

const Footer = () => {
  return (
    <div>
      <footer class="footer px-40">
    <div class="container">

      <div class="footer-top section">

        <div class="footer-brand">

          <p class="footer-list-title">About Snaptri</p>

          <p class="footer-text">
            A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci tationulla
          </p>

          <ul class="social-list">

            <li>
              <a href="#" class="social-link">
                <LogoYoutube />
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <LogoTwitter />
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <LogoFacebook />
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                < LogoInstagram />
              </a>
            </li>

          </ul>

        </div>

        <ul class="footer-list">

          <li>
            <p className="footer-list-title text-xl">Usefull Links</p>
          </li>

          <li>
            <a href="#" className="footer-link text-sm">Contact us</a>
          </li>

          <li>
            <a href="#" className="footer-link text-sm">How it Works</a>
          </li>

          <li>
            <a href="#" className="footer-link text-sm">Create</a>
          </li>

          <li>
            <a href="#" className="footer-link text-sm">Explore</a>
          </li>

          <li>
            <a href="#" className="footer-link text-sm">Terms & Services</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title text-xl">Community</p>
          </li>

          <li>
            <a href="#" className="footer-link text-sm">Help Center</a>
          </li>

          <li>
            <a href="#" className="footer-link text-sm">Partners</a>
          </li>

          <li>
            <a href="#" className="footer-link text-sm">Suggestions</a>
          </li>

          <li>
            <a href="#" className="footer-link text-sm">Blog</a>
          </li>

          <li>
            <a href="#" className="footer-link text-sm">Newsletters</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title text-xl">Instagram post</p>
          </li>

          <li>
            <ul class="insta-post">

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-1.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-2.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-3.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-4.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-5.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="./assets/images/insta-post-6.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

            </ul>
          </li>

        </ul>

      </div>

      <div class="footer-bottom">

        <p className="copyright text-xl">
          &copy; 2023 Snaptri technologies. All Rights Reservec 
        </p>

        <ul class="footer-bottom-list">

          <li>
            <a href="#" className="footer-bottom-link text-xl">Terms and conditions</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link text-xl">Privacy policy</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link text-xl">Contact Us</a>
          </li>

        </ul>

      </div>

    </div>
  </footer>

    </div>
  )
}

export default Footer
