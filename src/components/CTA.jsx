import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="w-full bg-gray-100 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
      <p className="font-extrabold text-xl sm:text-2xl md:text-3xl text-gray-900 mb-3 sm:mb-4 md:mb-0 leading-tight text-center md:text-left">
        Have a project in mind?<br />
        Let's build something together!
      </p>
      <Link
        to="/contact"
        className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg shadow-lg transition hover:from-blue-600 hover:to-cyan-500 text-base sm:text-lg"
      >
        Contact
      </Link>
    </section>
  )
}

export default CTA
