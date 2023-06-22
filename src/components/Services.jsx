import React from 'react'
import "../components/submenu/Digital_styles.css"
const Services = () => {
  return (
    <section className="section service rounded-3xl bg-tertiary" id="service" aria-label="service">
        <div className="container ">

          <p className="section-subtitle has-before text-center">Our Services</p>

          <h2 className="h2 section-title text-center text-white">Managing you business with our <span className="has-before">best
              service</span></h2>

          <ul className="grid-list p-10">

            <li>
              <div className="service-card bg-secondary" >
              
                <div className="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-1.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Google Ads</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card   bg-secondary" >

                <div className="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-2.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Search Engine Optimization</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card  bg-secondary" >

                <div className="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-3.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Fast Customer Support</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card  bg-secondary" >

                <div className="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-4.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Data Analysis</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card  bg-secondary" >

                <div className="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-5.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Social Media Marketing.</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card  bg-secondary" >

                <div className="card-icon">
                  <img src="src\components\submenu\digital_assets\images\service-icon-6.png" width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Search Engine Marketing/Pay-per-Click.</a>
                </h3>

              </div>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Services
