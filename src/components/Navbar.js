import React, {useState} from 'react'
import { FaBars , FaTimes,FaGithub,FaLinkedin, FaFacebook, FaTelegram} from 'react-icons/fa'
import {HiOutLineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../img/ass-img/logotm.png'
import Resume from '../img/Resume.pdf'
import {Link} from 'react-scroll'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed z-10 max-w-md:fixed w-full h-[65px] flex justify-between items-center px-4 bg-[#32507d] text-gray-300 font-bold'>
        <div>
          <img className='logo' alt='Logo' src={Logo} width='80px' />
        </div>
        {/* {Menu} */}
              <ul className='hidden md:flex'>
                  <li>
                  <Link to='home' smooth={true} duration={500}>
                      Home
                  </Link>
                  </li>
                  <li>
                  <Link to='portfolio' smooth={true} duration={500}>
                      Portfolio
                  </Link>
                  </li>
                  <li>
                  <Link to='Skills' smooth={true} duration={500}>
                      About & Skills
                  </Link>
                  </li>
                  <li>
                    <Link to='pet' smooth={true} duration={500}>
                      Pet Projects
                  </Link>
                  </li>
                  <li><Link to='contact' smooth={true}>
                      Contact
                  </Link></li>
              </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars className='hover:text-pink-600 duration-500  ' /> : <FaTimes className='hover:text-pink-600 duration-300' />}
        </div>
        {/* {Mobile menu} */}
        <ul className={!nav ? 'hidden': 'fixed z-100 top-0 left-0 w-full h-screen bg-[#32507d] flex flex-col justify-center items-center transition duration-150 ease-out hover:ease-in'}>
              <li  className='py-4 text-3xl hover:text-slate-500 duration-300'><Link onClick={handleClick} to='home' smooth={true} duration={500}>
                      Home
                  </Link></li>
              <li className='py-4 text-3xl hover:text-slate-500 duration-300'><Link onClick={handleClick} to='portfolio' smooth={true} duration={500}>
                      Portfolio
                  </Link></li>
              <li className='py-4 text-3xl hover:text-slate-500 duration-300'><Link onClick={handleClick} to='Skills' smooth={true} duration={500}>
                      About & Skills
                  </Link></li>
              <li className='py-4 text-3xl hover:text-slate-500 duration-300'><Link onClick={handleClick} to='pet' smooth={true} duration={500}>
                      Pet Projects
                  </Link></li>
              <li className='py-4 text-3xl hover:text-slate-500 duration-300'><Link onClick={handleClick} to='contact' smooth={true}>
                      Contact
                  </Link></li>
        </ul>
        {/* {Social Icons} */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1b1e21]'>
                <a href={Resume} download={Resume} className='flex justify-between items-center w-full text-gray-300'>
                    Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4e4e4c]'>
                <a href='https://github.com/Wessard'  className='flex justify-between items-center w-full text-gray-300'>
                    GitHub <FaGithub size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
                <a href="https://www.facebook.com/miwa.ten" className='flex justify-between items-center w-full text-gray-300'>
                    Facebook <FaFacebook size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a href="https://t.me/Meeting95" className='flex justify-between items-center w-full text-gray-300'>
                    Telegram <FaTelegram size={30} />
                </a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar