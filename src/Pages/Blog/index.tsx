import React, { PureComponent, ReactNode } from 'react'
//component imports
import { Title } from '../../UI/Typography'
import { fade0, fade2 } from '../../UI/Media'
import { TextWrapperCenter, FadeWrapperBlock } from '../../UI/Containers'
import Albums2020 from '../Blog/BlogPosts/Albums2020'

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
                        <Title>Top 50 Albums of 2020</Title>
                    </TextWrapperCenter>
                </FadeWrapperBlock>
                <FadeWrapperBlock
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >

                    <Albums2020 />
                </FadeWrapperBlock>
            </>
        )
    }
}

export default Blog
