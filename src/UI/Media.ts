import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ImageLarge = styled.img`
    display: flex;
    margin: 0 auto;
    padding: 20px;
    min-width: 300px;
    min-height: 300px;
    max-width: 800px;
    max-height: 800px;
    height: 100%;
    width: 100%;
`

export const ImageSmall = styled.img`
    display: flex;
    margin: 0 auto;
    padding: 20px;
    min-width: 150px;
    min-height: 150px;
    max-width: 400px;
    max-height: 250px;
    height: 100%;
    width: 100%;
`

export const ImageContainer = styled(motion.div)`
    display: flex;
    margin: 0 auto;
    align-items: center;
`

export const fade0 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.3, duration: 1.8 }
    }
}

export const fade1 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, duration: 2.1 }
    }
}

export const fade2 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.7, duration: 2.5 }
    }
}

export const fade3 = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.8, duration: 2.8 }
    }
}