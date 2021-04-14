import { React, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo1.svg'
import './header.css'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
export default function Header() {
    const [menu, setmenu] = useState(false);
    const navRef = useRef(null)



    const toggleClass = (e) => {
        e.target.parentNode.parentNode.classList.toggle('show');
        navRef.current.classList.toggle('active');
        setmenu(!menu);
    }

    return (

        <>




            <div ref={navRef} onClick={toggleClass} className="humberger">
                <span></span>
            </div>
            <nav  >
                <NavLink to='/'> <img width='100px' src={Logo} alt="logo" /> </NavLink>


                <AnimatePresence>

                    {
                        menu && <motion.ul
                            initial={{ x: '200px' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100vw' }}
                            transition={{ type: 'spring', stiffness: 120 }}
                            className='nav-item'>
                            <motion.li
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: 'spring', stiffness: 500 }}
                                className="links"> <NavLink to='/' > Accueil</NavLink> </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: 'spring', stiffness: 500 }}
                                className="links"> <NavLink to='/apropos' > À propos</NavLink> </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: 'spring', stiffness: 500 }}
                                className="links"> <NavLink to='/portfolio' >Portfolio</NavLink> </motion.li>
                            <motion.li
                                whileHover={{ scale: 1.5 }}
                                transition={{ type: 'spring', stiffness: 500 }}
                                className="links"> <NavLink to='/contact' > Contact</NavLink> </motion.li>
                        </motion.ul >
                    }
                </AnimatePresence>


            </nav>

        </>
    )
}
