import React from 'react'
import { motion } from 'framer-motion'

export default function Card({ item, src, text, width, classlist }) {
    return (
        <motion.div drag dragElastic={1} dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} variants={item} whileHover={{ scale: 1.1, cursor: 'pointer' }} transition={{ type: 'spring', stiffness: 300 }} className="card">
            <p>{text}</p>

            <img className={classlist} width={width} src={src} alt={text} />
        </motion.div>
    )
}
