
import { Title } from '../../UI/Typography'
import { fade0, fade1 } from '../../UI/Media'
import { TextWrapperCenter, FadeWrapperBlock } from '../../UI/Containers'
//icons 
import { facebook, instagram, linkedin, twitter } from '../../Assets/icons'
import { Icon } from '../../UI/Media'
import { IconBar } from '../../UI/Containers'

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

                <FadeWrapperBlock
                    variants={fade1}
                    initial='hidden'
                    animate='visible'
                >
                    <IconBar>
                        <Icon src={facebook} />
                        <Icon src={instagram} />
                        <Icon src={twitter} />
                        <Icon src={linkedin} />
                    </IconBar>
                </FadeWrapperBlock>
            </>
        )
    }
}

export default Connect
