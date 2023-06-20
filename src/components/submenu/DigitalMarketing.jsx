import React from 'react'
import Navbar from "../Navbar"
import "./Digital_styles.css"
const DigitalMarketing = () => {
  return (
    <div>
      <Navbar />
      <main>
        <article>
        <section className="section hero" id="home" aria-label="hero">
        <div class="container">

          <div className="hero-content">

            <h1 className="h1 hero-title text-5xl font-sans font-bold "  >
              Building Digital <span class="has-before">Product</span>, Brand and Experience
            </h1>

            <p className="hero-text text-lg">
              At Pixology we specialize in designing, building, shipping and scaling beautiful, usable products with
              blazing-fast
              efficiency
            </p>

            <div className="wrapper">
              <a href="#" class="btn btn-primary has-before has-after">How It Works</a>

              <button class="hero-btn" aria-label="pixology promo">
                <ion-icon name="play-outline" aria-hidden="true"></ion-icon>

                <span class="span">Behind the scenes</span>
              </button>
            </div>

            {/* <ul class="social-list">

               <li>
                <a href="#" class="social-link" style="--color: hsl(241, 77%, 63%);">
                  <ion-icon name="logo-facebook"></ion-icon>

                  <span class="span">Facebook</span>
                </a>
              </li>

              <li>
                <a href="#" class="social-link" style="--color: hsl(0, 100%, 50%);">
                  <ion-icon name="logo-youtube"></ion-icon>

                  <span class="span">Youtube</span>
                </a>
              </li>

              <li>
                <a href="#" class="social-link" style="--color: hsl(203, 89%, 53%);">
                  <ion-icon name="logo-twitter"></ion-icon>

                  <span class="span">Twitter</span>
                </a>
              </li> 

            </ul> */}

          </div>
          <img src="https://21sagestudios.com/wp-content/uploads/2022/09/hero-5.png" style={{display:"block"}} className='p-5' alt="hero banner" />

          {/* <figure class="hero-banner"> */}
                     {/* </figure> */}

        </div>
      </section>

      <section class="section service" id="service" aria-label="service">
        <div class="container">

          <p class="section-subtitle has-before text-center">Our Services</p>

          <h2 class="h2 section-title text-center">Managing you business with our <span class="has-before">best
              service</span></h2>

          <ul class="grid-list">

            <li>
              <div class="service-card" >
              
                <div class="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-1.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Google Ads</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" >

                <div class="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-2.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Search Engine Optimization</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" >

                <div class="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-3.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Fast Customer Support</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" >

                <div class="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-4.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Data Analysis</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" >

                <div class="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-5.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Social Media Marketing.</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" >

                <div class="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-6.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Search Engine Marketing/Pay-per-Click.</a>
                </h3>

              </div>
            </li>
          </ul>
        </div>
      </section>

        </article>
      </main>
    </div>
  )
}

export default DigitalMarketing
