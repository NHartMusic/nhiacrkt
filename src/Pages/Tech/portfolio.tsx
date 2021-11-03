import React, { PureComponent, ReactNode } from 'react'
//component imports
import styled from 'styled-components'
import { Title } from '../../ui/Typography'
import { fade0, fade1, fade2 } from '../../ui/Media'
import { TextWrapperCenter, TextWrapperLeft, FadeWrapperBlock, FadeWrapperFlex } from '../../ui/Containers'
import { ParagraphLarge, TextLink } from '../../ui/Typography'

interface Props { }
interface State { }

const PortfolioWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  overflow: auto;
`

const PortfolioItemWrapper = styled.section`
    border-style: solid;
    border-color: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(to left, rgb(116, 58, 213), rgb(213, 58, 157));
    height: 260px;
    padding: 10px;
    margin: 10px;
    width: 260px;
`   

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
                        <Title>Portfolio</Title>
                    </TextWrapperCenter>

                </FadeWrapperBlock>

                <FadeWrapperFlex
                    variants={fade1}
                    initial='hidden'
                    animate='visible'
                >
                    <PortfolioWrapper>
                        <PortfolioItemWrapper>
                            <ParagraphLarge>
                                Hello
                            </ParagraphLarge>
                        </PortfolioItemWrapper>
                        <PortfolioItemWrapper>
                            <ParagraphLarge>
                                Hello
                            </ParagraphLarge>
                        </PortfolioItemWrapper>
                        <PortfolioItemWrapper>
                            <ParagraphLarge>
                                Hello
                            </ParagraphLarge>
                        </PortfolioItemWrapper>
                        <PortfolioItemWrapper>
                            <ParagraphLarge>
                                Hello
                            </ParagraphLarge>
                        </PortfolioItemWrapper>

                    </PortfolioWrapper>
                </FadeWrapperFlex>
                

            </>
        )
    }
}

export default Blog
