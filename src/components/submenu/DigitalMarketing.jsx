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
        <div className="container">

          <div className="hero-content">

            <h1 className="h1 hero-title text-5xl font-sans font-bold "  >
              Building Digital <span className="has-before">Product</span>, Brand and Experience
            </h1>

            <p className="hero-text text-lg">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ex earum vel consectetur odio maxime dolor exercitationem ipsum magnam, saepe sit ipsa voluptas accusantium alias quidem, deserunt totam a praesentium!
            </p>

            <div className="wrapper">
              <a href="#" className="btn btn-primary has-before has-after">How It Works</a>

              <button className="hero-btn" aria-label=" promo">
                <ion-icon name="play-outline" aria-hidden="true"></ion-icon>

                <span className="span">Behind the scenes</span>
              </button>
            </div>

            {/* <ul className="social-list">

               <li>
                <a href="#" className="social-link" style="--color: hsl(241, 77%, 63%);">
                  <ion-icon name="logo-facebook"></ion-icon>

                  <span className="span">Facebook</span>
                </a>
              </li>

              <li>
                <a href="#" className="social-link" style="--color: hsl(0, 100%, 50%);">
                  <ion-icon name="logo-youtube"></ion-icon>

                  <span className="span">Youtube</span>
                </a>
              </li>

              <li>
                <a href="#" className="social-link" style="--color: hsl(203, 89%, 53%);">
                  <ion-icon name="logo-twitter"></ion-icon>

                  <span className="span">Twitter</span>
                </a>
              </li> 

            </ul> */}

          </div>
          <img src={hero} style={{display:"block"}} className='p-5' alt="hero banner" />

          {/* <figure className="hero-banner"> */}
                     {/* </figure> */}

        </div>
      </section>

      <section className="section service" id="service" aria-label="service">
        <div className="container">

          <p className="section-subtitle has-before text-center">Our Services</p>

          <h2 className="h2 section-title text-center">Managing you business with our <span className="has-before">best
              service</span></h2>

          <ul className="grid-list">

            <li>
              <div className="service-card" style={{color:" 174, 77%, 50%" }}>

                <div className="card-icon">
                  <img src={serviceicon1} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Product Management</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card" style={{color:" 267, 76%, 57%" }}>

                <div className="card-icon">
                  <img src={serviceicon2} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Web & Mobile Development</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card" style={{color:" 17, 100%, 68%" }}>

                <div className="card-icon">
                  <img src={serviceicon3} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Fast Customer Support</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card" style={{color:" 343, 98%, 60%" }}>

                <div className="card-icon">
                  <img src={serviceicon4} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Human Resources</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card" style={{color:" 210, 100%, 53" }}>

                <div className="card-icon">
                  <img src={serviceicon5} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Design and Vreatives</a>
                </h3>

              </div>
            </li>

            <li>
              <div className="service-card" style={{color:" 157, 89%, 44%" }}>

                <div className="card-icon">
                  <img src={serviceicon6} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <h3 className="h3">
                  <a href="#" className="card-title">Meketing and Communication</a>
                </h3>

              </div>
            </li>         

          </ul>

        </div>
      </section>
      <section className="section feature" id="feature" aria-label="feature">
        <div className="container">

          <figure className="feature-banner">
            <img src={feature} width="582" height="585" loading="lazy" alt="feature banner"
              className="w-100" />
          </figure>

          <div className="feature-content">

            <p className="section-subtitle has-before text-4xl" >Why Choose us</p>

            <h2 className="h2 section-title text-5xl">
              Specialist in aviding clients of financial <span className="has-before">challenges</span>
            </h2>

            <ul className="feature-list">

              <li>
                <div className="feature-card">

                  <div className="card-icon" style={{color: "174, 77%, 50%"}}>
                    <RocketSharp/>
                  </div>

                  <div>
                    <h3 className="h3 card-title text-4xl">Fast working process</h3>

                    <p className="text-black text-xl pt-5">
                      At Snaptri we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div className="card-icon" style={{color: "241, 77%, 63%"}}>
                    <PeopleSharp />
                  </div>

                  <div>
                    <h3 className="h3 card-title text-4xl">Fast working process</h3>

                    <p className="text-black text-xl pt-5">
                      At lorems we specialize in designing, building, shipping and scaling beautifu.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div className="feature-card">

                  <div className="card-icon" style={{color: "343, 98%, 60%"}}>
                    <HeadsetSharp />
                  </div>

                  <div>
                    <h3 className="h3 card-title text-4xl">Fast working process</h3>

                    <p className="text-black text-xl pt-5">
                      At loremdd we specialize in designing, building, shipping and scaling beautifu.
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
