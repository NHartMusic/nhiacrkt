import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion"
import styled from 'styled-components'
import { Blues } from '../ui/Colors'
import { SmallDesktop, iPad, CircleBreakPoint1 } from '../ui/MediaQueries'

const ScrollWrapper = styled.div`
    width: 150px;
    height: 150px;
    display: flex;
    margin: 0 auto;

    
    @media ${SmallDesktop} {
        width: 120px;
        height: 120px;
    }

    @media ${iPad} {
        width: 100px;
        height: 100px;
    }

    @media ${CircleBreakPoint1} {
        display: none;
    }

`

const ScrollWrapperLightBlue = styled(ScrollWrapper)`
    @media ${CircleBreakPoint1} {
        display: none;
    }
`

const ScrollContainer = styled(motion.div)`
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000000;
    border-radius: 50%;
`

export const ScrollContainerLightBlue = styled(ScrollContainer)`
    background: ${Blues[1]};

    @media ${CircleBreakPoint1} {
        display: none;
    }
`

export const ScrollContainerMediumBlue = styled(ScrollContainer)`
    background: ${Blues[3]};
`

export const ScrollContainerDarkBlue = styled(ScrollContainer)`
    background: ${Blues[6]};
`

export const CircleWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;

    @media ${CircleBreakPoint1} {
        display: none;
    }
`

const ScrollCircle = styled(motion.div)`
    transform-origin: 50% 50%;
    margin: 0 auto;
`

export const CircleWhite = () => {
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

export const CircleLightBlue = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 0.5]);

    return (
        <ScrollWrapperLightBlue
            style={{

            }}
        >
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
        </ScrollWrapperLightBlue>
    )
}

export const CircleMediumBlue = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 0.5]);

    return (
        <ScrollWrapper>
            <ScrollContainerMediumBlue
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
            </ScrollContainerMediumBlue>
        </ScrollWrapper>
    )
}

export const CircleDarkBlue = () => {
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
