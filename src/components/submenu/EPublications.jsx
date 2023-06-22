import React from 'react'
import Navbar from '../Navbar'
import "./epubs_styles.css"
import { Eherobanner, aboutbanner, category1, category2, category3, category4, category5, category6 } from './epubs_assets'
import Footer from './Footer'

const EPublications = () => {
  return (
    <div>
        <Navbar/>
        <main>
          <article>
          <section class="section hero has-bg-image pt-0" aria-labelledby="hero-label"
       >
        <div className="container">

          <div class="hero-content">

            <h1 className="headline-lg text-5xl" id="hero-label">
              Better <span class="span">Learning Future</span> Starts With Youdemi
            </h1>

            <p className="title-md has-before text-lg">
              It is long established fact that reader distracted by the readable content.
            </p>

            <div class="btn-group " >
              <a href="#" class="btn btn-primary">Get Started Now</a>
            </div>

          </div>

          <figure class="hero-banner">
            <img src={Eherobanner} width="590" height="620" alt="hero banner" class="w-100" />
          </figure>

        </div>
      </section>
      <section class="section category has-bg-image" aria-labelledby="category-label">
        <div class="container">

          <p class="title-sm text-center section-subtitle" id="category-label">Course Categories</p>

          <h2 class="headline-md text-center section-title">
            Browse Top <span class="span has-after">Categories</span>
          </h2>

          <ul class="grid-list">

            <li>
              <div class="card category-card">

                <div class="card-icon">
                  <img src={category1 } width="72" height="72" loading="lazy"
                    alt="Data Science icon" />
                </div>

                <div>
                  <h3 class="title-lg">Data Science</h3>

                  <p class="title-sm">68 Courses</p>
                </div>

                <a href="#" class="layer-link" aria-label="Data Science Category"></a>

              </div>
            </li>

            <li>
              <div class="card category-card">

                <div class="card-icon">
                  <img src={category2} width="72" height="72" loading="lazy"
                    alt="UI/UX Design icon" />
                </div>

                <div>
                  <h3 class="title-lg">UI/UX Design</h3>

                  <p class="title-sm">68 Courses</p>
                </div>

                <a href="#" class="layer-link" aria-label="UI/UX Design Category"></a>

              </div>
            </li>

            <li>
              <div class="card category-card">

                <div class="card-icon">
                  <img src={category3} width="72" height="72" loading="lazy"
                    alt="Modern Physics icon" />
                </div>

                <div>
                  <h3 class="title-lg">Modern Physics</h3>

                  <p class="title-sm">68 Courses</p>
                </div>

                <a href="#" class="layer-link" aria-label="Modern Physics Category"></a>

              </div>
            </li>

            <li>
              <div class="card category-card">

                <div class="card-icon">
                  <img src={category4} width="72" height="72" loading="lazy"
                    alt="Music Production icon" />
                </div>

                <div>
                  <h3 class="title-lg">Music Production</h3>

                  <p class="title-sm">68 Courses</p>
                </div>

                <a href="#" class="layer-link" aria-label="Music Production Category"></a>

              </div>
            </li>

            <li>
              <div class="card category-card">

                <div class="card-icon">
                  <img src={category5} width="72" height="72" loading="lazy"
                    alt="Data Science icon" />
                </div>

                <div>
                  <h3 class="title-lg">Data Science</h3>

                  <p class="title-sm">68 Courses</p>
                </div>

                <a href="#" class="layer-link" aria-label="Data Science Category"></a>

              </div>
            </li>

            <li>
              <div class="card category-card">

                <div class="card-icon">
                  <img src={category6} width="72" height="72" loading="lazy" alt="Finances icon" />
                </div>

                <div>
                  <h3 class="title-lg">Finances</h3>

                  <p class="title-sm">68 Courses</p>
                </div>

                <a href="#" class="layer-link" aria-label="Finances Category"></a>

              </div>
            </li>

          </ul>

          <a href="#" class="btn btn-primary">View All Categories</a>

        </div>
      </section>
      <section class="section about" aria-labelledby="about-label">
        <div class="container">

          <figure class="about-banner">
            <img src={aboutbanner} width="775" height="685" loading="lazy" alt="about banner"
              class="w-100" />
          </figure>

          <div class="about-content">

            <p class="title-sm section-subtitle" id="about-label">About Youdemi</p>

            <h2 class="headline-md section-title">
              We Provide The Best Online <span class="span has-after">Education</span>
            </h2>

            <p class="title-sm section-text">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour.
            </p>

            <ul class="progress-list">

              <li>
                <div class="progress-label-wrapper">
                  <p class="title-sm">Business Studies</p>

                  <p class="title-sm">86%</p>
                </div>

                <div class="progress">
                  <div class="progress-fill red"></div>
                </div>
              </li>

              <li>
                <div class="progress-label-wrapper">
                  <p class="title-sm">Marketing</p>

                  <p class="title-sm">67%</p>
                </div>

                <div class="progress">
                  <div class="progress-fill green"></div>
                </div>
              </li>

              <li>
                <div class="progress-label-wrapper">
                  <p class="title-sm">Design & Development</p>

                  <p class="title-sm">95%</p>
                </div>

                <div class="progress">
                  <div class="progress-fill yellow"></div>
                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>




          </article>
        </main>
        <Footer/>
    </div>
  )
}

export default EPublications
