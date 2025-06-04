import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import { projects } from '../constants'
import { motion } from 'framer-motion';
import SocialLinks from '../components/SocialLinks';

const gradients = [
  "from-red-400 via-pink-400 to-orange-400",
  "from-green-400 via-cyan-400 to-blue-400",
  "from-blue-400 via-indigo-400 to-purple-400",
  "from-pink-400 via-purple-400 to-blue-400",
  "from-gray-400 via-gray-500 to-black",
  "from-yellow-400 via-orange-400 to-red-400"
];

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 pt-16 bg-gray-50">
      <h1 className="text-4xl font-bold leading-relaxed">
        My{' '}
        <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow font-bold">
          Projects
        </span>
      </h1>
      <p className="text-gray-500 text-base leading-relaxed mb-8 mt-4">
        I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart. Many of them are open-source, so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas for further enhancements. Your collaboration is highly valued!
      </p>
      {/* Responsive two-column grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.15, type: 'spring', stiffness: 300 }}
            className="flex flex-col items-start w-full"
          >
            {/* Only the icon card is animated on hover */}
            <motion.div
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`
                w-14 h-14
                flex items-center justify-center
                rounded-2xl
                shadow-2xl
                bg-gradient-to-br ${gradients[idx % gradients.length]}
                bg-opacity-70
                backdrop-blur-md
                mb-4
                cursor-pointer
              `}
              style={{
                filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.12))'
              }}
            >
              <img
                src={project.iconUrl}
                alt="Project Icon"
                className="w-8 h-8 object-contain"
              />
            </motion.div>
            {/* Text below the card, left-aligned */}
            <h4 className="text-xl font-semibold mb-1 font-poppins">{project.name}</h4>
            <p className="text-gray-600 text-base mb-4">{project.description}</p>
            <Link
              to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600 flex items-center gap-2 hover:underline"
            >
              Live Link
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </Link>
          </motion.div>
        ))}
      </div>

      <hr className="border-slate-200 my-16"/>

      <CTA />
      <div className="mt-4">
      <SocialLinks className="justify-center" />
      </div>
    </section>
  )
}

export default Projects
