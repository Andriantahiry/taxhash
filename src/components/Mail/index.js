import React from 'react'
import './mail.css'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function Mail() {
    return (

        <>
            <motion.div className="container mail"
                drag
                dragConstraints={{ left: -100, right: 100, bottom: -50, top: -100 }}
                whileHover={{ cursor: 'pointer' }}
            >

                <h1 className='mail-title'>Me Contacter</h1>
                <div className="form">

                    <Button variant='outlined' textColor='light' color='light' >
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/contact'>Me contacter</NavLink></Button>
                </div>
            </motion.div>
            <br /><br />

        </>
    )
}
