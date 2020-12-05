import React, { PureComponent, ReactNode } from 'react'

interface Props { }
interface State { }

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <h1>Hello</h1>
        )
    }
}

export default Home
