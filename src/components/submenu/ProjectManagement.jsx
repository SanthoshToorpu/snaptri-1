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
        <section className="hero pt-0 " id="home" aria-label="hero" >
        <div className="container">

          <div className="hero-content mt-40 md:mr-5 ">

              <p className="section-subtitle lead md:text-md">Project management</p>

            <h2 className="h1 hero-title md:text-7xl">Management is, above all, a practice where art, science, and craft meet.</h2>

            <p className="hero-text md:text-3xl">
            The only thing we manage better than projects is people
            </p>

            <a href="#" className="btn btn-primary">
              <span className="span flex justify-center"><p className='text-sm'>Connect with us</p></span>
              < ArrowForwardOutline style={{color:"#ffffff", marginLeft:"10px"}}/>
            </a>

          </div>

          <figure className="hero-banner">

          <img src={herobanner} width="500" height="500" loading="lazy" alt="hero image"
              className="w-100" />

            <img src={heroabs1} width="318" height="352" loading="lazy" aria-hidden="true"
              className="abs-img abs-img-1" />

            <img src={heroabs2} width="160" height="160" loading="lazy" aria-hidden="true"
              className="abs-img abs-img-2" />



          </figure>

        </div>
      </section>
      <section className="section category" aria-label="category">
        <div className="container">

          <p className="section-subtitle">OUR SERVICES</p>

          <h2 className="h2 section-title">Project Management Services We Offer</h2>

          <ul className="grid-list">

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <BriefcaseOutline />
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Project Planning</a>
                  </h3>

                  <span className="card-meta">Assistance in developing project plans, defining project scope, objectives, and deliverables, creating project schedules, and identifying required resources.</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                 <FileTrayOutline />
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Project Execution</a>
                  </h3>

                  <span className="card-meta">Support during the actual implementation of the project plan, including coordinating team activities, monitoring progress, resolving issues, and managing changes.</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <ColorPaletteOutline />
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Risk Management</a>
                  </h3>

                  <span className="card-meta"> Identification, assessment, and mitigation of potential risks that may impact the project's success, along with the development of risk management strategies and contingency plans.</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <LayersOutline />
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Cost Management</a>
                  </h3>

                  <span className="card-meta">Estimating, budgeting, and tracking project costs, including resource allocation, expense management, and cost control throughout the project lifecycle.</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <LaptopOutline />
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Quality Management</a>
                  </h3>

                  <span className="card-meta">Development and implementation of quality assurance processes, standards, and metrics to ensure project deliverables meet the required quality criteria.</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <ThumbsUpOutline />
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Stakeholder Management</a>
                  </h3>

                  <span className="card-meta"> Engagement and communication with project stakeholders, including clients, team members, sponsors, and other relevant parties to foster collaboration, manage expectations, and address concerns.</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <HeadsetOutline/>
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Resource Management</a>
                  </h3>

                  <span className="card-meta">Allocation and optimization of project resources, such as personnel, equipment, and materials, to ensure their effective utilization and alignment with project objectives.</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card">

                <div className="card-icon">
                  <ServerOutline />
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Project Documentation</a>
                  </h3>

                  <span className="card-meta">Creation and maintenance of project documentation, including project charters, requirements documents, progress reports, and other necessary artifacts.</span>
                </div>

              </div>
            </li>

            <li>
              <div className="category-card flex">

                <div className="card-icon">
                  <MedkitOutline />
                </div>

                <div>
                  <h3 className="h3 card-title">
                    <a href="#">Project Closure</a>
                  </h3>

                  <span className="card-meta">Activities related to formally closing a project, such as conducting project evaluations, capturing lessons learned, archiving project documents, and facilitating knowledge transfer.</span>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>
      <section className="section about" id="about" aria-label="about">
        <div className="container">

          <figure className="about-banner">

            <img src={aboutbanner} width="450" height="590" loading="lazy" alt="about banner"
              className="w-100 about-img" />

            <img src={aboutabs1} width="188" height="242" loading="lazy" aria-hidden="true"
              className="abs-img abs-img-1" />

            <img src={aboutabs2} width="150" height="200" loading="lazy" aria-hidden="true"
              className="abs-img abs-img-2" />

          </figure>

          <div className="about-content">

            <p className="section-subtitle">Who We Are</p>

            <h2 className="h2 section-title">Why choose us?</h2>

            <ul className="about-list">

              <li className="about-item">

                <div className="item-icon item-icon-1">
                 <ArrowForwardOutline />
                </div>

                <div>
                  <h3 className="h3 item-title">Industry Expert Professionals</h3>
                </div>

              </li>

              <li className="about-item">

                <div className="item-icon item-icon-2">
                <ArrowForwardOutline />                </div>

                <div>
                  <h3 className="h3 item-title">Good business leaders create a vision, articulate the vision</h3>
                </div>

              </li>

              <li className="about-item">

                <div className="item-icon item-icon-3">
                <ArrowForwardOutline />                </div>

                <div>
                  <h3 className="h3 item-title">Technology and tools are useful, when they are your servant and not your master</h3>

                </div>

              </li>

            </ul>

            <a href="#" className="btn btn-primary">
              <span className="span"><p className='text-lg'>Know About Us</p></span>

              <ArrowForwardOutline />
            </a>

          </div>

        </div>
      </section>
      <section className="section cta" aria-label="workshop" >
        <div className="container">

          <figure className="cta-banner rounded-2xl">
            <img src={ctabanner} width="580" height="380" loading="lazy" alt="cta banner"
              className="img-cover" />
          </figure>

          <div className="cta-content">

            <h2 className="h2 section-title">Plans are worthless. Planning is essential</h2>

            <p className="section-text">
            Get the right people. Then no matter what all else you might do wrong after that, the people will save you.That’s what management is all about.
            </p>

            <a href="#" className="btn btn-secondary">
              <span className="span">Get in touch with us
              </span>

              <ArrowForwardOutline />
            </a>

          </div>

        </div>
      </section>

        </article>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default ProjectManagement
