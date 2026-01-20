import { useState, useEffect } from 'react'
import { HomeIcon } from '../icons/HomeIcon';
import { ExperienceIcon } from '../icons/ExperienceIcon';
import { SkillsIcon } from '../icons/SkillsIcon';
import { ProjectsIcon } from '../icons/ProjectsIcon';
import { ContactIcon } from '../icons/ContactIcon';
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('Home');
  const text = "</>"
  const [showmenu, setShowmenu] = useState(false);
  const NavItem = [
    { name: 'Home', icon: HomeIcon },
    { name: 'Skills', icon: SkillsIcon },
    { name: 'Education', icon: ExperienceIcon },
    { name: 'Projects', icon: ProjectsIcon },
    { name: 'Contact', icon: ContactIcon },
  ];

  

  useEffect(() => {

    const handleOutsideClick = (e) => {
      if (showmenu && !e.target.closest('nav')) {
        setShowmenu(false);

      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [showmenu])

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, name) => {
    e.preventDefault();
    setActiveItem(name);
    setShowmenu(false);
    const id = name.toLowerCase();
    if (location.pathname === '/') {
      scrollToSection(id);
      setActiveItem(name);
    }
      else {
      if (name === 'Home') navigate('/');
      else if (name === 'Skills') navigate('/Skill');
      else if (name === 'Education') navigate('/Education');
      else if (name === 'Contact') navigate('/Contact');
      else if (name === 'Projects') navigate('/Projects');
      
      else {
        navigate('/');
        setTimeout(() => scrollToSection(id), 100);
      }

    }

  };


  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.5, ease: "easeOut"
        }}
        viewport={{ once: true }}
      >
        <nav className='w-full bg-[#1C1C1C] backdrop-blur-sm sticky top-0 py-4 px-8 lg:px-26 z-50 shadow-xl'>
          <div className=' flex justify-between mx-auto items-center'>

            {/* navbar title */}
            <div className='flex gap-3 items-center'>
              <div className="w-10 h-10 bg-linear-to-r from-orange-500 to-orange-600 bg-size-[200%_200%] animate-spin animate-gradient text-center duration-600 font-bold text-lg rounded-full flex items-center justify-center">
                {text}
              </div>
              <Link to='/' href="#" className='text-white '> <span className='sm:text-2xl mt-1 font-bold'>Maaz </span>
                <span className='sm:text-2xl mt-1 font-bold'>Ishtiaq</span>
                <p className='text-[12px] sm:text-[15px] font-light text-gray-400 '>Frontend Developer</p>
              </Link>
            </div>

            {/* navbar links */}
            <div className='hidden md:flex bg-[#1c1c1c] rounded-full  px-4 py-2 items-center space-x-2 border border-gray-700'>
              {NavItem.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.name;
                return (
                  <a
                    key={item.name}

                    onClick={(e) => handleNavClick(e, item.name)}
                    className={`relative px-5 max-[1040px]:p-2 py-2 text-sm rounded-full flex items-center gap-2 transition-colors duration-300 cursor-pointer ${isActive
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </div>
            <div className='md:hidden text-2xl cursor-pointer'>
              {
                showmenu ? <span onClick={() => setShowmenu(!showmenu)}>X</span> : <span onClick={() => setShowmenu(!showmenu)}>☰</span>
              }
            </div>
          </div>
        </nav>



        {/* mobile */}
        <div className={`fixed top-0 left-0 w-full border-b border-black border-y rounded-4xl bg-[#1C1C1C] z-40 flex flex-col pt-28 pb-5 items-center gap-5 transition-transform duration-800 ease-in-out ${showmenu ? 'translate-y-0' : '-translate-y-full'}`}>
          {
            NavItem.map((items) => {
              const Icon = items.icon;
              const isActive = activeItem === items.name;
              return (
                <a
                  key={items.name}
                  className={`relative px-4 py-2 border rounded-full border-gray-700 transition-color duration-300 cursor-pointer ${isActive ? 'bg-white text-black' : 'text-gray-400 hover:text-white'}`}
                  onClick={(e) => handleNavClick(e, items.name)}
                >
                  <Icon className="w-4 h-4 inline-block mr-2" />
                  {items.name}
                </a>
              )
            })
          }
        </div>
      </motion.div>
    </>


  )
}

export default Navbar;
