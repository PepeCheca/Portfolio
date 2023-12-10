/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { styles } from '../styles';
import { pepe, connect, } from '../assets';
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-1 h-[100vh] w-screen">
        <img
          src={connect}
          alt="background image"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hola, soy{' '}
              <span
                className="sm:text-platinum sm:text-[80px] 
                text-eerieBlack text-[50px] font-poppins
                font-extrabold uppercase">
                Pepe Checa
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              Full-Stack Developer <br className="sm:block hidden" />
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
          </a>
        </div>

        <div>
          <img
            className="img"
            src={pepe}
            alt="pepe"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
