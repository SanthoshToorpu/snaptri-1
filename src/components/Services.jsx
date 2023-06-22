import React from 'react'
import "../components/submenu/Digital_styles.css"
const Services = () => {
  return (
    <section className="section service rounded-3xl bg-tertiary" id="service" aria-label="service">
        <div class="container ">

          <p class="section-subtitle has-before text-center">Our Services</p>

          <h2 class="h2 section-title text-center text-white">Managing you business with our <span class="has-before">best
              service</span></h2>

          <ul className="grid-list p-10">

            <li>
              <div className="service-card bg-secondary" >
              
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
              <div class="service-card   bg-secondary" >

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
              <div class="service-card  bg-secondary" >

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
              <div class="service-card  bg-secondary" >

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
              <div class="service-card  bg-secondary" >

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
              <div class="service-card  bg-secondary" >

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
  )
}

export default Services
