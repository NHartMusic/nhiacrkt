import styled from 'styled-components'
import { motion } from 'framer-motion'
import { SmallDesktop, iPad } from '../UI/MediaQueries'

export const Icon = styled.img`
    width: 100%;
    height: 100%;
    min-width: 50px; 
    min-height: 50px;
    max-width: 100px; 
    max-height: 100px;
    padding: 10px;

    @media ${iPad} {
        max-width: 50px;
        max-height: 50px;
    }
`

export const ImageBanner = styled.img`
    display: flex;
    margin: 0 auto;
    padding: 20px;
    min-width: 880px;
    min-height: 100px;
    max-width: 2200px;
    max-height: 200px;
    height: 100%;
    width: 100%;

    @media ${SmallDesktop} {
        display: none;
    }
`

export const ImageLarge = styled.img`
    display: flex;
    margin: 0 auto;
    padding: 20px;
    min-width: 300px;
    min-height: 300px;
    max-width: 700px;
    max-height: 700px;
    height: 100%;
    width: 100%;

    @media ${SmallDesktop} {
        height: 100%;
        width: 100%;
        max-width: 500px;
        max-height: 500px;
    }

    @media ${iPad} {
        height: 100%;
        width: 100%;
        max-width: 400px;
        max-height: 400px;
    }
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
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, duration: 2.1 }
    }
}

export const fade2 = {
    hidden: {
        opacity: 0
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

export const fade4 = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: 1.2, duration: 3.5 }
    }
}