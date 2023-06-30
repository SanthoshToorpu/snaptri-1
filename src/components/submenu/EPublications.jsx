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
          <section className="section hero has-bg-image xl:pt-0" aria-labelledby="hero-label"
       >
        <div className="container">

          <div className="hero-content">

            <h1 className="headline-lg text-5xl" id="hero-label">
              Think <span className="span">E Publications</span><br /><span className="span">Think</span> Snaptri
            </h1>

            <p className="title-md has-before text-lg">
            ePublications: Digital content revolutionizing reading with convenience, accessibility, and interactivity.
            </p>

            <div className="btn-group " >
              <a href="#" className="btn btn-primary">Get Started Now</a>
            </div>

          </div>

          <figure className="hero-banner" >
            <img src={Eherobanner} width="590" height="620" alt="hero banner" className="w-100" />
          </figure>

        </div>
      </section>
      <section className="section category has-bg-image" aria-labelledby="category-label">
        <div className="container">

          <p className="title-sm text-center section-subtitle" id="category-label">Our Services</p>

          <h2 className="headline-md text-center section-title">
            Dive into Our wide range of <span className="span has-after">Services</span>
          </h2>

          <ul className="grid-list">

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/2143/2143406.png"  width="72" height="72" loading="lazy"
                    alt="Data Science icon" />
                </div>

                <div>
                  <h3 className="title-lg">eBook Conversion</h3>

                  <p className="text-sm">Converting printed books or manuscripts into digital formats compatible with various e-readers and platforms.</p>
                </div>

                <a href="#" className="layer-link" aria-label="Data Science Category"></a>

              </div>
            </li>

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src={category2} width="72" height="72" loading="lazy"
                    alt="UI/UX Design icon" />
                </div>

                <div>
                  <h3 className="title-lg">Digital Typesetting</h3>

                  <p className="text sm">Professionally formatting and arranging content for e-books, ensuring a visually appealing and reader-friendly layout.</p>
                </div>

                <a href="#" className="layer-link" aria-label="UI/UX Design Category"></a>

              </div>
            </li>

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src={category3} width="72" height="72" loading="lazy"
                    alt="Modern Physics icon" />
                </div>

                <div>
                  <h3 className="title-lg">Cover Design</h3>

                  <p className="text sm">Creating visually appealing and engaging covers for e-books to attract readers and convey the essence of the content.</p>
                </div>

                <a href="#" className="layer-link" aria-label="Modern Physics Category"></a>

              </div>
            </li>

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src={category4} width="72" height="72" loading="lazy"
                    alt="Music Production icon" />
                </div>

                <div>
                  <h3 className="title-lg">Content Editing</h3>

                  <p className="text sm">Reviewing and revising e-book content for clarity, grammar, spelling, and overall quality improvement.</p>
                </div>

                <a href="#" className="layer-link" aria-label="Music Production Category"></a>

              </div>
            </li>

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src={category5} width="72" height="72" loading="lazy"
                    alt="Data Science icon" />
                </div>

                <div>
                  <h3 className="title-lg">Proofreading</h3>

                  <p className="text sm">Conducting a thorough review of e-book manuscripts to eliminate errors, including typos, punctuation mistakes, and formatting inconsistencies.</p>
                </div>

                <a href="#" className="layer-link" aria-label="Data Science Category"></a>

              </div>
            </li>

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src={category6} width="72" height="72" loading="lazy" alt="Finances icon" />
                </div>

                <div>
                  <h3 className="title-lg">Illustration and Graphics</h3>

                  <p className="text sm">Providing custom illustrations, graphics, or images that enhance the visual appeal and comprehension of the e-book.</p>
                </div>

                <a href="#" className="layer-link" aria-label="Finances Category"></a>

              </div>
            </li>
            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/2143/2143406.png"  width="72" height="72" loading="lazy"
                    alt="Data Science icon" />
                </div>

                <div>
                  <h3 className="title-lg">Interactive Elements</h3>

                  <p className="text sm"> Incorporating interactive features, such as hyperlinks, multimedia content, audio, or video, to enrich the reading experience.</p>
                </div>

                <a href="#" className="layer-link" aria-label="Data Science Category"></a>

              </div>
            </li>

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src={category2} width="72" height="72" loading="lazy"
                    alt="UI/UX Design icon" />
                </div>

                <div>
                  <h3 className="title-lg">Metadata Optimization</h3>

                  <p className="text sm">Optimizing the metadata of e-books, including title, description, keywords, and categories, to improve discoverability in online marketplaces and search engines.</p>
                </div>

                <a href="#" className="layer-link" aria-label="UI/UX Design Category"></a>

              </div>
            </li>

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src={category3} width="72" height="72" loading="lazy"
                    alt="Modern Physics icon" />
                </div>

                <div>
                  <h3 className="title-lg">Distribution Services</h3>

                  <p className="text sm">Assisting with the distribution of e-books across various online platforms and retailers, ensuring wide availability to potential readers.</p>
                </div>

                <a href="#" className="layer-link" aria-label="Modern Physics Category"></a>

              </div>
            </li>

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src={category4} width="72" height="72" loading="lazy"
                    alt="Music Production icon" />
                </div>

                <div>
                  <h3 className="title-lg">Marketing and Promotion</h3>

                  <p className="text sm">Developing marketing strategies and promotional campaigns to increase visibility, attract readers, and drive sales for e-books.</p>
                </div>

                <a href="#" className="layer-link" aria-label="Music Production Category"></a>

              </div>
            </li>

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src={category5} width="72" height="72" loading="lazy"
                    alt="Data Science icon" />
                </div>

                <div>
                  <h3 className="title-lg">Print-on-Demand (POD) Services</h3>

                  <p className="text sm">Offering options to produce printed copies of e-books through print-on-demand technology, catering to readers who prefer physical books.</p>
                </div>

                <a href="#" className="layer-link" aria-label="Data Science Category"></a>

              </div>
            </li>

            <li>
              <div className="card category-card">

                <div className="card-icon">
                  <img src={category6} width="72" height="72" loading="lazy" alt="Finances icon" />
                </div>

                <div>
                  <h3 className="title-lg">Analytics and Reporting</h3>

                  <p className="text sm">Providing detailed analytics and reporting on e-book sales, reader engagement, and other performance metrics, helping authors and publishers make informed decisions.</p>
                </div>

                <a href="#" className="layer-link" aria-label="Finances Category"></a>

              </div>
            </li>

          </ul>

          <a href="#" className="btn btn-primary">Get IN touch</a>

        </div>
      </section>
      <section className="section about" aria-labelledby="about-label">
        <div className="container">

          <figure className="about-banner">
            <img src={aboutbanner} width="775" height="685" loading="lazy" alt="about banner"
              className="w-100" />
          </figure>

          <div className="about-content">

            <p className="title-sm section-subtitle" id="about-label">About lorem</p>

            <h2 className="headline-md section-title">
              Lorem ipsum dolor sit amet. <span className="span has-after">lorem</span>
            </h2>

            <p className="title-sm section-text">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour.
            </p>

            <ul className="progress-list">

              <li>
                <div className="progress-label-wrapper">
                  <p className="title-sm">Business Studies</p>

                  <p className="title-sm">86%</p>
                </div>

                <div className="progress">
                  <div className="progress-fill red"></div>
                </div>
              </li>

              <li>
                <div className="progress-label-wrapper">
                  <p className="title-sm">Marketing</p>

                  <p className="title-sm">67%</p>
                </div>

                <div className="progress">
                  <div className="progress-fill green"></div>
                </div>
              </li>

              <li>
                <div className="progress-label-wrapper">
                  <p className="title-sm">Design & Development</p>

                  <p className="title-sm">95%</p>
                </div>

                <div className="progress">
                  <div className="progress-fill yellow"></div>
                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>




          </article>
        </main>
        {/* <Footer/> */}
    </div>
  )
}

export default EPublications
