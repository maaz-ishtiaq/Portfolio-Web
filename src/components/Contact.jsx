import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion"
import { useState } from "react";
function Contact() {
     const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "deb61484-46e6-47b7-90a6-b77594ef5935");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "✅ Your message Sent Successfully!" : "Error");    setTimeout(() => {
      setResult(" ");
    }, 3000);
    
    event.target.reset();
  }
    return (
        <div id="contact" className='scroll-mt-20 mt-20 overflow-hidden'>

            {/* text */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1, ease: "easeOut"
                }}
                viewport={{ once: true }}
                className='text-center'>
                <h1 className='md:text-6xl font-bold text-4xl text-orange-600 '>Get in Touch</h1>
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "60%" }}
                    transition={{
                        duration: 2.4, ease: "easeOut", delay: 0.3
                    }}
                    viewport={{ once: true }}
                    className='w-[20%] md:max-w-md h-2 mt-5 relative rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2
                bg-linear-to-r from-orange-900 via-orange-500 to-orange-800 
               '></motion.div>
                <h2 className='font-semibold pt-5 px-2 text-center text-xl'>Ready to bring your <span className='text-orange-700'>ideas to life?</span>  Let's create something amazing <br /> together.</h2>
            </motion.div>

            {/* Section */}

            <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-20 px-5 max-w-8xl mx-auto'>

                {/* getintouch */}

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1, ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className='bg-white/5 border border-white/10 rounded-2xl p-6 w-full md:w-[40%] min-w-62.5'>

                    <h1 className='text-3xl font-semibold'>Get in Touch</h1>
                    <div className='flex flex-col gap-5 mt-5'> <div className='flex items-center gap-5'>
                        <MdEmail size={28} className='text-orange-500' />
                        <div>
                            <h1 className='text-white/30'>Email</h1>
                            <h2>maazishtiaq285@gmail.com</h2>
                        </div>
                    </div>
                        <div className='flex items-center gap-5'>
                            <i className="ri-phone-fill text-orange-500 text-3xl"></i>
                            <div>
                                <h1 className='text-white/30'>Phone</h1>
                                <h2>+92 304 4653770</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-5'>
                            <i className="ri-map-pin-fill text-orange-500 text-3xl"></i>
                            <div>
                                <h1 className='text-white/30'>Address</h1>
                                <h2>Lahore, Pakistan</h2>
                            </div>
                        </div>
                    </div>


                </motion.div>
                {/* inputsection */}

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 1, ease: "easeOut"
                    }}
                    viewport={{ once: true }}
                    className='bg-white/5 border border-white/10 rounded-2xl p-6 w-full md:w-[40%] '>
                    <form className='flex flex-col gap-4' onSubmit={onSubmit}>
                        <h1 className='text-3xl font-semibold '>Contact Form</h1>
                        <div className='flex gap-4 max-md:flex-wrap '>
                            <input type="text" placeholder='Name' name="name" className='w-1/2 p-3 max-md:w-full  rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500' />
                            <input type="email" placeholder='Email' name="email"className='w-1/2 max-md:w-full  p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500' />
                        </div>
                        <textarea placeholder='Message' name="message" rows="5" className='w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-orange-500 resize-none'></textarea>
                        <button type="submit" className='cursor-pointer w-full p-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all duration-300'>Send Message</button>
                    <p className="text-green-700">{result} </p>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact
