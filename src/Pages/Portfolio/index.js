import React from 'react'
import design from '../../assets/design-tools.png'
import trace1 from '../../assets/trace1.png';
import trace2 from '../../assets/trace2.png';
import trace3 from '../../assets/trace3.png';
import process from '../../assets/engineering.png';
import mock2 from '../../assets/mockup.png'
import start from '../../assets/start-sign.png'
import compas from '../../assets/compass.png'
import mock3 from '../../assets/395690.png'
import mock4 from '../../assets/time.png'
import mock5 from '../../assets/mockup2.jpg'
import mock6 from '../../assets/mockup3.jpg'
import mock7 from '../../assets/mock4.jpg'
import { motion } from 'framer-motion'

import satisfaction from '../../assets/rating.png'

import './portfolio.css'
export default function Portfolio() {
    return (

        <>
            <motion.div
                initial={{ opacity: 0, x: '200vw' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 20 }}


                id='portfolio' className="portfolio">
                <div id='one' className="one">
                    <img src={trace1} alt="" />
                </div>

                <div className="two">
                    <img src={trace2} alt="" />
                </div>

                <div className="three">
                    <img src={trace3} alt="" />
                </div>

                <div className="row">
                    <div className="col carousel-container">

                        <div className="greybox">
                            <img className="designIcon" src={design} alt="designIcon" />

                            <h5>Réaliation Complète de maquettes</h5>
                        </div>





                    </div>
                </div>



                <div className="row">
                    <div className="col-md-4">
                        <img width='100%' id='mock' className="mock2" src={mock7} alt="maquette" />
                    </div>
                    <div className="col-md-4">
                        <img width='100%' className="mock2" src={mock5} alt="maquette" />
                    </div>
                    <div className="col-md-4">
                        <img width='100%' className="mock2" src={mock6} alt="maquette" />
                    </div>
                </div>



                <div className="greybox boxplan">
                    <img className="designIcon" src={process} alt="process" />

                    <h5 className="plan">Mes Services</h5>

                    <div className="row">
                        <div className="col">
                            <div className="cards">
                                <div className="little-card">
                                    <h6>DEMARRAGE RAPIDE</h6>
                                    <img className="code" src={start} alt="" />
                                </div>

                                <div className="little-card">
                                    <h6>SUR MESURE</h6>
                                    <img className="code" src={compas} alt="" />
                                </div>

                                <div className="little-card">
                                    <h6>ACCOMPAGNEMENT</h6>
                                    <img className="code" src={mock3} alt="" />
                                </div>

                                <div className="little-card">
                                    <h6>TRAVAIL A TEMPS</h6>
                                    <img className="code" src={mock4} alt="" />
                                </div>

                                <div className="little-card last">
                                    <h6>SATISFACTION</h6>
                                    <img className="code" src={satisfaction} alt="" />
                                </div>

                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            </motion.div>

            <div className="row">
                <div className="col">

                    <motion.img
                        initial={{ opacity: 0, x: '100vw' }}
                        animate={{ opacity: 1, x: 0, scale: 0.9 }}

                        transition={{ type: 'spring', stiffness: 60 }}
                        className='mockup' src={mock2} alt="mockup design" />
                </div>
            </div>
        </>
    )
}
