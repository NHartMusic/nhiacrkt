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

            <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary>
                    <SubTitle>5. Nicolas Jaar - Cenizas </SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        From a production standpoint, Nicolas Jaar is absolutely the MVP of this year.
                        Over the course of the past decade he has carved out a niche for himself as a
                        producer and songwriter who refuses to be bound by any pre-existing genre constraints
                        - in fact he seems to create new genres and styles with every release.
                        In 2019 he crossed over from his devoted fanbase of experimental dance music lovers to
                        the mainstream hip hop and RnB world by producing several standout tracks on
                        FKA Twigs <i>Magdalene</i>, and he's been on a pretty unstoppable roll of quality
                        releases ever since.
                    </ParagraphRegular>
                    <ParagraphRegular>
                        <i>Cenizas</i> was released in mid-March, just as the world came to a screeching halt. True to
                        it's name, which means 'ashes' in Jaar's mother tongue of Spanish, the album feels sparse,
                        minimal, as if it was crafted from flames and scorched in the process. It's Jaar's most distinct
                        work yet - which is no small feat for a producer this inventive and influential on the current
                        experimental music scene. In terms of how 'out there' it gets on a sonic level,
                        <i>Cenizas</i> sits somewhere between the ambient freakout of <i>Telas</i> which he released in July,
                        and the industrial dance grooves of <i>2017 - 2019</i>, which he released under his Against All Logic
                        moniker in February. Yes, that's correct, Jaar dropped 3 albums this year, 4 if you include the
                        live album from his recently revived Darkside project. All of these albums appeared seemingly out
                        of nowhere with little to no promotional build up, and all of them show an artist in peak form,
                        trapped in an unstoppable momentum with seemingly no intention of slowing down any time soon.
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
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

            <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary>
                    <SubTitle>7. Caribou - Suddenly</SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        Not since Weye's Blood's excellent <i>Titanic Rising</i> early last year have I heard an
                        album that lives up so well to its title. Dan Snaith's seventh album under his Caribou moniker
                        pivots between styles on a dime and throws samples out of nowhere that inexplicably stick the
                        landing every time.
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary>
                    <SubTitle>8. Charli XCX - How I’m Feeling Now</SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary>
                    <SubTitle>9. My Morning Jacket - The Waterfall II</SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary>
                    <SubTitle>10. Denzel Curry + Kenny Beats - Unlocked</SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        Denzel Curry is the latest rapper to take to social media and proclaim just how much
                        he hates the rap game and the music industry in general, hinting at how he might not
                        be in the business much longer. It's a shame, as his collaborative tape with Kenny
                        Beats, clocking in at just over 20 minutes, firmly cements him as one of the top
                        ten best rappers working today.
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                <AccordionSummary>
                    <SubTitle>11. U.S. Girls - Heavy Light </SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        I could honestly do without the little spoken word interludes on this album, even though
                        I know they add thematic subtext to the lyrical content about mysogny, capitalism, and
                        societal expectations that are placed upon America's youth. However, with or without
                        these little clips, if you were to judge albums purely on musicianship and arrangement,
                        this is a strong contender for the best of the year. After expanding the use of electronics
                        and production techniques on her last few albums, U.S. Girls mastermind Meg Remy made the
                        curious decision to record the whole album live in the studio, which is incredibly impressive
                        considering the massive vocal ensembles and layered instrumentation on some of these tracks.
                        Released on International Women's Day, <i>Heavy Light</i> is a powerful
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                <AccordionSummary>
                    <SubTitle>12. 070 Shake - Modus Vivendi </SubTitle>
                </AccordionSummary>
                <AccordionDetails>
                    <ParagraphRegular>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </ParagraphRegular>
                </AccordionDetails>
            </Accordion>

            <Accordion square expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                <AccordionSummary>
                    <SubTitle>13. Boldy James - The Versace Tape </SubTitle>
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