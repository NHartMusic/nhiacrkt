import React from 'react'
import { Title, TextLink } from '../../UI/Typography'
import { TextWrapperCenter } from '../../UI/Containers'

import { Triangle } from '../../UI/SVG'

export default function PageTitle(): JSX.Element {
    return (
        <TextWrapperCenter>
            <Title>
                <TextLink to="/">
                    NH
            </TextLink>
            </Title>
        </TextWrapperCenter>
    )
}
