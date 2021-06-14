import React, { PureComponent, ReactNode } from 'react'
import styled from 'styled-components'
//ui elements
import {
    CircleWhite,
    CircleMediumBlue,
    CircleWrapper
} from '../../../ui/ScrollElements'
//media queries
import { iPad } from '../../../ui/MediaQueries'

const Appear = styled(CircleWrapper)`
    display: none;
    
    @media ${iPad} {
        display: flex;
        margin: 0 auto;
        text-align: center;
    }
`

interface Props { }
interface State { }

class CirclesMobile extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>
                <Appear>
                    <CircleMediumBlue />
                    <CircleWhite />
                    <CircleMediumBlue />
                </Appear>
            </>
        )
    }
}

export default CirclesMobile
