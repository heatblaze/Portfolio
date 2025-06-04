import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'
import SocialLinks from '../components/SocialLinks';

const About = () => {
  return (
    <>
      <section className="max-w-4xl mx-auto px-8 pt-16 bg-gray-50">
        <h1 className="text-4xl font-bold leading-relaxed">
          Hello, I'm{' '}
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow font-bold">
            Aditya
          </span>
        </h1>
        <p className="text-gray-500 text-base leading-relaxed mb-8">
          I'm a B.Tech Computer Science student specializing in Cybersecurity at MIT Bengaluru. I've led teams as Vice Fest Head, and GDSC Treasurer, and I've built real-time apps and quantum ML tools. I enjoy solving complex problems with secure, creative, and data-backed solutions. I'm inclined learning and working towards <span className="font-semibold">Cybersecurity, Full-Stack, Data Analyst, Software Engineering domains.</span></p>
        <h3 className="text-lg font-bold">My Skills</h3>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                w-20 h-20 
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
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          ))}
        </div>
        <div className="py-16">
          <h3 className="text-lg font-bold">Work Experience</h3>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            Blending leadership with hands-on engineering experience across real-world projects.
          </p>
        </div>
        <div className="mt-12">
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
                  <h3 className="text-black text-xl font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-gray-700 font-medium text-base" style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-gray-500 font-normal pl-1 text-sm">
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
      <section className="w-full bg-gray-100 py-12 flex justify-center items-center mt-20">
        <div className="max-w-3xl w-full">
          <CTA />
          <SocialLinks className="justify-center" />
        </div>
      </section>
    </>
  )
}

export default About
