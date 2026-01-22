import React from 'react'
import { miniProjectsData } from '../assets/assets'
import { motion } from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

function MiniProjects() {
  return (
    <div className='py-10 w-full  bg-linear-to-r from-[#101010] via-[#171515] to-[#242424]'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className='text-center px-4 mb-16'
      >
        <h1 className='md:text-5xl text-3xl font-bold text-orange-600'>Mini Projects</h1>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "20%" }}
          transition={{
            duration: 2.4, ease: "easeOut", delay: 0.3
          }}
          viewport={{ once: true }}
          className='w-52 h-2 mx-auto mt-4 bg-orange-600 rounded-full'></motion.div>
        <h2 className='font-semibold pt-5 text-center text-xl '>Small but <span className='text-orange-600'>impactful</span> experiments</h2>
      </motion.div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12'>
        {miniProjectsData.map(({ title, description, technologies, githubLink, liveLink }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='bg-white/5 p-6 rounded-xl border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group'
          >
            <h3 className='text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors'>{title}</h3>
            <p className='text-gray-400 text-sm mb-4'>{description}</p>

            <div className='flex flex-wrap gap-2 mb-6'>
              {technologies.map((tech, i) => (
                <span key={i} className='text-xs bg-orange-900/30 text-orange-400 px-2 py-1 rounded'>
                  {tech}
                </span>
              ))}
            </div>

            <div className='flex gap-4'>
              <a href='https://github.com/maaz-ishtiaq/JavaScript-Projects' target="_blank" className='flex items-center gap-1 text-gray-300 hover:text-orange-500 transition-colors text-sm'>
                <FaGithub /> Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default MiniProjects
