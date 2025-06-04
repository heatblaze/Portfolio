import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


const InfoBox = ({ link, text, btnText }) => (
    <div className="bg-blue-500 rounded-xl shadow-lg px-8 py-6 text-white flex flex-col items-center">
      <p className="mb-4 text-center">{text}</p>
      <Link
        to={link}
        className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-100 transition w-full flex items-center justify-center gap-2"
      >
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );

const renderContent = {
    1: (
        <h1 className="mb-4 text-center bg-blue-500 py-4 px-8 text-white mx-5 rounded-xl shadow-lg">
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
            text="Done a quiet handfull of projects. Curoius to check them out?"
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