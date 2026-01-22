import { easeInOut, motion } from 'framer-motion'
import React from 'react'
import { skills } from '../assets/assets'
function Skills() {
    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8, ease: "easeOut"
            }}
            viewport={{ once: true }}
            id='skills'
            className='scroll-mt-20 bg-linear-to-r from-[#101010] via-[#171515] to-[#242424] w-full min-[1350px]:px-30 px-5 pt-20 flex flex-col'
        >
            <div className="w-100 h-100  sm:h-150 absolute max-sm:right-0  sm:translate-x-1/2  flex bg-orange-600/20 blur-[110px] rounded-full z-0"></div>
            <div className='relative text-center ' >
                {/* text */}
                <h1 className=" font-bold tracking-tight bg-linear-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text md:text-6xl text-5xl text-transparent">Skills & Technologies</h1>
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "60%" }}
                    transition={{
                        duration: 2.4, ease: "easeOut", delay: 0.3
                    }}
                    viewport={{ once: true }}
                    className='w-[10%] md:max-w-md h-2 mt-5 relative rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                bg-linear-to-r from-orange-900 via-orange-500 to-orange-800 
               '></motion.div>
                <h2 className='font-semibold pt-5 text-center text-xl'>The magical tools I use to bring <span className='text-orange-500 font-bold'>Ideas to life</span> </h2>
            </div>
            <div className='flex flex-col justify-center items-center z-20 '>

                <div
                    className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 sm:gap-10 mt-25 '>
                    {
                        skills.map(({name,txclass,bgclass,Icon}, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.10 }}
                                viewport={{ once: true }}
                                key={idx} className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-7 py-6 text-center hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center justify-center hover:scale-105 hover:-translate-y-2 '>

                                <div >
                                    <Icon className={`${txclass} sm:text-8xl bg-transparent text-3xl mb-3`} />
                                </div>
                                <h1 className='sm:text-xl'>{name}</h1>
                                <div className='w-28  sm:w-48 h-2 bg-white/10 rounded mt-3'>
                                    <div className={`${bgclass} rounded h-2`} ></div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Skills