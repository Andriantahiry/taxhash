import { React, useState } from 'react'
import './about.css'
import growth from '../../assets/growth.svg'
import travImage from '../../assets/travail.png'
import { useHistory } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function About() {
    const [travail, settravail] = useState(true);
    const [appel, setappel] = useState(false);
    const showAppel = () => {
        setappel(!appel)
    }

    const returned = () => {
        setappel(!appel);
        settravail(!travail)
    }

    const history = useHistory()
    return (
        <AnimatePresence exitBeforeEnter>

            <motion.div
                initial={{ y: '200vh', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6  grand-titre">
                            <AnimatePresence>

                                {travail ? <motion.div

                                    initial={{ y: '200vh', opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: 'spring', stiffness: 200, duration: 1.1 }}
                                    className="designBox"><h1>Design <span>&</span> Code est en 🔥</h1>
                                    <h3>Voulez vous travailler avec moi?</h3>
                                    <br />
                                    <p>Réalisons vos Projets <span>ensemble</span></p>
                                    <br />
                                    <br />
                                    <motion.button
                                        whileHover={{ scale: 1.2 }}
                                        onClick={() => settravail(!travail)} className="first-button">Qui suis-je ?</motion.button></motion.div> :
                                    <div className="designBox">
                                        <h1> <span>Andriantahiry Nomenahasina</span></h1>
                                        <h3>Webdesigner et <span>Developpeur Front End</span></h3>
                                        <br />
                                        <p>Freelancer, digital Nomade </p>
                                        <br />
                                        <br />
                                        <div>{appel ? <motion.button whileHover={{ scale: 1.2 }} onClick={showAppel} className="first-button">...</motion.button> : <motion.button whileHover={{ scale: 1.2 }} onClick={showAppel} className="first-button">Vous aimez ?</motion.button>}{appel && <motion.button whileHover={{ scale: 1.2 }} onClick={returned} className="first-button">Retour</motion.button>}</div>
                                    </div>

                                }
                            </AnimatePresence>

                            {
                                appel && <div><motion.button whileHover={{ scale: 1.2 }} onClick={() => history.push('/contact')} className="first-button">Me Contacter</motion.button><motion.button whileHover={{ scale: 1.2 }} onClick={() => history.push('/portfolio')} className="first-button">Portfolio </motion.button></div>
                            }

                        </div>

                        <div className="col-md-6">
                            {travail ? <motion.img

                                className="growth" src={growth} alt="illustration" /> : <motion.img


                                className="travail" src={travImage} alt="travail" />}
                        </div>
                    </div>
                </div>
            </motion.div >
        </AnimatePresence>
    )
}
