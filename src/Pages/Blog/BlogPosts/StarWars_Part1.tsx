import React, { PureComponent, ReactNode, } from 'react'

interface Props { }
interface State {
    title: string,

}

class StarWars1 extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            title: 'StarWars1'
        }
    }
    static propTypes: {

    };



    render(): ReactNode {
        return (
            <>
                <h1>I Have a Bad Feeling About This</h1>
            </>
        )
    }
}


export default StarWars1
