import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


const InfoBox = ({ link, text, btnText }) => (
    <div className="bg-blue-500 rounded-xl shadow-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-white flex flex-col items-center max-w-sm mx-auto">
      <p className="mb-3 sm:mb-4 text-center text-sm sm:text-base">{text}</p>
      <Link
        to={link}
        className="bg-white text-blue-600 font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow hover:bg-blue-100 transition w-full flex items-center justify-center gap-2 text-sm sm:text-base"
      >
        {btnText}
        <img src={arrow} className="w-3 h-3 sm:w-4 sm:h-4 object-contain" />
      </Link>
    </div>
  );

const renderContent = {
    1: (
        <h1 className="mb-4 text-center bg-blue-500 py-3 sm:py-4 px-4 sm:px-6 md:px-8 text-white mx-4 sm:mx-5 rounded-xl shadow-lg text-sm sm:text-base max-w-sm mx-auto">
          Hi, I am <span className="font-semibold">Aditya</span>👋
          <br />
          A CS student working and learning about multiple tech domains.
        </h1>
    ),
    2: (
        <InfoBox
        text="Driven by ideas. Built with intent."
        link="/about"
        btnText="Learn more" 
        />
    ),
    3: (
        <InfoBox
            text="Done a handful of projects. Curious to check them out?"
            link="/projects"
            btnText="Visit my portfolio" 
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away"
            link="/contact"
            btnText="Let's talk" 
        />
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[ currentStage] || null;

}

export default HomeInfo