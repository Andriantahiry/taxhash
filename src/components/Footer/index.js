import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'
import facebook from '../../assets/facebook.svg';
import linkedin from '../../assets/linkedin.svg';
import git from '../../assets/github.svg';
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion';

function Footer() {
    const history = useHistory()
    return (
        <footer>

            <div className="foot-contain">

                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">

                                <motion.h1
                                    whileHover={{ scale: 1.5 }}
                                    transition={{ type: 'spring', stiffness: 120 }}
                                    onClick={() => history.push('/')} className='footer-title'> <a className="last-link" href="#hero">Port<span>folio</span></a> </motion.h1>
                            </div>

                            <div className="col-md-4">
                                <ul className="items">
                                    <motion.li
                                        whileHover={{ scale: 1.5, x: 2 }}
                                        transition={{ type: 'spring', stiffness: 120 }}

                                    > <NavLink to='/apropos' >Apropos</NavLink> </motion.li>
                                    <motion.li
                                        whileHover={{ scale: 1.5, x: 2 }}
                                        transition={{ type: 'spring', stiffness: 120 }}

                                    > <NavLink to='/portfolio' onClick={() => history.push('/portfolio')}>Portfolio</NavLink> </motion.li>
                                    <motion.li
                                        whileHover={{ scale: 1.5, x: 2 }}
                                        transition={{ type: 'spring', stiffness: 120 }}

                                    > <NavLink to='/contact'>Contacter</NavLink> </motion.li>
                                </ul>
                            </div>

                            <div className="col-md-4">
                                <ul className="items2">
                                    <motion.li
                                        whileHover={{ scale: 1.5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    > <a target='blank' href='https://web.facebook.com/tahiry.hasina.56'><img width='50px' src={facebook} alt="facebook" /></a> </motion.li>

                                    <motion.li
                                        whileHover={{ scale: 1.5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    > <a target='blank' href='https://andriantahiry.github.io/todo-react-app/'>Todo</a> </motion.li>
                                    <motion.li
                                        whileHover={{ scale: 1.5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    > <a target='blank' href='https://www.linkedin.com/in/nomenahasina-andriantahiry-148182157?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BS2S0%2FtVZSdWlxjPqK1y8pQ%3D%3D'><img width='50px' src={linkedin} alt="linkeding" /></a> </motion.li>

                                    <motion.li
                                        whileHover={{ scale: 1.5 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    > <a target='blank' href='https://github.com/Andriantahiry'><img width='50px' src={git} alt="git" /></a> </motion.li>
                                </ul>
                            </div>
                        </div>




                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
