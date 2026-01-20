import { motion } from "framer-motion";
const Footer = () => {
  const text = '</>'

  return (
    <motion.footer
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2, ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="bg-white/5 border-t border-white/10 mt-20 h-auto py-10 md:h-36 justify-between items-center px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 md:gap-y-0">

      <div className='flex gap-3 items-center justify-center md:justify-start'>
        <div className="w-10 h-10 bg-linear-to-r from-orange-500 to-orange-600 bg-size-[200%_200%] animate-spin animate-gradient text-center duration-600 font-bold text-lg rounded-full flex items-center justify-center">
          {text}
        </div>
        <a href="#" className='text-white '> <span className='sm:text-2xl mt-1 font-bold'>Maaz </span>
          <span className='sm:text-2xl mt-1 font-bold'>Ishtiaq</span>
          <p className='text-[12px] sm:text-[15px] font-light text-gray-400 '>Frontend Developer</p>
        </a>
      </div>


      {/* {button} */}
      <div className="flex justify-center">
        <button className='text-2xl w-13 h-13 mx-4 md:mx-8 cursor-pointer bg-white/10 rounded-full hover:border hover:border-white/30 hover:scale-120 hover:bg-white/20 transition-transform duration-500'
          onClick={() => window.open('https://github.com/Maaz-Ishtiaq', '_blank')}
        >
          <i className="ri-github-fill"></i>
        </button>
        <button className='text-2xl w-13 h-13 cursor-pointer bg-white/10 rounded-full hover:border hover:border-white/30 hover:scale-120 hover:bg-white/20 transition-transform duration-500'
          onClick={() => window.open('https://www.linkedin.com/in/maaz-ishtiaq-335014319/', '_blank')}
        >
          <i className="ri-linkedin-fill"></i>
        </button>

      </div>

      {/* text */}
      <div className="text-center md:text-right sm:col-span-2 md:col-span-1">
        <p className=" text-lg">
          &copy; {new Date().getFullYear()} Maaz Ishtiaq. <br />Crafted with ❤️ and code .
        </p>

      </div>
    </motion.footer>
  );
};

export default Footer;
