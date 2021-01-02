import React, { PureComponent, ReactNode } from 'react'
import styled from 'styled-components'
import {
    CircleWhite,
    CircleLightBlue,
    CircleMediumBlue,
    CircleDarkBlue,
    CircleWrapper
} from '../../../UI/ScrollElements'
//media queries
import { iPad } from '../../../UI/MediaQueries'

const Disappear = styled(CircleWrapper)`
    @media ${iPad} {
        display: none;
    }
`

interface Props { }
interface State { }

class CirclesDesktop extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>
                <Disappear>
                    <CircleDarkBlue />
                    <CircleMediumBlue />
                    <CircleLightBlue />
                    <CircleWhite />
                    <CircleLightBlue />
                    <CircleMediumBlue />
                    <CircleDarkBlue />
                </Disappear>
            </>
        )
    }
}

export default CirclesDesktop
