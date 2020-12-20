import React, { PureComponent, ReactNode } from 'react'
//component imports
import { Title } from '../../UI/Typography'
import { fade0 } from '../../UI/Media'
import { TextWrapperCenter, FadeWrapperBlock } from '../../UI/Containers'
import ExpansionPanel from '../../Components/ExpansionPanel'

interface Props { }
interface State { }

class Blog extends PureComponent<Props, State> {
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
                        <Title>Blog</Title>
                    </TextWrapperCenter>
                </FadeWrapperBlock>
                <ExpansionPanel />
            </>
        )
    }
}

export default Blog
