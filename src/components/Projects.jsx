import React from 'react'
import { projectsData } from '../assets/assets'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

function Projects() {
  return (
    <>
      <div id="projects" className='scroll-mt-20 py-20 w-full bg-linear-to-r from-[#101010] via-[#171515] to-[#242424] '>
        {/* text */}
        <motion.div
          initial={{ opacity: 0, x: -20, }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8, ease: "easeOut"
          }}
          viewport={{ once: true }}
          className='text-center px-4 '>
          <h1 className='md:text-6xl font-bold text-4xl text-orange-600 '>Projects</h1>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60%" }}
            transition={{
              duration: 2.4, ease: "easeOut", delay: 0.3
            }}
            viewport={{ once: true }}
            className='w-[60%] md:max-w-md h-2 mt-5 relative rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                bg-linear-to-r from-orange-900 via-orange-500 to-orange-800 
               '></motion.div>
          <h2 className='font-semibold pt-5 text-center text-xl'>A showcase of my

            <span className='text-orange-600 font-semibold'> creative work</span> and technical expertise</h2>
        </motion.div>

        {/* Projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12 mt-16 mb-8'>
          {projectsData.map(({ title, description, image, technologies, githubLink, liveLink }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.18 }}
              viewport={{ once: true }} key={index}
              className="bg-white/5 p-6 rounded-2xl border border-white/10 group hover:bg-[#362C21] transition-all duration-300 flex flex-col">
              <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-103 transition-transform duration-300 rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-300 text-base grow">{description}</p>
              <div className="mt-3">
                <p className="text-orange-500 font-semibold mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-6">
                <a
                  href='https://github.com/Maaz-Ishtiaq'
                  target="_blank"
                  className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors duration-300 max-sm:px-2 max-sm:py-1"
                >
                  <FaGithub className="text-xl max-sm:text-sm" /> GitHub
                </a>
                <a
                  href={liveLink}
                  target="_blank"

                  className="flex items-center gap-2 px-4 py-2 cursor-pointer bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300"
                >
                  <IoShareSocial className="text-xl max-sm:text-sm" /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </>

  )
}

export default Projects
