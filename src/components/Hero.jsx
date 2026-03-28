import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

function Hero() {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    const words = ["Frontend Developer", "Problem Solver", "Programmer", "Web Developer"]

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % words.length
            const fullText = words[i]

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            )

            if (!isDeleting && text === fullText) {
                setTypingSpeed(2000)
                setIsDeleting(true)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setTypingSpeed(150)
            } else {
                setTypingSpeed(isDeleting ? 50 : 150)
            }
        }

        const timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, typingSpeed])

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = assets.cv;
        link.open = 'Maaz_Ishtiaq_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.open(assets.cv, '_blank');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8, ease: "easeOut"
            }}
            viewport={{ once: true }}
            id='home'
            className='w-full text-white bg-linear-to-r from-[#101010] via-[#171515] to-[#242424] min-[1350px]:px-30 py-20 pl-14 pr-10'>
            <div className='flex max-[1000px]:flex-wrap max-[1000px]:justify-center justify-between items-center md:flex-row'>
                <div className='font-bold max-md:text-center '>
                    <span className='text-3xl'>Hi, It's me </span> <br />
                    <h2 className='text-[#ffff] pt-2 md:pt-3 text-4xl md:text-6xl'>Maaz Ishtiaq</h2>
                    <h3 className='text-2xl mt-2 md:mt-5 '>I'm <span className='text-[#FF5F00] text-3xl md:text-4xl typewriter'>{text}</span></h3>
                    <p className='text-gray-400 text-lg max-w-xl mt-4'>
                        A passionate Frontend Developer with a knack for creating engaging and user-friendly web experiences. I specialize in building responsive and dynamic interfaces using modern web technologies.
                    </p>
                    <div className="font-light max-md:justify-center text-4xl mt-5 flex gap-7">
                        <button className="p-1 rounded-full transition cursor-pointer
                     hover:text-white hover:shadow-lg shadow-orange-500
                     active:scale-90"
                            onClick={() => window.open('https://www.instagram.com/muaaz_ishtiaq?igsh=bWFubG15dTRtbTJy', '_blank')}
                        >
                            <i className="ri-instagram-line"></i>
                        </button>

                        <button className="p-1 rounded-full transition cursor-pointer
                     hover:text-white hover:shadow-lg shadow-orange-500
                     active:scale-90"
                            onClick={() => window.open('https://www.facebook.com/share/17fKGjAZQo/', '_blank')}
                        >
                            <i className="ri-facebook-circle-line"></i>
                        </button>

                        <button className="p-1 rounded-full transition cursor-pointer
                     hover:text-white hover:shadow-lg shadow-orange-500
                     active:scale-90"
                            onClick={() => window.open('https://github.com/Maaz-Ishtiaq', '_blank')}
                        >
                            <i className="ri-github-fill"></i>

                        </button>

                        <button className="p-1 rounded-full transition cursor-pointer
                     hover:text-white hover:shadow-lg shadow-orange-500
                     active:scale-90"
                            onClick={() => window.open('https://www.linkedin.com/in/maaz-ishtiaq-335014319/', '_blank')}
                        >
                            <i className="ri-linkedin-fill"></i>
                        </button>
                    </div>

                    <button onClick={handleDownload} className='bg-[#FF5F00] shadow-2xl shadow-amber-600 text-white px-6 py-3 cursor-pointer active:scale-95 rounded-full text-lg font-semibold mt-8 hover:bg-orange-600 transition-colors duration-300'>
                        Download CV
                    </button>

                </div>
                <div className='relative right-0'>
                    <img src={assets.muaaz} alt="Maaz Ishtiaq" className='w-62.5 h-62.5 md:w-125 md:h-125 hover:scale-101 rounded-full object-cover mt-10 md:m-4 shadow-xl shadow-orange-500/30' />
                </div>

            </div>


        </motion.div>
    )
}

export default Hero