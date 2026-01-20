import React from 'react'
import { educationData } from '../assets/assets'
import { motion } from 'framer-motion'

function Education() {
  return (
    <>
      <div id="education" className='scroll-mt-20 py-20 w-full bg-linear-to-r from-[#101010] via-[#171515] to-[#242424] '>
        {/* text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.2, ease: "easeOut"
          }}
          viewport={{ once: true }}
          className='text-center px-4  '>
          <h1 className='md:text-6xl font-bold text-4xl text-orange-600 '>Education</h1>
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
          <h2 className='font-semibold pt-5 text-center text-xl'>An <span className='text-orange-600 font-semibold'>Academic Journey</span>  that built discipline, logical thinking, <br className='hidden md:block' /> and a strong learning mindset.</h2>
        </motion.div>
        {/* education */}
        <div className='flex flex-col md:flex-row justify-center pt-15 items-start md:items-center bg-linear-to-r from-[#101010] via-[#171515] to-[#242424]'>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: 800 }}
            transition={{
              duration: 2.4, ease: "easeOut", delay: 0.3
            }}
            viewport={{ once: true }}
            className='hidden lg:block w-3 bg-orange-600 h-200 rounded-full  '>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 px-4 md:px-12 mt-8 md:mt-0 w-full lg:max-w-[75%] ">

            {educationData.map(({ degree, institution, duration, Eduicons, logo, description, }, index) => (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 2.5, ease: "easeOut", delay: 0.3
                }}
                viewport={{ once: true }}
                key={index} >
                <div className="flex flex-col md:flex-row items-center md:items-start md:ml-18 bg-white/5 p-6 hover: rounded-2xl border border-white/10 hover:bg-[#362C21] transition-all duration-300 ">
                  <div className="w-24 h-24 md:w-40 md:h-40 mb-4 md:mb-0 md:mr-6 shrink-0 flex items-center justify-center bg-white rounded-full overflow-hidden">
                    <img src={logo} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="relative text-center md:text-left ">
                    <h3 className="text-2xl md:text-3xl font-bold text-white  " >{degree}  </h3>
                    <p className="text-lg md:text-xl text-orange-500 mt-1">{institution} </p>
                    <p className="  text-gray-400 lg:absolute right-1 top-0 ">{duration} <Eduicons className='  text-orange-500 inline text-2xl ' /> </p>
                    <p className='text-base md:text-[17px] text-gray-300 mt-4'> {description} </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

    </>
  )
}

export default Education