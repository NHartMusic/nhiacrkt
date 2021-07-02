import React, { PureComponent, ReactNode } from 'react'
//component imports
import { Title, ExternalLink } from '../../ui/Typography'
import { fade0, fade1, fade2 } from '../../ui/Media'
import { TextWrapperCenter, TextWrapperLeft, FadeWrapperBlock } from '../../ui/Containers'
import { ParagraphLarge, TextLink } from '../../ui/Typography'
import Albums2020 from './blogPosts/Albums2020'
//import Albums2021 from './blogPosts/Albums2021SoFar'

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
                        <Title>
                            <TextLink to='/albums2020'>Best Albums 0f 2020</TextLink>
                        </Title>
                    </TextWrapperCenter>
                    <TextWrapperCenter>
                        <Title>
                            <TextLink to='/albums2021sofar'>Best Albums 0f 2021 So Far</TextLink>
                        </Title>
                    </TextWrapperCenter>
                    
                    
                </FadeWrapperBlock>
            </>
        )
    }
}

export default Blog
