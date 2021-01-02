import React, { PureComponent, ReactNode } from 'react'
//component imports
import { Title } from '../../UI/Typography'
import { fade0, fade1, fade2 } from '../../UI/Media'
import { TextWrapperCenter, TextWrapperLeft, FadeWrapperBlock } from '../../UI/Containers'
import { ParagraphLarge } from '../../UI/Typography'
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
                        <Title>Top 100 Albums of 2020</Title>
                    </TextWrapperCenter>

                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade1}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperLeft>
                        <ParagraphLarge>
                            Here it is y'all. Definitively the best end of the year list in existence. This should
                            have been completed and published online a bit earlier, but the death of DOOM really threw
                            me off and I didn't really have the energy to rush through completing it. But here it is. Click any
                            album title to expand it and read my thoughts. The first 50 albums have a quick little review.
                        </ParagraphLarge>

                        <ParagraphLarge>
                            2020 was a garbage year for just about everyone (except billionaires), but it was a really excellent
                          year for music. I would have liked to see just a <i>few</i> more classic hip hop albums, but electronic
                          music, experimental music, pop music and many other genres had some phenomenal releases. Enjoy this
                          list, and feel free to send me death threats on social media if you don't agree. RIP Daniel Dumile.
                        </ParagraphLarge>
                    </TextWrapperLeft>
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
