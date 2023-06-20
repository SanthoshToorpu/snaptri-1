import React from 'react'
import Navbar from '../Navbar'
import ITstyles from "./ITstyles.css"
// import { PlayCircleIcon } from "@heroicons/24/outline";



const ITServices = () => {
  return (
    <div >
        <Navbar/>        
        <main>
    <article>

      <section class="section hero" id="home" aria-label="hero">
        <div class="container">

          <div class="hero-content">

            <p class="hero-subtitle has-before" style={{padding:"15px", fontSize:"30px"}}>IT SERVICES</p>

            <h1 className='text-black text-5xl py-5'>Smart Ideas for your Brand are Here</h1>

            <p class="hero-text" style={{fontSize:"15px"}}>
            Snaptri is a leading IT company in India that has made significant contributions to the growth of the country's IT sector. With a dedicated and skilled workforce, Snaptri has been instrumental in driving the industry forward, resulting in an impressive annual average growth rate of 28-30% over the past decade.
            </p>

            <div class="btn-group">
              <a href="#" class="btn btn-primary" style={{fontSize:"15px"}}>Discover More</a>

              <button class="flex-btn">
                <div class="btn-icon">
                  <ion-icon name="play" aria-hidden="true"></ion-icon>
                </div>

                <span class="span" style={{fontSize:"15px"}}>How it works</span>
              </button>
            </div>

          </div>
         <img src="src\components\submenu\assets\images\hero-banner.png" width="650" height="650" alt="hero banner" className='rounded-full' />
          

        </div>
      </section>


      <section className="section about" id="about" aria-label="about" style={{padding : "100px"}}>
        <div class="container">
          
            <img src="src\components\submenu\assets\images\about-banner.png" width="700"/>
          

          <div class="about-content">

            <p className='text-black text-3xl py-'>We create some things,<br/> Design for your success future.</p>

            <p className="text-black py-10 text-base">
            The success of Snaptri can be attributed to its unwavering focus on quality and innovation. By providing exceptional IT-enabled services, the company has been able to meet the diverse needs of both individuals and organizations. With a wide range of offerings, including software solutions, network solutions, quality assurance and testing, as well as application maintenance and support, Snaptri has established itself as a reliable and trusted partner for businesses across various sectors.

            </p>

            <ul class="about-list">

              <li class="has-before" style={{color:"#2b2b2b", fontSize:"15px"}}>
                Price of additi Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque officiis, expedita aspernatur adipisci illo?
              </li>

              <li class="has-before" style={{color:"#2b2b2b", fontSize:"15px"}}>
                Transportation co Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque officiis, expedita aspernatur adipisci illo?
              </li>

              <li class="has-before" style={{color:"#2b2b2b", fontSize:"15px"}}>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex atque officiis, expedita aspernatur adipisci illo?
              </li>

            </ul>

            {/* <div class="btn-group">
              <a href="#" class="btn btn-primary" style={{fontSize:"20px"}}>Know More</a>

              <button class="flex-btn">
                <div class="btn-icon">
                  <ion-icon name="medal-outline" aria-hidden="true"></ion-icon>
                </div>

                <span class="span">10+ Years Experience</span>
              </button>
            </div> */}

          </div>  

        </div>
      </section>

      <section class="section service" id="services" aria-label="service">
        <div class="container">

          <p class="section-subtitle text-center" style={{fontSize:"15px"}}>-What We Offer-</p>

          <h2 class="h2 section-title text-center" style={{fontSize:"45px"}}>Our Creative Services</h2>

          <p class="section-text text-center" style={{color:"#2b2b2b"}}>
            Get the most of reduction in your team’s operating costs for the whole product which creates amazing UI/UX
            experiences.
          </p>

          <ul class="grid-list text-base" style={{padding:"45px"}}>

            <li>
              <div class="service-card has-after" style={{maxWidth:"80vh"}}>

               {/* cardicon class unde */}
                  <img src="src\components\submenu\assets\images\service-1.png" width="140" height="140" loading="lazy"
                    alt="UI/UX Creative Design" class="img" />
               

                <div class="card-content">

                  <h3 class="h3 card-title">UI/UX Creative Design</h3>

                  <p class="card-text text-black">
                    dive into thousands designs that our team provides.
                  </p>

                  {/* <a href="#" class="btn-link">
                    <span class="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a> */}

                </div>

              </div>
            </li>

            <li>
              <div class="service-card has-after">

                {/* <figure class="card-icon"> */}
                  <img src="src\components\submenu\assets\images\service-2.png" width="140" height="140" loading="lazy" alt="App Development"
                    class="img" />
               

                <div class="card-content">

                  <h3 class="h3 card-title">App Development</h3>

                  <p class="card-text text-black">
                    create app of your choice,give us the outline we will provide you the output  
                  </p>

                  {/* <a href="#" class="btn-link">
                    <span class="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a> */}

                </div>

              </div>
            </li>

            <li>
              <div class="service-card has-after">

                {/* <figure class="card-icon"> */}
                  <img src="src\components\submenu\assets\images\service-3.png" width="140" height="140" loading="lazy"
                    alt="Professional Content Writer" class="img" />
               

                <div class="card-content text-black">

                  <h3 class="h3 card-title">Professional Content Writer</h3>

                  <p class="card-text text-black">
                  Whether You Need Someone to Write Regular Blog Posts, Tutorials, or Reviews, we Can Help.Grow Your Business with our Content Writing services.
                  </p>

                  {/* <a href="#" class="btn-link">
                    <span class="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a> */}

                </div>

              </div>
            </li>

            <li>
              <div class="service-card has-after">

                {/* <figure class="card-icon"> */}
                  <img src="src\components\submenu\assets\images\service-4.png" width="140" height="140" loading="lazy" alt="Graphic Design"
                    class="img" />
                

                <div class="card-content">

                  <h3 class="h3 card-title">Graphic Design</h3>

                  <p class="card-text text-black ">
                  Connect with experienced Graphic Designer for your projects. Post your requirements & Get competitive pricing from Graphic Designer in minutes!
                  </p>

                  {/* <a href="#" class="btn-link">
                    <span class="span">Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a> */}

                </div>

              </div>
            </li>

          </ul>

          <a href="#" class="btn btn-primary">Get Started</a>

        </div>
      </section>

      <section class="section features" id="features" aria-label="features">
        <div class="container">

          <p class="section-subtitle text-center">-Why Choose Us-</p>

          <h2 class="h2 section-title text-center">Reasons to Choose Us</h2>

          <p class="section-text text-center">
            Get the most of reduction in your team’s operating costs for the whole product which creates amazing UI/UX
            experiences.
          </p>

          <ul class="grid-list">

            <li>
              <div class="features-card">

                <data class="card-number" value="01">01</data>

                <h3 class="h3 card-title">Free Icon Plugin</h3>

                <p class="card-text ">
                  surf into millions of custom icons that suits you and your bussines
                </p>

              </div>
            </li>

            <li>
              <div class="features-card">

                <data class="card-number" value="02">02</data>

                <h3 class="h3 card-title">Free 6 Month Support</h3>

                <p class="card-text">
                  let us engage with your bussiness,help you out
                </p>

              </div>
            </li>

            <li>
              <div class="features-card">

                <data class="card-number" value="03">03</data>

                <h3 class="h3 card-title">Customer Strategy</h3>

                <p class="card-text">
                Affordable Consulting Services, get an effective marketing plan to reach out.
                </p>

              </div>
            </li>

            <li>
              <div class="features-card">

                <data class="card-number" value="04">04</data>

                <h3 class="h3 card-title">Best Premimum Image</h3>

                <p class="card-text">
                Find Premium Service stock images in HD , illustrations and vectors in the Shutterstock collection.
                </p>

              </div>
            </li>

            <li>
              <div class="features-card">

                <data class="card-number" value="05">05</data>

                <h3 class="h3 card-title">Most Advanced Features</h3>

                <p class="card-text">
                  our team uses latest tools and best methodologies for efficent output
                </p>

              </div>
            </li>

            <li>
              <div class="features-card">

                <data class="card-number" value="06">06</data>

                <h3 class="h3 card-title">Very Reasonable Price</h3>

                <p class="card-text">
                  we provide the best quality to price ratio
                </p>

              </div>
            </li>

          </ul>

        </div>
      </section>


      <section class="section faq" aria-label="frequently asked questions">
        <div class="container">

          <div class="title-wrapper">
            <h2 class="h2 section-title">Discover Frequently Asked Questions?</h2>

            <a href="#" class="btn btn-primary">Work Together</a>
          </div>

          <ul class="grid-list">

            <li>
              <div class="faq-card">

                <button class="card-action" data-accordion-action>
                  <h3 class="h3 card-title">
                    01. Curious about how to build your own UX strategy? Here are five simple steps.
                  </h3>

                  <div class="action-icon">
                    <ion-icon name="add-outline" aria-hidden="true" class="open"></ion-icon>
                    <ion-icon name="remove-outline" aria-hidden="true" class="close"></ion-icon>
                  </div>
                </button>

                <div class="card-content">
                  <p>
                    Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae
                    posuere semper, libero ex
                    hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit
                    amet condimentum
                    erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in
                    luctus. Nullam
                    tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet.
                    Sed varius, diam
                    vitae posuere semper.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div class="faq-card">

                <button class="card-action" data-accordion-action>
                  <h3 class="h3 card-title">
                    02. Where Could a Career in UX Take You? Agency vs. In-House vs. Freelance?
                  </h3>

                  <div class="action-icon">
                    <ion-icon name="add-outline" aria-hidden="true" class="open"></ion-icon>
                    <ion-icon name="remove-outline" aria-hidden="true" class="close"></ion-icon>
                  </div>
                </button>

                <div class="card-content">
                  <p>
                    Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae
                    posuere semper, libero ex
                    hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit
                    amet condimentum
                    erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in
                    luctus. Nullam
                    tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet.
                    Sed varius, diam
                    vitae posuere semper.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div class="faq-card">

                <button class="card-action" data-accordion-action>
                  <h3 class="h3 card-title">
                    03. What Is a Problem Statement in UX? (And How To Write One?
                  </h3>

                  <div class="action-icon">
                    <ion-icon name="add-outline" aria-hidden="true" class="open"></ion-icon>
                    <ion-icon name="remove-outline" aria-hidden="true" class="close"></ion-icon>
                  </div>
                </button>

                <div class="card-content">
                  <p>
                    Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae
                    posuere semper, libero ex
                    hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit
                    amet condimentum
                    erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in
                    luctus. Nullam
                    tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet.
                    Sed varius, diam
                    vitae posuere semper.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div class="faq-card">

                <button class="card-action" data-accordion-action>
                  <h3 class="h3 card-title">
                    04. There are several techniques UX designers employ to arrive at a succinct?
                  </h3>

                  <div class="action-icon">
                    <ion-icon name="add-outline" aria-hidden="true" class="open"></ion-icon>
                    <ion-icon name="remove-outline" aria-hidden="true" class="close"></ion-icon>
                  </div>
                </button>

                <div class="card-content">
                  <p>
                    Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae
                    posuere semper, libero ex
                    hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit
                    amet condimentum
                    erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in
                    luctus. Nullam
                    tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet.
                    Sed varius, diam
                    vitae posuere semper.
                  </p>
                </div>

              </div>
            </li>

            <li>
              <div class="faq-card">

                <button class="card-action" data-accordion-action>
                  <h3 class="h3 card-title">
                    05. What are the obstacles users are facing? What are they trying to do?
                  </h3>

                  <div class="action-icon">
                    <ion-icon name="add-outline" aria-hidden="true" class="open"></ion-icon>
                    <ion-icon name="remove-outline" aria-hidden="true" class="close"></ion-icon>
                  </div>
                </button>

                <div class="card-content">
                  <p>
                    Morbi aliquam quis quam in luctus. Nullam tincidunt pulvinar imperdiet. Sed varius, diam vitae
                    posuere semper, libero ex
                    hendrerit nunc, ac sagittis eros metus ut diam. Donec a nibh in libero maximus vehicula. Etiam sit
                    amet condimentum
                    erat. Pellentesque ultrices sagittis turpis, quis tempus ante viverra et.Morbi aliquam quis quam in
                    luctus. Nullam
                    tincidunt pulvinar imperdiet. Sed varius, diam vitae posuere semper, tincidunt pulvinar imperdiet.
                    Sed varius, diam
                    vitae posuere semper.
                  </p>
                </div>

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

export default ITServices
