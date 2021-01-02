import styled from 'styled-components'
import { motion } from 'framer-motion'
import * as React from "react";

export const svgVariants = {
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
}

const TriangleStyle = styled(motion.svg)`
    display: flex;
    margin: 0 auto;
    margin-top: 20px;
    width: 80px;
    overflow: visible;
    stroke: #fff;
    stroke-width: 4;
    stroke-linejoin: round;
    stroke-linecap: round;
`

export const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 2,
            ease: 'easeInOut'
        }
    }
}

export const Triangle = (): JSX.Element => {
    return (

        <TriangleStyle
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            variants={svgVariants}
            initial='hidden'
            animate='visible'
        >
            <motion.path
                fill="none"
                d="M 50,5 95,97.5 5,97.5 z"
                variants={pathVariants}
            />
        </TriangleStyle>
    )
}
