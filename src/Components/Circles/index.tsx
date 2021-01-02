import React, { PureComponent, ReactNode } from 'react'
import { CirclesMobile, CirclesDesktop } from './MobileResponsiveness'

interface Props { }
interface State { }

class Circles extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>
                <CirclesDesktop />
                <CirclesMobile />
            </>
        )
    }
}

export default Circles
