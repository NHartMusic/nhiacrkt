import React from 'react'
import styled from 'styled-components'

import { Title } from '../../UI/Typography'
import { TextWrapperCenter } from '../../UI/Containers'
import { ImageSmall } from '../../UI/Media'
import Kieku_Logo_Black from '../../Assets/Kieku_Logo_Black.png'

export default function PageTitle(): JSX.Element {
    return (
        <TextWrapperCenter>
            <Title>
                <ImageSmall src={Kieku_Logo_Black} />
            </Title>
        </TextWrapperCenter>
    )
}
