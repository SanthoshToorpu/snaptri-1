import React from 'react'
import Navbar from "../Navbar"
import "./Digital_styles.css"
import { feature, hero, serviceicon1, serviceicon2, serviceicon3, serviceicon4, serviceicon5, serviceicon6 } from './digital_assets/images'
import { RocketSharp, PeopleSharp, HeadsetSharp } from 'react-ionicons'
import Footer from './Footer'

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
          <img src={hero} style={{display:"block"}} className='p-5' alt="hero banner" />

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
              <div class="service-card" style={{color:" 174, 77%, 50%" }}>

                <div class="card-icon">
                  <img src={serviceicon1} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Product Management</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style={{color:" 267, 76%, 57%" }}>

                <div class="card-icon">
                  <img src={serviceicon2} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Web & Mobile Development</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style={{color:" 17, 100%, 68%" }}>

                <div class="card-icon">
                  <img src={serviceicon3} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Fast Customer Support</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style={{color:" 343, 98%, 60%" }}>

                <div class="card-icon">
                  <img src={serviceicon4} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Human Resources</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style={{color:" 210, 100%, 53" }}>

                <div class="card-icon">
                  <img src={serviceicon5} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Design and Vreatives</a>
                </h3>

              </div>
            </li>

            <li>
              <div class="service-card" style={{color:" 157, 89%, 44%" }}>

                <div class="card-icon">
                  <img src={serviceicon6} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 class="h3">
                  <a href="#" class="card-title">Meketing and Communication</a>
                </h3>

              </div>
            </li>         

          </ul>

        </div>
      </section>
      <section class="section feature" id="feature" aria-label="feature">
        <div class="container">

          <figure class="feature-banner">
            <img src={feature} width="582" height="585" loading="lazy" alt="feature banner"
              class="w-100" />
          </figure>

          <div class="feature-content">

            <p className="section-subtitle has-before text-4xl" >Why Choose us</p>

            <h2 className="h2 section-title text-5xl">
              Specialist in aviding clients of financial <span class="has-before">challenges</span>
            </h2>

            <ul class="feature-list">

              <li>
                <div class="feature-card">

                  <div class="card-icon" style={{color: "174, 77%, 50%"}}>
                    <RocketSharp/>
                  </div>

                  <div>
                    <h3 className="h3 card-title text-4xl">Fast working process</h3>

                    <p className="text-black text-xl pt-5">
                      At Pixology we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div class="feature-card">

                  <div class="card-icon" style={{color: "241, 77%, 63%"}}>
                    <PeopleSharp />
                  </div>

                  <div>
                    <h3 className="h3 card-title text-4xl">Fast working process</h3>

                    <p className="text-black text-xl pt-5">
                      At Pixology we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div class="feature-card">

                  <div class="card-icon" style={{color: "343, 98%, 60%"}}>
                    <HeadsetSharp />
                  </div>

                  <div>
                    <h3 className="h3 card-title text-4xl">Fast working process</h3>

                    <p className="text-black text-xl pt-5">
                      At Pixology we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>

        </article>
      </main>
      <Footer />
    </div>
  )
}

export default DigitalMarketing
