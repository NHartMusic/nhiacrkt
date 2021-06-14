import React from 'react'
import { Title, TextLink } from '../../ui/Typography'
import { TextWrapperCenter } from '../../ui/Containers'

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
