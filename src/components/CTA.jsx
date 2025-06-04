import React from 'react'
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="w-full bg-gray-100 py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-4 md:mb-0 leading-tight">
        Have a project in mind?<br />
        Let's build something together!
      </p>
      <Link
        to="/contact"
        className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition hover:from-blue-600 hover:to-cyan-500 text-lg"
      >
        Contact
      </Link>
    </section>
  )
}

export default CTA
