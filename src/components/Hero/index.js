import React from 'react'
import landing from '../../assets/responsive.png'
import Arrow from '../../assets/arrow.svg'
import { motion } from 'framer-motion'

export default function Hero({ ActivComponent, skills, setActivComponent, setSkills }) {

    const showAll = () => {
        setActivComponent(!ActivComponent);
        setSkills(!skills)
    }
    return (
        <motion.div
            initial={{ scale: 0, x: '100vw' }}
            animate={{ x: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}



            id='hero' className="container">
            <div className="row">
                <div className="col-md-6">
                    <motion.div

                        className="leftbox">
                        <img src={landing} alt="heroImage" />
                        <div className="opaque1"></div>
                        <div className="opaque2"></div>
                        <p>VISUAL CONCEPTION</p>
                    </motion.div>
                </div>


                <motion.div
                    initial={{ opacity: 0, x: "100vh" }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
                    className="col-md-6">
                    <div className="rightbox">
                        <h1>Je suis Tahiry</h1>
                        <h1>Front End <span>Developpeur</span></h1>
                        <h1><span>& Designer</span></h1>

                        <motion.div


                            className="buttons">
                            {skills ? <motion.button
                                whileHover={{ scale: 1.5 }}

                                onClick={showAll} className='btnNoir'>Voir Moin <motion.img animate={{ rotate: 0 }} fill='red' style={{ transform: "rotate(90deg)" }} src={Arrow} alt="arrow" /></motion.button> : <motion.button
                                    whileHover={{ scale: 1.5 }}

                                    onClick={showAll} className='btnNoir'>Voir Plus <motion.img animate={{ rotate: 180 }} fill='red' src={Arrow} alt="arrow" /></motion.button>}

                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
