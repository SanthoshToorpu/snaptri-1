import React from 'react'
import "../components/submenu/Digital_styles.css"
import { serviceicon1, serviceicon2, serviceicon3, serviceicon4, serviceicon5, serviceicon7 } from './submenu/digital_assets/images'
import { SectionWrapper } from '../hoc'
const Services = () => {
  return (
    <section className="section service rounded-3xl bg-tertiary bg-opacity-0" id="service" aria-label="service">
        <div className="container ">

          <p className="section-subtitle has-before text-center">Our Services</p>

          <h2 className="h2 section-title text-center text-secondary">Managing your business with our <span className="has-before">best
              service</span></h2>

          <ul className="grid gap-4 sm:grid-cols-2">

            <li >
              <div className="service-card bg-secondary bg-opacity-50" >
              
                <div className="card-icon">
                  <img src={serviceicon1} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title text-black">Google Ads</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card bg-secondary bg-opacity-50" >

                <div className="card-icon">
                  <img src={serviceicon2} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title text-blackblack">Search Engine Optimization</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card  bg-secondary bg-opacity-50" >

                <div className="card-icon">
                  <img src={serviceicon3} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title text-black">Fast Customer Support</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card  bg-secondary bg-opacity-50" >

                <div className="card-icon">
                  <img src={serviceicon4} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title text-black">Data Analysis</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card  bg-secondary bg-opacity-50" >

                <div className="card-icon">
                  <img src={serviceicon5} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title text-black">Social Media Marketing.</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card  bg-secondary bg-opacity-50" >

                <div className="card-icon">
                  <img src={serviceicon7} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title text-black">Search Engine Marketing/Pay-per-Click.</a>
                </h3>

              </div>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default SectionWrapper(Services, "services")
