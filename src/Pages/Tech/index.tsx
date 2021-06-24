import React, { PureComponent, ReactNode } from 'react'
//ui imports
import { Title, ParagraphRegularWhite } from '../../ui/Typography'
import { 
    fade0, 
    fade1, 
    fade2, 
    Icon, 
} from '../../ui/Media'
import { 
    TextWrapperCenter, 
    IconBar, 
    TextWrapperLeft, 
    FadeWrapperBlock, 
    FadeWrapperFlex 
} from '../../ui/Containers'
import { github, linkedin, upwork } from '../../assets/icons'
import Tech_Triangle_01 from '../../assets/Tech_Triangle_01.png'
import Tech_Triangle_02 from '../../assets/Tech_Triangle_02.png'


interface Props { }
interface State { }

class tech extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>
                <FadeWrapperBlock
                    variants={fade1}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperCenter>
                        <Title>tech</Title>
                    </TextWrapperCenter>

                </FadeWrapperBlock>

                <FadeWrapperFlex
                variants={fade0}
                initial='hidden'
                animate='visible'>
                    <IconBar>
                        <Icon src={Tech_Triangle_02} />
                        <Icon src={Tech_Triangle_01} />
                        <Icon src={Tech_Triangle_02} />
                    </IconBar>
                </FadeWrapperFlex>
                

                <FadeWrapperBlock
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperLeft>
                        <ParagraphRegularWhite>
                            Trained in full-stack web development at UC Berkeley. Experienced with Google Ads and Analytics.
                            Squarespace Circle certified developer. Official Wix Partner. Over 50 projects on Github. Some of
                            them actually contain some pretty decent code. 
                        </ParagraphRegularWhite>
                        <ParagraphRegularWhite>
                            I wrote all the code for this website you are currently looking at, all by myself! This particular
                            site may look very minimal, but it was written with a combination of some of the hottest contemporary
                            coding tech, including React, Typescript, Framer Motion for animations, and a couple Material ui components
                            for some flashy interactive stuff. Click the GitHub logo below to check out all my repositories, including
                            this one.
                        </ParagraphRegularWhite>
                        <ParagraphRegularWhite>
                           Check out some fun experiments I've done with the p5.js library &nbsp;
                            <a target="_none" href="https://editor.p5js.org/nick.hart/sketches">here</a>.
                        </ParagraphRegularWhite>
                    </TextWrapperLeft>
                </FadeWrapperBlock>

                <IconBar>
                    <a href="https://github.com/NHartMusic" target="_blank" rel="noopener noreferrer">
                        <Icon src={github} />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01ec95c3fb303082f8" target="_blank" rel="noopener noreferrer">
                        <Icon src={upwork} />
                    </a>
                    <a href="https://www.linkedin.com/in/nhartmusic/" target="_blank" rel="noopener noreferrer">
                        <Icon src={linkedin} />
                    </a>
                </IconBar>

                
            </>
        )
    }
}

export default tech
