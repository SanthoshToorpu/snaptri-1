import React from 'react'
import Navbar from '../Navbar'
import { about1, aboutabs1, aboutabs2, aboutbanner, ctabanner, ctabg, heroabs1, heroabs2, herobanner, herobg } from './project_assets'
import { ArrowForwardOutline, BriefcaseOutline, ColorPaletteOutline, FileTrayOutline, HeadsetOutline, LaptopOutline, LayersOutline, MedkitOutline, ServerOutline, ThumbsUpOutline } from 'react-ionicons'
import "./Projectstyles.css"
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Footer from './Footer'

const ProjectManagement = () => {
  return (
    <div>
        <Navbar/>
      <main>
        <article>
        <section class="hero pt-0 " id="home" aria-label="hero" >
        <div class="container">

          <div class="hero-content mt-40 md:mr-5 ">

            <p class="section-subtitle md:text-md">Better Learning Future With Us</p>

            <h2 class="h1 hero-title md:text-7xl">Education Is About Academic Excellence</h2>

            <p class="hero-text md:text-3xl">
              Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet ipsum a, dapibus porta velit.
            </p>

            <a href="#" class="btn btn-primary">
              <span className="span flex justify-center"><p className='text-sm'>Get Started Today</p></span>
              < ArrowForwardOutline style={{color:"#ffffff", marginLeft:"10px"}}/>
            </a>

          </div>

          <figure class="hero-banner">

          <img src={herobanner} width="500" height="500" loading="lazy" alt="hero image"
              class="w-100" />

            <img src={heroabs1} width="318" height="352" loading="lazy" aria-hidden="true"
              class="abs-img abs-img-1" />

            <img src={heroabs2} width="160" height="160" loading="lazy" aria-hidden="true"
              class="abs-img abs-img-2" />



          </figure>

        </div>
      </section>
      <section class="section category" aria-label="category">
        <div class="container">

          <p class="section-subtitle">OUR SERVICES</p>

          <h2 class="h2 section-title">Project Management Services We Offer</h2>

          <ul class="grid-list">

            <li>
              <div class="category-card">

                <div class="card-icon">
                  <BriefcaseOutline />
                </div>

                <div>
                  <h3 class="h3 card-title">
                    <a href="#">Project Planning</a>
                  </h3>

                  <span class="card-meta">Assistance in developing project plans, defining project scope, objectives, and deliverables, creating project schedules, and identifying required resources.</span>
                </div>

              </div>
            </li>

            <li>
              <div class="category-card">

                <div class="card-icon">
                 <FileTrayOutline />
                </div>

                <div>
                  <h3 class="h3 card-title">
                    <a href="#">Project Execution</a>
                  </h3>

                  <span class="card-meta">Support during the actual implementation of the project plan, including coordinating team activities, monitoring progress, resolving issues, and managing changes.</span>
                </div>

              </div>
            </li>

            <li>
              <div class="category-card">

                <div class="card-icon">
                  <ColorPaletteOutline />
                </div>

                <div>
                  <h3 class="h3 card-title">
                    <a href="#">Risk Management</a>
                  </h3>

                  <span class="card-meta"> Identification, assessment, and mitigation of potential risks that may impact the project's success, along with the development of risk management strategies and contingency plans.</span>
                </div>

              </div>
            </li>

            <li>
              <div class="category-card">

                <div class="card-icon">
                  <LayersOutline />
                </div>

                <div>
                  <h3 class="h3 card-title">
                    <a href="#">Cost Management</a>
                  </h3>

                  <span class="card-meta">Estimating, budgeting, and tracking project costs, including resource allocation, expense management, and cost control throughout the project lifecycle.</span>
                </div>

              </div>
            </li>

            <li>
              <div class="category-card">

                <div class="card-icon">
                  <LaptopOutline />
                </div>

                <div>
                  <h3 class="h3 card-title">
                    <a href="#">Quality Management</a>
                  </h3>

                  <span class="card-meta">Development and implementation of quality assurance processes, standards, and metrics to ensure project deliverables meet the required quality criteria.</span>
                </div>

              </div>
            </li>

            <li>
              <div class="category-card">

                <div class="card-icon">
                  <ThumbsUpOutline />
                </div>

                <div>
                  <h3 class="h3 card-title">
                    <a href="#">Stakeholder Management</a>
                  </h3>

                  <span class="card-meta"> Engagement and communication with project stakeholders, including clients, team members, sponsors, and other relevant parties to foster collaboration, manage expectations, and address concerns.</span>
                </div>

              </div>
            </li>

            <li>
              <div class="category-card">

                <div class="card-icon">
                  <HeadsetOutline/>
                </div>

                <div>
                  <h3 class="h3 card-title">
                    <a href="#">Resource Management</a>
                  </h3>

                  <span class="card-meta">Allocation and optimization of project resources, such as personnel, equipment, and materials, to ensure their effective utilization and alignment with project objectives.</span>
                </div>

              </div>
            </li>

            <li>
              <div class="category-card">

                <div class="card-icon">
                  <ServerOutline />
                </div>

                <div>
                  <h3 class="h3 card-title">
                    <a href="#">Project Documentation</a>
                  </h3>

                  <span class="card-meta">Creation and maintenance of project documentation, including project charters, requirements documents, progress reports, and other necessary artifacts.</span>
                </div>

              </div>
            </li>

            <li>
              <div class="category-card flex">

                <div class="card-icon">
                  <MedkitOutline />
                </div>

                <div>
                  <h3 class="h3 card-title">
                    <a href="#">Project Closure</a>
                  </h3>

                  <span class="card-meta">Activities related to formally closing a project, such as conducting project evaluations, capturing lessons learned, archiving project documents, and facilitating knowledge transfer.</span>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
      <section class="section about" id="about" aria-label="about">
        <div class="container">

          <figure class="about-banner">

            <img src={aboutbanner} width="450" height="590" loading="lazy" alt="about banner"
              class="w-100 about-img" />

            <img src={aboutabs1} width="188" height="242" loading="lazy" aria-hidden="true"
              class="abs-img abs-img-1" />

            <img src={aboutabs2} width="150" height="200" loading="lazy" aria-hidden="true"
              class="abs-img abs-img-2" />

          </figure>

          <div class="about-content">

            <p class="section-subtitle">Who We Are</p>

            <h2 class="h2 section-title">We Offer The Best Carrier</h2>

            <ul class="about-list">

              <li class="about-item">

                <div class="item-icon item-icon-1">
                 <ArrowForwardOutline />
                </div>

                <div>
                  <h3 class="h3 item-title">Industry Expert Instructor</h3>

                  <p class="item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna
                    aliqua.
                  </p>
                </div>

              </li>

              <li class="about-item">

                <div class="item-icon item-icon-2">
                <ArrowForwardOutline />                </div>

                <div>
                  <h3 class="h3 item-title">Up-to-Date Course Content</h3>

                  <p class="item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna
                    aliqua.
                  </p>
                </div>

              </li>

              <li class="about-item">

                <div class="item-icon item-icon-3">
                <ArrowForwardOutline />                </div>

                <div>
                  <h3 class="h3 item-title">Biggest Student Community</h3>

                  <p class="item-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmoded tempor incididunt dolore magna
                    aliqua.
                  </p>
                </div>

              </li>

            </ul>

            <a href="#" class="btn btn-primary">
              <span className="span"><p className='text-lg'>Know About Us</p></span>

              <ArrowForwardOutline />
            </a>

          </div>

        </div>
      </section>
      <section class="section cta" aria-label="workshop" >
        <div class="container">

          <figure class="cta-banner">
            <img src={ctabanner} width="580" height="380" loading="lazy" alt="cta banner"
              class="img-cover" />
          </figure>

          <div class="cta-content">

            <p class="section-subtitle">Free Workshop</p>

            <h2 class="h2 section-title">Join Our Free Workshops</h2>

            <p class="section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consect adipi scing elit, sed do
              eiusmod tempor
              incididunt ut sed do eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>

            <a href="#" class="btn btn-secondary">
              <span class="span">Upcomming Workshop</span>

              <ArrowForwardOutline />
            </a>

          </div>

        </div>
      </section>

        </article>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectManagement
