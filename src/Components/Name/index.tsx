import React, { PureComponent, ReactNode } from 'react'
import { NameDesktop, NameMobile } from './MobileResponsiveness'

interface Props { }
interface State { }

class Name extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>
                <NameDesktop />
                <NameMobile />
            </>
        )
    }
}

export default Name
