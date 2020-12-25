import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
//component imports 
import { SubTitle, ParagraphRegular } from '../../../../UI/Typography'
import { TextWrapperLeft } from '../../../../UI/Containers'

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'black',
        borderBottom: 'white',
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails)

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState<string | false>()

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false)
    }

    return (
        <div>

            <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary>
                    <SubTitle>1. Fiona Apple - Fetch The Bolt Cutters</SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <TextWrapperLeft>
                        <ParagraphRegular>
                            Honestly, what else did you expect? There's a reason that this album is topping just about
                            everyone's list, and it's not just a bandwagon effect. If I'm being completely honest, I've
                            never considered myself a diehard fan of Apple's work, and I can't really remember putting
                            her in a top 10 of any year-end list that I've done in the past - and I've been making lists
                            like these since I was in middle school. Listening to the rest of her work in retrospect,
                            I can say that I definitely find myself more impressed with it now - the songwriting craft,
                            the musical abilities, her unique voice and lyrics are all things that I appreciate now as an
                            adult who studied music theory and performance in college, but there's also something about
                            her work that is just so obtuse and not "kid-friendly", it's really not a wonder that in
                            my younger years listening to exclusively garage rock and J Dilla that I didn't grasp the full
                            depth and emotional power of her songwriting.
                        </ParagraphRegular>

                        <ParagraphRegular>
                            As someone who is admittedly a fairly recent convert of hers, it's hard to point out exactly
                            what part of this album made me such a believer. Is it the way she stretches her vocal abilities
                            to new heights? Is it the rolling, tumbling tUnE-yArDs-esque percussion (which much of was apparently
                            recorded on a lot of non-percussion-instrument surfaces including banging on the walls of her house)?
                            Is it the powerful lyrical subject matter dealing with themes of self-empowerment and subjegation from
                            a capitalist patriarchical society? Yes. It is those things.
                        </ParagraphRegular>

                        <ParagraphRegular>
                            But most of all, it's the fact that even though this album deals with some of the depths of human depravity,
                            it bubbles with the electric joy of a child discovering music for the first time. There are some lyrical and
                            musical connections to her previous work, and I guess you could construe <i>some</i> influences from specific
                            genres of music, but overall, this sounds like creation of art in it's purest form - there hasn't been anything
                            else this year that sounded so unique and so entirely distinct from any other music in existence.
                        </ParagraphRegular>
                    </TextWrapperLeft>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary>
                    <SubTitle>2. The Avalanches - We Will Always Love You </SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <TextWrapperLeft>
                        <ParagraphRegular>
                            The Avalanches are muralists. They are alchemists. To describe their music as "sample-based"
                            or "mashups" is to imply that they are something akin to Girl Talk, or even Madlib, when in
                            truth, their albums feel closer to a Jackson Pollock painting - a mess of colors that somehow
                            form an otherworldly singular piece of art, the likes of which no other producers in existence
                            are capable of creating.
                        </ParagraphRegular>
                        <ParagraphRegular>
                            I'm still in disbelief that these guys (the two that are left of the original 6-piece collective)
                            came back from a 16-year radio silence with <i>Wildflower</i> 4 years ago, and I thought that maybe
                            that would be a coda of sorts, the last we would ever hear from them, at least for another decade or
                            so. And then, a painfully slow and mysterious rollout of new material began all the way back in February,
                            starting with the release of the title track of this album, featuring Dev Hynes, and a bizarre publicity stunt involving&nbsp;
                            <a target='_none' href='https://www.instagram.com/p/B8vPg7EHJu5/?utm_source=ig_web_copy_link'>streaming of music from the Capitol Records tower</a>.
                        </ParagraphRegular>
                        <ParagraphRegular>
                            In the time since they started rolling out the album, and its release earlier this month, the world has changed
                            more than anyone could have imagined it would be able to in the span of 10 months. And considering the amount of
                            sample clearance and coordination between guest stars a project like this takes, there's no way that most or all of
                            this music wasn't recorded well before the pandemic kicked into high gear. Yet it somehow feels timelier than
                            the gimmicky nature of album covers from the likes of&nbsp;<a target='_none' href='https://images.genius.com/fd3a2acc2a6cfc5a37dd3e57ffc07c7e.1000x1000x1.jpg'>DaBaby</a>
                            &nbsp;or album titles from&nbsp;<a target='_none' href='https://images.genius.com/83c9845de35bc9ac0b004f95a6680fee.1000x1000x1.jpg'>Tobe Nwigwe</a>, with it's overarching
                            theme of cosmic love transcending the barriers that death instills upon us mortals. The Avalanches flip samples that
                            on paper shouldn't work at all, they bring back seemingly has-been artists like Perry Ferrell and Rivers Cuomo for songs that
                            feel futuristic, and they have the best transitions between songs of any producers working right now. This project, as is
                            all their work, is a testament to the past, present and future of not just music, but human connection.
                        </ParagraphRegular>
                    </TextWrapperLeft>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary>
                    <SubTitle>3. Run The Jewels - RTJ4 </SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary>
                    <SubTitle>4. Dirty Projectors - 5EPs </SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary>
                    <SubTitle>5. Nicolas Jaar - Cenizas </SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary>
                    <SubTitle>6. Perfume Genius - Set My Heart on Fire Immediately  </SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}