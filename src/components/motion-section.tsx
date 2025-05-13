'use client'

import { motion as Motion } from 'motion/react'

const variants = {
    hidden: { opacity: 0.5, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
}

export const MotionSection = ({ children, ...props }: React.ComponentProps<typeof Motion.section>) => {
    return (
        <Motion.section
            initial="hidden"
            whileInView="visible"
            variants={variants}
            {...props}
        >
            {children}
        </Motion.section>
    )
}