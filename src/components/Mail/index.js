import React from 'react'
import './mail.css'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'

export default function Mail() {
    return (

        <>
            <motion.div className="container mail"
                
                whileHover={{ cursor: 'pointer' }}
            >

                <h1 className='mail-title'>Exemple de bloc-notes avec React</h1>
                <div className="form">

                    <Button variant='outlined' textColor='light' color='black' >
                        <a style={{ textDecoration: 'none', color: 'black', margin: "5px" }} href='https://andriantahiry.github.io/todo-react-app/' target='_blank' rel="noopener noreferrer">Voir le demo</a></Button>

                    <Button variant='outlined' textColor='light' color='black' >
                        <a target='_blank' style={{ textDecoration: 'none', color: 'black', margin: "5px" }} href='https://github.com/Andriantahiry/todo-react-app.git' rel="noopener noreferrer">Lien Github</a></Button>
                </div>
            </motion.div>
            <br /><br />

        </>
    )
}
