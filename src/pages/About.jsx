import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 bg-gray-50">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed">
          Hello, I'm{' '}
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow font-bold">
            Aditya
          </span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
          I'm a B.Tech Computer Science student specializing in Cybersecurity at MIT Bengaluru. I've led teams as Vice Fest Head, and GDSC Treasurer, and I've built real-time apps and quantum ML tools. I enjoy solving complex problems with secure, creative, and data-backed solutions. I'm inclined learning and working towards <span className="font-semibold">Cybersecurity, Full-Stack, Data Analyst, Software Engineering domains.</span></p>
        <h3 className="text-base sm:text-lg font-bold">My Skills</h3>
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20
                bg-white 
                rounded-xl 
                shadow-lg 
                flex items-center justify-center
                transition-transform duration-200 ease-in-out hover:scale-110
                cursor-pointer"
            >
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="py-8 sm:py-12 md:py-16">
          <h3 className="text-base sm:text-lg font-bold">Work Experience</h3>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
            Blending leadership with hands-on engineering experience across real-world projects.
          </p>
        </div>
        <div className="mt-8 sm:mt-12">
          <VerticalTimeline layout="2-columns">
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: `8px solid ${experience.iconBg}`,
                  boxShadow: 'none',
                  background: '#fff',
                  color: '#222'
                }}
                contentArrowStyle={{ borderRight: '7px solid #fff' }}
              >
                <div>
                  <h3 className="text-black text-lg sm:text-xl font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-gray-700 font-medium text-sm sm:text-base" style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-4 sm:my-5 list-disc ml-4 sm:ml-5 space-y-1 sm:space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-gray-500 font-normal pl-1 text-xs sm:text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* CTA on a separate gray section, centered, with padding and margin */}
      <section className="w-full bg-gray-100 py-8 sm:py-12 flex justify-center items-center mt-12 sm:mt-20">
        <div className="max-w-3xl w-full">
          <CTA />
          <SocialLinks className="justify-center" />
        </div>
      </section>
    </>
  )
}

export default About
