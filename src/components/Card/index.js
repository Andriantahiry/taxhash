import React from 'react'
import { motion } from 'framer-motion'

export default function Card({ item, src, text, width, classlist }) {
    return (
        <motion.div variants={item} whileHover={{ scale: 1.1, cursor: 'pointer' }} transition={{ type: 'spring', stiffness: 300 }} className="card">
            <p>{text}</p>

            <img className={classlist} width={width} src={src} alt={text} />
        </motion.div>
    )
}
