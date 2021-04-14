import React from 'react'
import trait from '../../assets/trait.png'
import image1 from '../../assets/firstImage.png'
import image2 from '../../assets/secondImage.png'
import image3 from '../../assets/thirdImage.png'
import mobile from '../../assets/mobile.png'
import techno from '../../assets/technology-products.png'
import coding from '../../assets/coding.png'
import './activity.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function Activity() {

    const container = {
        hidden: { opacity: 0, y: '-100vh' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 60,
                delayChildren: 0.5,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { x: -50, y: 20, opacity: 0 },
        visible: {
            y: 0,
            x: 0,
            opacity: 1
        }
    }
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    variants={container}
                    initial='hidden'
                    exit={{ y: "-100vh", x: -500 }}
                    animate='visible'
                >

                    <div className="container">

                        <div className="activity-dash">
                            <img height='1px' width='25%' src={trait} alt="dash" />
                            <h1>Mes Activités</h1>
                            <img height='1px' width='25%' src={trait} alt="dash" />

                        </div>
                    </div>

                    <div className="container boxes">
                        <div className="row">
                            <div className="col-md-4 box ">
                                <motion.img
                                    variants={item}
                                    src={mobile} className="icones" alt="mobile" />
                                <div className="firstbox">UX mobile design </div>
                            </div>

                            <div className="col-md-4 box ">
                                <motion.img
                                    variants={item}
                                    src={techno} className="icones" alt="techno" />

                                <div className="secondbox">Digital Product</div>
                            </div>

                            <div className="col-md-4 box ">
                                <motion.img
                                    variants={item}
                                    src={coding} className="icones" alt="coding" />

                                <div className="thirdbox">Ergonomie thinking</div>
                            </div>
                        </div>
                    </div>


                    <div className="container boxes">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 box ">
                                <div className="secondbox">Ecommerce</div>
                                <motion.img
                                    variants={item}
                                    className="image1" src={image1} alt="image1" />
                            </div>

                            <div className="col-md-4 col-sm-6 box ">
                                <div className="secondbox">Admin Panel & CRM</div>

                                <motion.img
                                    variants={item}
                                    className="image2" src={image2} alt="image2" />
                            </div>

                            <div className="col-md-4 col-sm-12 box ">
                                <div className="secondbox">SEO FRIENDLY</div>

                                <motion.img
                                    variants={item}
                                    className="image3" src={image3} alt="image3" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </AnimatePresence>
        </>
    )
}
