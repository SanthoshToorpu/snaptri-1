import React from 'react'
import Navbar from '../Navbar'
import ITstyles from "./ITstyles.css"
import Footer from './Footer'
import { aboutbanner, herobanner, service1, service2, service3, service4 } from './assets/images'
// import { PlayCircleIcon } from "@heroicons/24/outline";



const ITServices = () => {
  return (
    <div >
        <Navbar/>        
        <main>
    <article>

      <section className="section hero" id="home" aria-label="hero">
        <div className="container">

          <div className="hero-content">

            <p className="hero-subtitle has-before" style={{padding:"15px", fontSize:"30px"}}>IT SERVICES</p>

            <h1 className='text-black text-5xl py-5'>Smart Ideas for your Brand are Here</h1>

            <p className="hero-text" style={{fontSize:"15px"}}>
            Snaptri is a leading IT company in India that has made significant contributions to the growth of the country's IT sector. With a dedicated and skilled workforce, Snaptri has been instrumental in driving the industry forward, resulting in an impressive annual average growth rate of 28-30% over the past decade.
            </p>

            <div className="btn-group">
              <a href="#" className="btn btn-primary" style={{fontSize:"15px"}}>Discover More</a>

              <button className="flex-btn">
                <div className="btn-icon">
                  <ion-icon name="play" aria-hidden="true"></ion-icon>
                </div>

                <span className="span" style={{fontSize:"15px"}}>How it works</span>
              </button>
            </div>

          </div>
         <img src={herobanner} width="650" height="650" alt="hero banner" className='rounded-full' />
          

        </div>
      </section>


      <section className="section about" id="about" aria-label="about" style={{padding : "100px"}}>
        <div className="container">
          
            <img src={aboutbanner} width="700"/>
          

          <div className="about-content">

            <p className='text-black text-3xl py-'>We create some things,<br/> Design for your success future.</p>

            <p className="text-black py-10 text-base">
            The success of Snaptri can be attributed to its unwavering focus on quality and innovation. By providing exceptional IT-enabled services, the company has been able to meet the diverse needs of both individuals and organizations. With a wide range of offerings, including software solutions, network solutions, quality assurance and testing, as well as application maintenance and support, Snaptri has established itself as a reliable and trusted partner for businesses across various sectors.

            </p>

            <ul className="about-list">

              <li className="has-before" style={{color:"#2b2b2b", fontSize:"15px"}}>
                Price of additi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque officiis, expedita aspernatur adipisci illo?
              </li>

              <li className="has-before" style={{color:"#2b2b2b", fontSize:"15px"}}>
                Transportation co Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque officiis, expedita aspernatur adipisci illo?
              </li>

              <li className="has-before" style={{color:"#2b2b2b", fontSize:"15px"}}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque officiis, expedita aspernatur adipisci illo?
              </li>

            </ul>

            {/* <div className="btn-group">
              <a href="#" className="btn btn-primary" style={{fontSize:"20px"}}>Know More</a>

              <button className="flex-btn">
                <div className="btn-icon">
                  <ion-icon name="medal-outline" aria-hidden="true"></ion-icon>
                </div>

                <span className="span">10+ Years Experience</span>
              </button>
            </div> */}

          </div>  

        </div>
      </section>

      <section className="section service" id="services" aria-label="service">
        <div className="container">

          <p className="section-subtitle text-center" style={{fontSize:"15px"}}>-What We Offer-</p>

          <h2 className="h2 section-title text-center" style={{fontSize:"45px"}}>Our Creative Services</h2>

          <p className="section-text text-center" style={{color:"#2b2b2b"}}>
            Get the most of reduction in your team’s operating costs for the whole product which creates amazing UI/UX
            experiences.
          </p>

          <ul className="grid-list text-base" style={{padding:"45px"}}>

            <li>
              <div className="service-card has-after" style={{maxWidth:"80vh"}}>

               {/* cardicon className unde */}
                  <img src={service1} width="140" height="140" loading="lazy"
                    alt="UI/UX Creative Design" className="img" />
               

                <div className="card-content">

                  <h3 className="h3 card-title">UI/UX Creative Design</h3>

                  <p className="card-text text-black">
                    dive into thousands designs that our team provides.
                  </p>

                  {/* <a href="#" className="btn-link">
                    <span className="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a> */}

                </div>

              </div>
            </li>

            <li>
              <div className="service-card has-after">

                {/* <figure className="card-icon"> */}
                  <img src={service2} width="140" height="140" loading="lazy" alt="App Development"
                    className="img" />
               

                <div className="card-content">

                  <h3 className="h3 card-title">App Development</h3>

                  <p className="card-text text-black">
                    create app of your choice,give us the outline we will provide you the output  
                  </p>

                  {/* <a href="#" className="btn-link">
                    <span className="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a> */}

                </div>

              </div>
            </li>

            <li>
              <div className="service-card has-after">

                {/* <figure className="card-icon"> */}
                  <img src={service3} width="140" height="140" loading="lazy"
                    alt="Professional Content Writer" className="img" />
               

                <div className="card-content text-black">

                  <h3 className="h3 card-title">Professional Content Writer</h3>

                  <p className="card-text text-black">
                  Whether You Need Someone to Write Regular Blog Posts, Tutorials, or Reviews, we Can Help.Grow Your Business with our Content Writing services.
                  </p>

                  {/* <a href="#" className="btn-link">
                    <span className="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a> */}

                </div>

              </div>
            </li>

            <li>
              <div className="service-card has-after">

                {/* <figure className="card-icon"> */}
                  <img src={service4} width="140" height="140" loading="lazy" alt="Graphic Design"
                    className="img" />
                

                <div className="card-content">

                  <h3 className="h3 card-title">Graphic Design</h3>

                  <p className="card-text text-black ">
                  Connect with experienced Graphic Designer for your projects. Post your requirements & Get competitive pricing from Graphic Designer in minutes!
                  </p>

                  {/* <a href="#" className="btn-link">
                    <span className="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a> */}

                </div>

              </div>
            </li>

          </ul>

          <a href="#" className="btn btn-primary">Get Started</a>

        </div>
      </section>

      <section className="section features" id="features" aria-label="features">
        <div className="container">

          <p className="section-subtitle text-center">-Why Choose Us-</p>

          <h2 className="h2 section-title text-center">Reasons to Choose Us</h2>

          <p className="section-text text-center">
            Get the most of reduction in your team’s operating costs for the whole product which creates amazing UI/UX
            experiences.
          </p>

          <ul className="grid-list">

            <li>
              <div className="features-card">

                <data className="card-number" value="01">01</data>

                <h3 className="h3 card-title">Free Icon Plugin</h3>

                <p className="card-text ">
                  surf into millions of custom icons that suits you and your bussines
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="02">02</data>

                <h3 className="h3 card-title">Free 6 Month Support</h3>

                <p className="card-text">
                  let us engage with your bussiness,help you out
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="03">03</data>

                <h3 className="h3 card-title">Customer Strategy</h3>

                <p className="card-text">
                Affordable Consulting Services, get an effective marketing plan to reach out.
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="04">04</data>

                <h3 className="h3 card-title">Best Premimum Image</h3>

                <p className="card-text">
                Find Premium Service stock images in HD , illustrations and vectors in the Shutterstock collection.
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="05">05</data>

                <h3 className="h3 card-title">Most Advanced Features</h3>

                <p className="card-text">
                  our team uses latest tools and best methodologies for efficent output
                </p>

              </div>
            </li>

            <li>
              <div className="features-card">

                <data className="card-number" value="06">06</data>

                <h3 className="h3 card-title">Very Reasonable Price</h3>

                <p className="card-text">
                  we provide the best quality to price ratio
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>


      

    </article>
  </main>
  {/* <Footer /> */}

    </div>
  )
}

export default ITServices
