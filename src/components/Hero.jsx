import { motion } from 'framer-motion'
import { styles } from '../styles'
import React from 'react'
import { useState, useEffect } from "react";


import { Carousel,Typography, Button } from "@material-tailwind/react";
import { videobg } from '../assets';

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "IT Services", "Project Management", "Consultancy", "E Publications", "Digital Marketing" ];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(80);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  

  return (
    <section className='relative w-full h-screen mx-auto'>      
      <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        {/* <video autoplay loop muted playsInline
          src={videobg}
          alt="image 1"
          className="h-full w-full object-cover opacity-90"
        /> */}
        
        <div className={`${styles.paddingX} absolute inset-0 top-[240px] max-w-7xl mx-auto flex flex-row items-start gap-5 bg-opacity-10` }>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            We are <span className='text-[#915EFF]'>SNAPTRI</span>
          </h1>
          <p className={`text-[#dfd9ff] text-[40px] mt-2 text-white-100 text-xl`}>
            
            <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "IT Services", "Project Management", "Consultancy", "E Publications", "Digital Marketing" ]'><span className="wrap">{text}</span></span>
          </p>
        </div>      
        
      </div>
      </div>
      
    </Carousel>
        
       {/* <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 bg-opacity-10` }>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            We are <span className='text-[#915EFF]'>SNAPTRI</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Our Services Include <br className='sm:block hidden' /> Quality | Technology | Innovation<br className='sm:block hidden' />
            <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "IT Services", "Project Management", "Consultancy", "E Publications", "Digital Marketing" ]'><span className="wrap">{text}</span></span>
          </p>
        </div>      
        
      </div> */}
      
      
      <div className='absolute xs:bottom-10 bottom-32 w-full flex flex-col justify-center items-center text-white'>
        SCROLL DOWN TO EXPLORE
        <a href='#about'>
          
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-white mb-1'
            />
          </div>
        </a>
      </div>
      <a className='fixed bottom-0 right-0' href=": https://www.pexels.com/video/the-sun-illuminating-earth-s-surface-1851190/">Video By Ingrid North</a>
    </section>
    
    
  )
}

export default Hero