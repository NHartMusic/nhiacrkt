import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from 'styled-components'
import { Blues } from '../UI/Colors'

const ScrollWrapper = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    margin: 0 auto;
`

const ScrollContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: white;
    border-radius: 50%;
`

export const ScrollContainerLightBlue = styled(ScrollContainer)`
    background: ${Blues[1]};
`

export const ScrollContainerDarkBlue = styled(ScrollContainer)`
    background: ${Blues[6]};
`

export const CircleWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
`

const ScrollCircle = styled(motion.div)`
    width: 100px;
    height: 100px;
    transform-origin: 50% 50%;
    margin: 0 auto;
`

export const CircleWhite = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 0.5]);

    return (
        <ScrollWrapper>
            <ScrollContainerLightBlue
                className="container"
                style={{
                    scale
                }}
            >
                <ScrollCircle
                    className="item"
                    style={{
                        scaleY: scrollYProgress
                    }}
                />
            </ScrollContainerLightBlue>
        </ScrollWrapper>
    )
}

export const CircleLightBlue = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 0.5]);

    return (
        <ScrollWrapper>
            <ScrollContainerDarkBlue
                className="container"
                style={{
                    scale
                }}
            >
                <ScrollCircle
                    className="item"
                    style={{
                        scaleY: scrollYProgress
                    }}
                />
            </ScrollContainerDarkBlue>
        </ScrollWrapper>
    )
}

export const CircleDarkBlue = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 0.5]);

    return (
        <ScrollWrapper>
            <ScrollContainer
                className="container"
                style={{
                    scale
                }}
            >
                <ScrollCircle
                    className="item"
                    style={{
                        scaleY: scrollYProgress
                    }}
                />
            </ScrollContainer>
        </ScrollWrapper>
    )
}
