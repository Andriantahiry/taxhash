import { React, useState } from 'react'
import trait from '../../assets/trait.png'
import './skill.css'
import Card from '../Card'
import html from '../../assets/html5.png'
import bootstrap from '../../assets/bootstrap.png'
import css from '../../assets/css3.png'
import vue from '../../assets/vue.png'
import xd from '../../assets/xd.png'
import react from '../../assets/react.png'
import php from '../../assets/php.png'
import strapi from '../../assets/strapi.svg'
import { AnimatePresence, motion } from 'framer-motion'

export default function Skills() {
    const [skills, setSkills] = useState([
        { src: html, text: "HTML", width: '150px', classlist: 'html' },
        { src: css, text: "CSS", width: '80px', classlist: 'css' },
        { src: bootstrap, text: "BOOTSTRAP", width: '100px', classlist: 'bootstrap' },
        { src: vue, text: "VUE", width: '100px', classlist: 'vue' },
        { src: xd, text: "XD", width: '100px', classlist: 'xd' },
        { src: react, text: "REACT", width: '100px', classlist: 'react' },
        { src: php, text: "PHP", width: '100px', classlist: 'php' },
        { src: strapi, text: "STRAPI", width: '100px', classlist: 'strapi' },
    ])

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
            <AnimatePresence>

                <motion.div
                    variants={container}
                    initial='hidden'
                    animate='visible'
                >

                    <div className="container">

                        <div className="skill-dash">
                            <img height='1px' width='25%' src={trait} alt="dash" />
                            <h1>Mes Compétences</h1>
                            <img height='1px' width='25%' src={trait} alt="dash" />

                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 card-container">
                                {skills.map((x, index) => <Card item={item} key={index} src={x.src} text={x.text} width={x.width} classlist={x.classlist} />)}
                            </div>
                        </div>
                    </div>
                </motion.div>

            </AnimatePresence>
        </>
    )
}
