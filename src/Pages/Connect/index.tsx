
import { Title } from '../../UI/Typography'
import { fade0 } from '../../UI/Media'
import { TextWrapperCenter, FadeWrapperBlock } from '../../UI/Containers'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'

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

                <div>
                    <Accordion>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <p>Collapsible Group Item #1</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </>
        )
    }
}

export default Connect
