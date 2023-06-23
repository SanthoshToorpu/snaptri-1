import React from 'react'
import Navbar from "../Navbar"
import "./Digital_styles.css"
import { feature, hero, serviceicon1, serviceicon2, serviceicon3, serviceicon4, serviceicon5, serviceicon6 } from './digital_assets/images'
import { RocketSharp, PeopleSharp, HeadsetSharp, PlayOutline, PhonePortrait, CallOutline, Search, LogoInstagram } from 'react-ionicons'
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
            Choose us for digital marketing because we offer a team of experienced experts who will create customized strategies tailored to your business goals. Our comprehensive services cover SEO, social media marketing, content creation, paid advertising, and email marketing, ensuring all your needs are met in one place.
            </p>

            <div className="wrapper">
              <a href="#" className="btn btn-primary has-before has-after">How It Works</a>

              <button className="hero-btn" aria-label=" promo">
                <CallOutline />

                <span className="span"><p className='text-'>Contact Us</p></span>
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
                  <Search />
                </div>

                <div className='flex flex-col'>
                <h3 className="h3">
                  <a href="#" className="card-title">Search Engine Optimization (SEO)</a>
                  <p className='text-sm pt-5 text-gray-500 font-light'> Improving website visibility and rankings on search engines through organic tactics and optimizations.</p>
                </h3>
                </div>
              </div>
            </li>

            <li>
              <div className="service-card" style={{color:" 267, 76%, 57%" }}>

                <div className="card-icon">
                  <p className='text-xl'>$</p>
                </div>

                <div className='flex flex-col'>
                <h3 className="h3">
                  <a href="#" className="card-title">Pay-per-Click (PPC) Advertising</a>
                  <p className='text-sm pt-5 text-gray-500 font-light'> Online advertising model where advertisers pay when users click on their ads.</p>
                </h3>
                </div>

              </div>
            </li>

            <li>
              <div className="service-card" style={{color:" 17, 100%, 68%" }}>

                <div className="card-icon">
                  <img src={serviceicon3} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <div className='flex flex-col'>
                <h3 className="h3">
                  <a href="#" className="card-title">Social Media Marketing</a>
                  <p className='text-sm pt-5 text-gray-500 font-light'>  Promoting brands, products, or services through social media platforms to reach and engage target audiences</p>
                </h3>
                </div>

              </div>
            </li>

            <li>
              <div className="service-card" style={{color:" 343, 98%, 60%" }}>

                <div className="card-icon">
                  <LogoInstagram />
                </div>

                <div className='flex flex-col'>
                <h3 className="h3">
                  <a href="#" className="card-title">Content Marketing</a>
                  <p className='text-sm pt-5 text-gray-500 font-light'> Creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience.</p>
                </h3>
                </div>

              </div>
            </li>

            <li>
              <div className="service-card" style={{color:" 210, 100%, 53" }}>

                <div className="card-icon">
                  <img src={serviceicon5} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <div className='flex flex-col'>
                <h3 className="h3">
                  <a href="#" className="card-title">Email Marketing</a>
                  <p className='text-sm pt-5 text-gray-500 font-light'>  Sending targeted emails to a list of subscribers to promote products, services, or engage with customers.</p>
                </h3>
                </div>

              </div>
            </li>

            <li>
              <div className="service-card" style={{color:" 157, 89%, 44%" }}>

                <div className="card-icon">
                  <img src={serviceicon6} width="30" height="30" loading="lazy"
                    alt="service icon" />
                </div>

                <div className='flex flex-col'>
                <h3 className="h3">
                  <a href="#" className="card-title">Search Engine Optimization (SEO)</a>
                  <p className='text-sm pt-5 text-gray-500 font-light'> Improving website visibility and rankings on search engines through organic tactics and optimizations.</p>
                </h3>
                </div>

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
      {/* <Footer /> */}
    </div>
  )
}

export default DigitalMarketing
