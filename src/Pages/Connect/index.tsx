
import { Title } from '../../UI/Typography'
import { fade0 } from '../../UI/Media'
import { TextWrapperCenter, FadeWrapperBlock } from '../../UI/Containers'


import React, { PureComponent, ReactNode } from 'react'

interface Props { }
interface State { }

class Connect extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>
                <FadeWrapperBlock
                    variants={fade0}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperCenter>
                        <Title>Connect</Title>
                    </TextWrapperCenter>
                </FadeWrapperBlock>

                <div>

                </div>
            </>
        )
    }
}

export default Connect
