import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
//component imports 
import { 
    SubTitle, 
    ParagraphRegular, 
    Title, 
    ParagraphLarge, 
    TextLink 
} from '../../../../ui/Typography'
import { fade0, fade1, fade2 } from '../../../../ui/Media'
import { 
    TextWrapperLeft, 
    TextWrapperCenter, 
    Container, 
    FadeWrapperBlock,
} from '../../../../ui/Containers'

const Accordion = withStyles({
    root: {
        border: '2px solid #00B4DF',
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
        backgroundColor: 'white',
        borderBottom: 'blue',
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

                        <ParagraphLarge>
                            Check out a playlist featuring music from this list &nbsp;
                            <a href="https://open.spotify.com/playlist/2JuSHfIBGpA8qiMVR6xODZ?si=1d8zbYMcT5y3B0cuZPXdpQ" target="_none">here</a>.
                        </ParagraphLarge>

                        <ParagraphLarge>
                            View last year's list &nbsp;<a href="https://top50albums2019.web.app/" target="_none">here</a>.
                        </ParagraphLarge>
                        
                    </TextWrapperLeft>
                </FadeWrapperBlock>

            <FadeWrapperBlock
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
            >
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
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                While this wasn't my favorite album of the year, if someone asked me what album I would pick to sum up 2020,
                                this is the clear winner. Lyrically speaking, aesthetically speaking, not to mention all of Killer Mike's
                                advocacy work and public appearances this year - no album in any genre seemed to put such a fine point
                                on all of the ugly truths of the world that were brought to the surface by 2020. Not that the Grammy's
                                matter at all, but the fact that they chose to snub THIS album in THIS year is absolutely inexplicable
                                to me. This is the best hip hop project of 2020, the best album of RTJ's career, and the frontrunner for
                                the album we're shooting into space to tell the aliens exactly how this dumpster fire of a year affected
                                humanity.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary>
                        <SubTitle>4. Dirty Projectors - 5EPs </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                The idea of <i>any</i> band releasing 5 projects, with each one focusing on a different band member,
                            could easily be an overblown gimmick. I was especially skeptical of this plan coming from the Dirty Projectors,
                            considering Dave Longstreth fired (and/or divorced) everyone from the band a few years ago, and reduced it to
                            a solo project, before building it up again with a new lineup. I saw the DPs a couple times in 2018 with the
                            new female vocalists doing a great job of performing songs written for their predecessors, but they still
                            didn't feel quite as distinct as Deradoorian or Amber's unique styles from their earlier work.
                        </ParagraphRegular>
                            <ParagraphRegular>
                                So what a pleasant surprise it was to see that this series of EPs (now available to stream as one continuous
                        project) is the best stuff Longstreth has put out since <i>Swing Lo Magellan</i> back in 2012. Longstreth and the
                        three other vocalists, Felicia Douglass, Maia Friedman, and Kristin Slipp, all get their moments to shine and then 
                        some. While it may not be 100% cohesive as an 'album', this firmly squashed any doubts I had in this lineup, and
                        provides me with a great deal of hope for the project going forwards. 
                        </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary>
                        <SubTitle>5. Nicolas Jaar - Cenizas </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
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
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                    <AccordionSummary>
                        <SubTitle>6. Perfume Genius - Set My Heart on Fire Immediately  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Michael Alden Hadreas inches ever closer to mainstream pop music with every release as Perfume
                                Genius, but just when it gets too comfortable, he'll stretch his voice into something grotesque,
                                or take a quick dip into shoegaze, or even throw you into the middle of what sounds like a gregorian
                                chant. This is one of those albums that you can never really replicate what it was like to listen to
                                the first time - it's like watching a movie with twists and turns that come out of nowhere and add
                                new context to the rest of the narrative with each new plot development.
                        </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                    <AccordionSummary>
                        <SubTitle>7. Caribou - Suddenly</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Not since Weyes Blood's excellent <i>Titanic Rising</i> early last year have I heard an
                            album that lives up so well to its title. Dan Snaith's seventh album under his Caribou moniker
                            pivots between styles on a dime and throws samples out of nowhere that inexplicably stick the
                            landing every time. Inspired by how death and divorce can shake up your life in unexpected ways,
                            this is some of the most emotional music Snaith has ever released, and it ranks among his best.
                            This was the first great album of the year, and I still find myself replaying it regularly.
                        </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                    <AccordionSummary>
                        <SubTitle>8. Charli XCX - How I’m Feeling Now</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                This was my favorite 'pop' album of the year, which feels strange to say, as Charli XCX does
                                better experimental electronic music here than Arca and Oneohtrix Point Never did this year. It may
                                be borderline unlistenable to casual fans of shiny, polished pop music, but the hooks and melodies
                                are undeniable even to those who hate the metallic clanging and distorted synths. This is probably
                                the best and least cringey "quarantine" inspired album to come out of this year, and I found it
                                infinitely more interesting than just about anything Charli has released yet.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                    <AccordionSummary>
                        <SubTitle>9. Denzel Curry + Kenny Beats - Unlocked</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Denzel Curry is the latest rapper to take to social media and proclaim just how much
                                he hates the rap game and the music industry in general, hinting at how he might not
                                be in the business much longer. It's a shame, as his collaborative tape with Kenny
                                Beats, clocking in at just over 20 minutes, firmly cements him as one of the top
                                ten best rappers working today.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                    <AccordionSummary>
                        <SubTitle>10. My Morning Jacket - The Waterfall II</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                After a 5-year absence, the Louisville, Kentucky 5-piece return with their
                                first ever "sequel" album. This is significant not only because it once again
                                re-establishes that MMJ is in the pantheon of greatest living American rock bands,
                                but because it demonstrates that they have settled into a signature tone, no longer
                                feeling the need to try and reinvent themselves or add new pieces to their sonic mixture
                                every single album.
                            </ParagraphRegular>
                            <ParagraphRegular>
                                There's not really any crazy falsetto or funk freakouts here, it's just solid, folksy
                                psych rock, with some of the best guitar playing on any of their albums yet. There
                                are some subtle pieces of connective tissue to the previous <i>Waterfall</i> album,
                                and even some recurring melodies between songs. The band sounds mature, fine-tuned,
                                and incredibly relaxed after being gone for so long. Even though the highest energy
                                track here is a b-side from the previous album that was released 4 years ago,
                                there's still plenty of evidence that MMJ isn't running out of steam anytime soon.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                    <AccordionSummary>
                        <SubTitle>11. Freddie Gibbs/The Alchemist - Alfredo </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Freddie Gibbs has released at least one full length project every single year for the past 4
                                years straight, and is seemingly unstoppable on his quest to work with all the best producers
                                in the game. This album was surprise released at the beginning of the BLM protests this summer,
                            and tracks like <i>Scottie Beam</i> are eerily prescient in their timing. But even when it's not
                            poingant or timely, and just focuses on Freddie's normal subject matter (cocaine), it's still
                            a hell of a lot of fun. The Alchemist's sample choices here are inspired, further cementing his place
                            as top 5 living rap producers.
                        </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                    <AccordionSummary>
                        <SubTitle>12. U.S. Girls - Heavy Light </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                I could honestly do without the little spoken word interludes on this album, even though
                                I know they add thematic subtext to the lyrical content about mysogny, capitalism, and
                                societal expectations that are placed upon America's youth. However, with or without
                                these little clips, if you were to judge albums purely on musicianship and arrangement,
                                this is a strong contender for the best of the year. After expanding the use of electronics
                                and production techniques on her last few albums, U.S. Girls mastermind Meg Remy made the
                                curious decision to record the whole album live in the studio, which is incredibly impressive
                                considering the massive vocal ensembles and layered instrumentation on some of these tracks.
                                Released on International Women's Day, <i>Heavy Light</i> is a powerful piece of inspirational
                                soul music, deeply indebted to timeless classics, but unmistakeably modern in its construction.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                    <AccordionSummary>
                        <SubTitle>13. 070 Shake - Modus Vivendi </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Not everyone can handle hopping between genres this easily, let alone on their debut album.
                                Back in January, shortly before the shit really hit the fan this year, Kanye's most talented
                                new discovery in recent years released her long-awaited first full length album, which pivots
                                effortlessly throughout new wave, dark electronic soul and experimental pop music. Not to mention,
                                the anime-inspired album cover is easily one of the most striking pieces of album art from this year.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                    <AccordionSummary>
                        <SubTitle>14. Boldy James - The Versace Tape </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Griselda records had a hell of a year. I can't say I really kept up with it that well,
                                as such a lot of their albums are in my "still to rank" category at the bottom of this
                                page. The one album that I listened to and enjoyed the most out of their 10+ album
                                output this year was Boldy James' <i>The Versace Tape</i>, which had a bit of a more
                                woozy, psychedelic vibe compared to some of his labelmates more hard-edged work.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                    <AccordionSummary>
                        <SubTitle>15. Four Tet - Sixteen Oceans </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                This Four Tet album is some of his more straightforward dance music in recent years,
                                yet it somehow fits the vibe of quarantining and social distancing from your friends
                                better than songs I've heard this year with actual lyrics about how much isolation
                                sucks. The incredibly prolific producer has two new albums he just dropped that I
                                haven't gotten around to listening to yet, not to mention a collaborative album
                                with Madlib on the way. This guy just doesn't get bored. Nor does he make bad music.
                        </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                    <AccordionSummary>
                        <SubTitle>16. Destroyer - Have We Met  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Easily Dan Bejar's best album since <i>Kaputt</i>. The transition to synth pop
                            is never easy for such a lyrical songwriter, and Bejar handles it much better here
                            than I've seen someone like Bright Eyes or even Car Seat Headrest accomplish. The
                            production is sparkling clean, the melodies are nice and punchy, and his wry
                            wit has never been sharper.
                        </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
                    <AccordionSummary>
                        <SubTitle>17. Against All Logic - 2017-2019  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                The first of 3 studio albums from Nicolas Jaar this year is his most pure dance
                                music release to date. In 2020 Jaar basically accomplished the opposite of what
                                Bruce Banner and The Hulk did in Avengers Endgame; instead of merging his two
                                musical personas, he definitively split them up, and by doing so, allowed them
                                room to breathe. For the artistic crew, we still have his ambient, jazz inspired
                                work under his own name, but for the fans that fell in love with Jaar for his
                                peerless Boiler Room set, AAL seems like it's here to stay. This second album
                                under the moniker is agressive, metallic, and features some of the best transitions
                                between songs I've ever heard.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
                    <AccordionSummary>
                        <SubTitle>18. Conway the Machine - From King to A GOD  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                There's a reason why Nas says that Conway is the 'new god of rap'. Although
                                he's not my favorite member of the Griselda crew, this is definitely some of the
                                purest, darkest r.a.p. music I've heard in a minute. And it's a better Nas album
                                than the album Nas put out this year.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
                    <AccordionSummary>
                        <SubTitle>19. The Seshen - Cyan  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Oakland sextet The Seshen continue to merge styles in unexpected ways, blurring the
                                lines between not only genres but instruments themselves. It's unclear what's a synthesizer,
                                what's a bass, even at some times what is a vocal and what is an instrument. What is clear
                                though, is that this is still my favorite local band out of the Bay Area, and this is their
                                best album yet.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                    <AccordionSummary>
                        <SubTitle>20. Yves Tumor - Heaven to a Tortured Mind  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                <i>Kerosene</i> is the best guitar playing on any song I've heard this year. Although
                                there's a few songs on here that feel a little less composed than Tumor's previous work,
                                that track alone gets it a spot in the top 20. Not to mention the sampling on the opening
                                track is just **chef's kiss**
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                    <AccordionSummary>
                        <SubTitle>21. Kali Uchis - Sin Miedo (del Amor y Otros Demonios) ∞  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                I'm not sure if this was a surprise release, or if there was an album rollout, but this one
                                came out of nowhere for me. Partially aided by the fact that it's almost entirely in Spanish
                                this time around, this is Kali's most cohesive album work yet, with all the tracks transitioning
                                nicely together and all the features gelling perfectly with the album's production.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                    <AccordionSummary>
                        <SubTitle>22. Westside Gunn - Pray for Paris </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                I know a lot of people consider Westside Gunn to be Griselda's MVP. I know a lot
                                of other people think he has the most obnoxious voice in all of hip hop. I sit somewhere
                                between these two camps. I absolutely think his adlibs are fucking terrible, but this album has
                                some of the smoothest beats and best bars of any project released this year. There's something
                                strangely endearing about Gunn's whiney voice in the same way that there is about Danny Brown's
                                voice. Although he's not as clever or humorous as Brown, he's certainly the most distinct of the Griselda
                                bunch, and I look forward to seeing him simultaneously thrill and annoy hip hop nerds for years to come.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
                    <AccordionSummary>
                        <SubTitle>23. The Strokes - The New Abnormal  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                The Strokes made a really good album again! That's it. That's the whole review.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
                    <AccordionSummary>
                        <SubTitle>24. Nas - King’s Disease  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                I've had a hard time getting hyped about Nas' music after learning just how horrible and abusive
                                he was as a husband to Kelis. However, his influence as one of the greatest rappers of all time is
                                undeniable, and as much as he has become a bit of a guilty pleasure of sorts for me - this really
                                is a fucking great hip hop album. The samples are killer, his delivery is impeccable as always,
                                the album cover is interesting.. Whatever your take on him is, it's honestly one of his better
                                works in the past decade.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
                    <AccordionSummary>
                        <SubTitle>25. Jim-E Stack - Ephemera  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Don't want to wax poetic too much here as Jimmy Stack is my biological first cousin. All I will
                                say is that I'm really proud of him for putting out an excellent piece of work and it's thrilling
                                to see the kind of mainstream attention he has been getting recently.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel26'} onChange={handleChange('panel26')}>
                    <AccordionSummary>
                        <SubTitle>26. Benny The Butcher - Burden of Proof  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Benny is the most established (and I think the oldest?) member of Griselda, and the only one
                                who didn't feel the need to put out a shit ton of projects in 2020. Burden of Proof is classic,
                                timeless, straight forward coke rap, nothing fancy about it.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel27'} onChange={handleChange('panel27')}>
                    <AccordionSummary>
                        <SubTitle>27. Gorillaz - Song Machine Season One: Strange Times</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                In a weird way, this almost sounds like the album Damon Albarn always meant to make with
                                his animated band Gorillaz - and it's not even really an album. Instead of trying to piece together
                                another concept album, Albarn spent 2020 releasing individual tracks with some of the wackiest
                                collaborations in the projects entire run, complete with animated music videos for each one,
                                and interactive online material for fans to play around with. Released from the confines of
                                thematic consistency, this is Albarn in full on mad scientist mode, sticking Elton John and
                                6LACK on the same song, having Goldlink rap over instrumentation from Unknown Mortal Orchestra -
                                it's just fucking bonkers through and through. Although I wish some artists were utilized better
                                (some actual lead vocals from St. Vincent would have been cool), standouts like EARTHGANG's 7-minute
                                <i>Opium</i> and Peter Hook's guitar playing on <i>Aries</i> are some of the best work ever produced
                                under the Gorillaz moniker. Who knows if the next release will be a full length album or another 'season'
                                of Song Machine? Either way, Albarn seems to be more loose and creative than he has in years.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel28'} onChange={handleChange('panel28')}>
                    <AccordionSummary>
                        <SubTitle>28. Tame Impala - The Slow Rush</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Even though this album had one of the worst album rollouts of all time (singles released over the span
                                of a year, some which ended up on the finished album and some that didn't, effectively killing any
                                potential hype), Kevin Parker's fourth record is still some of the slickest psychedelic music being
                                produced today. His obsession with drums is more noticeable than ever, occasionally at the detriment
                                to other parts of the sonic texture, but this is definitely Tame Impala's grooviest work yet - his time
                                spent in LA clubs and touring with Mark Ronson is deeply imbeded in the production. Whether he continues
                                down this lane of sci-fi yacht rock or harkens back to his earlier, trippier work remains to be seen,
                                but this album further solidifies his standing as one of the controlling forces of modern rock and roll.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel29'} onChange={handleChange('panel29')}>
                    <AccordionSummary>
                        <SubTitle>29. Zelooperz - Moszel Offline </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                The most consistent of Zelooperz' 3 releases this year, Moszel Offline firmly establishes the Bruiser
                                Brigade member as an equally distinct rapper to his more famous counterpart Danny Brown. This is the
                                shortest of his releases this year, but it packs the most punchlines, the hardest beats, and sums up
                                everything he's capable in a neat little package. I firmly expect 2021 to bring more wacky goodness
                                from him.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel30'} onChange={handleChange('panel30')}>
                    <AccordionSummary>
                        <SubTitle>30. Dehd - Flowers of Devotion </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Dehd's evolution on their third album is subtle, but significant. Released only a year after
                                their last record, the increase in production quality (and use of reverb) is notable, without
                                drastically changing their sound. Instead of minimalist garage pop, there's a shiny new wave
                                edge to the guitars, and detailed vocal harmonies that makes better use of having multiple vocalists.
                                Given how much acclaim they got for this album, I'm not sure what they'll do next - I hope they don't
                                all the sudden get in to a big studio with a big name producer and make it <i>too</i> polished, as
                                <i>Flowers of Devotion</i> seems like they've really nailed a perfect medium of refining their sound
                                without getting rid of the scrappy low fi charm that made us all fans to begin with.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel31'} onChange={handleChange('panel31')}>
                    <AccordionSummary>
                        <SubTitle>31. Spillage Village - Spilligion </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Another year, another album where all of J Cole's labelmates and affiliated acts put out work that's
                                inifintely more interesting than his mid tier solo stuff. While Cole was off picking fights with Noname
                                for... not educating him enough or whatever the fuck that song was about, Earthgang, JID and their
                                supergroup of seemingly endless rappers and singers primarily from the Atlanta region put out their
                                biggest record yet, with collaborations from major names such as Chance the Rapper and Ari Lennox. Although it's
                                still kind of unclear who is considered an actual member of this 'collective' (is 6LACK a full timer??),
                                this is definitely some of the most exciting hip hop from some of the most talented artists working in the
                                genre today.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel32'} onChange={handleChange('panel32')}>
                    <AccordionSummary>
                        <SubTitle>32. Fleet Foxes - Shore </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                One of the most surprising artists to surprise release an album this year was Fleet Foxes,
                                a group that I wasn't sure we would hear from again anytime soon, considering the 6-year
                                gap between their second and third albums. Their fourth release is one of their longest
                                records yet, and although it doesn't seem quite as whimsical and mysterious as their earlier
                                work, it's just as lush as you'd expect from them, only perhaps a bit more grown up this time around.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel33'} onChange={handleChange('panel33')}>
                    <AccordionSummary>
                        <SubTitle>33. Black Thought - Streams of Thought Vol. 3: Cane & Able </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                The Roots frontman dropped his third solo release in 3 years, this time long enough to constitute
                                being titled an "album" rather than just an "ep" (even though these terms are functionally meaningless
                                in the streaming era). Harkening back to the weird indie rock collabs of The Roots underrated 2010 gem
                            <i>How I Got Over</i>, Thought's latest features 3 whole songs featuring Portugal.
                            The Man and The Last Artful, Dodgr, competing against The Roots
                            for the title of Best Black Thought Backing Band (as well as competing against
                            each other for who can include the dumbest punctuation in their artist title).
                        </ParagraphRegular>

                            <ParagraphRegular>
                                While I would love to see The Roots get back together for another album (they haven't
                                had one since 2014!!), it's nice to see that Black Thought hasn't just relegated himself
                                to being part of the Jimmy Fallon machine, and is definitely in peak lyrical form. Questlove
                                and the rest of the gang's presence is definitely missed here, but who's really paying attention
                                when you have a Killer Mike feature as hot as this? Black Thought is top 5 dead or alive,
                                and I will always look forward to any and every release he graces us with.
                        </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel34'} onChange={handleChange('panel34')}>
                    <AccordionSummary>
                        <SubTitle>34.LA Priest - Gene  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                I was super surprised and excited to see Sam Dust's bizarro funk project pop up again this year.
                                This dude has been part of some of the most interesting and off-the-wall pop music in the past decade
                                and a half, including the short lived band Late of the Pier, and the collaborative album he made
                                with Connan Mockasin under the name Soft Hair. Out of all his projects though, LA Priest was always
                                my favorite, and I was glad to learn that it wasn't just a one-off. Although this album isn't as
                                surprising or wide-ranging as his debut <i>Inji</i>, the genre hopping is much smoother here,
                                there's a more consistent aesthetic and vibe, and the production and engineering is more refined.
                                Although I would rather not wait another 4-5 years for more work from Mr. Dust, as long as it's this
                                smooth, I can be patient.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel35'} onChange={handleChange('panel35')}>
                    <AccordionSummary>
                        <SubTitle>35. Busta Rhymes - Extinction Level Event 2: The Wrath of God  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                I was never a huge fan of Busta when I was younger, I always thought he had the same overly agressive
                                flow and I found it really distracting when he was featured on other artists work. With the exception of
                                the intro to J Dilla's <i>The Shining</i> (which is still one of the funniest album intros ever recorded),
                                Busta just never really did it for me.
                            </ParagraphRegular>
                            <ParagraphRegular>
                                Maybe it's because I've grown more interested in experimental hip hop as I've gotten older and I can appreciate
                                his influence more, or maybe it's just the chaotic moment we find ourselves in, but this album is honestly one
                                of the more fitting hip hop releases for 2020. It's just absolute fucking madness through and through, and the
                                Chris Rock interludes help remove any sense of self seriousness that could have killed the bonkers vibe here. While I
                                could do without the Louis Farrakhan shit (ya know, the guy who said that "Hitler was a very great man"), I was pleasantly
                                surprised to see just how well Busta's flow gelled with contemporary artists like Anderson .Paak and Kendrick Lamar.
                                Not to mention, the fact that he got Mariah Carrey to spit <i>that</i> fast on her feature is an accomplishment all
                                on its own.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel36'} onChange={handleChange('panel36')}>
                    <AccordionSummary>
                        <SubTitle>36. Thee Oh Sees - Protean Threat </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Out of John Dwyer's four releases this year, this was the one that grabbed me the most. I'm more of a fan of Thee Oh Sees
                                when they adhere closer to garage psych stuff rather than thrash metal influences, so the first couple tracks here took
                                a while to sink their teeth in to me.. But man. Does this album fucking rip. The spooky keyboard on "Said The Shovel"? Sublime.
                                That bassline on "If I Had My Way"? Probably the best surf rock riff in the past decade. Of course, both of those songs
                                got some cool reprises on <i>Panther Rotate</i>, Thee Oh Sees' final release of the year, but the originals are just classic
                                Dwyer in their most pristine, unpolished form. It's honestly an intimidating task to try and keep up with all the albums
                                this guy churns out, so if you have to only pick one that came out in 2020, this is the one.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel37'} onChange={handleChange('panel37')}>
                    <AccordionSummary>
                        <SubTitle>37. Dan Deacon - Mystic Familiar </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                With this latest album, Dan Deacon was able to combine the poppier, more accessible sounds he was playing with
                                on <i>Gliss Riffer</i> with the longer-form suites of compositions on <i>America</i> and presumably his film
                                scoring work, of which I'm not super familiar with. This album isn't quite as extravagent or surprising as
                                <i>Bromst</i>, and not nearly as thrilling as the
                                <a target="_none" href="https://soundcloud.com/dan-deacon/sets/wish-book-volume-1">all-time greatest mashup project</a>
                                that he dropped while I was in college, but it still ranks amongst his best work. Between the 4-part "Arp" suite and
                                the epic "Fell Into The Ocean", this album really helped bring a cinematic, open world feel to the isolation
                                I experienced early in quarantine, and I will forever be thankful to Mr. Deacon for that.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel38'} onChange={handleChange('panel38')}>
                    <AccordionSummary>
                        <SubTitle>38. DUCKWRTH - Supergood </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Similar to my reviews of Jim-E Stack and The Seshen's albums, I have a personal connection to this one that
                                naturally gives me a bit of bias so I will try and not gush too much. My homie Justin "J Hawk" Hawkins and
                                his crew, the G.H.E.T.T.O Kids music Group did a lot of the instrumentation on this album, and I'm super fucking
                                proud of his work. This also just happens to be a super smooth, funk and energetic work that frankly sounded
                                unlike any other hip hop released this year. It's the kind of music I wish Goldlink was still making, it's like
                                BROCKHAMPTON if they actually got their hands on good quality therapy and antidepressants. The title is not lying.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel39'} onChange={handleChange('panel39')}>
                    <AccordionSummary>
                        <SubTitle>39. HAIM - Women in music, Pt. III </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                How far HAIM have come. When they first came onto the scene, they generated more hype from being a sister act
                                than they did for... actually writing good music. I'm always pretty lukewarm on country pop stuff, so maybe
                                they were never really my kind of thing to begin with, but the production help from Rostam and a smidgeon of
                                drums from my cuz Jim-E really brought this one up to another level in my book. "3 AM" is easily one of the
                                best singles of the year, and "Up From a Dream" weirdly sounds like the sequel to Angel Olsen's "What It Is",
                                the standout on <i>All Mirrors</i>, which was my #1 album of last year. I'm very curious to see where these
                                ladies go in the future, including Danielle Haim's role in Paul Thomas Anderson's next film.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel40'} onChange={handleChange('panel40')}>
                    <AccordionSummary>
                        <SubTitle>40. Arca - KiCk i  </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Whether or not you enjoy her music, there are some serious objective truths in the Vice article
                                that posits Arca as the <a href="https://www.vice.com/en/article/evj9k4/arca-is-the-artist-of-the-decade" target="_blank" rel="noopener noreferrer">
                                    artist of the decade</a>. I found some of the song transitions and switches between genres (especially the first 3)
                                a bit jarring on this album, but it's still really cool to see her play around with something that almost resembles pop
                                music. While I still prefer Arca when she's just full out experimental and bonkers, some of the sweeter melodic moments
                                here are just fucking gorgeous, and I'm really excited to see what the next step of her career looks like.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel41'} onChange={handleChange('panel41')}>
                    <AccordionSummary>
                        <SubTitle>41. Chicano Batman - Invisible People</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                This is definitely Chicano Batman's most poppy, produced album yet, and although that may take
                                away from the charm in some people's eyes, I have a blast every time I put this one on. The guitar tone
                                on the first two tracks alone is enough to get this a slot in the top 50. Some of the lyrics on tracks like
                                "Pink Elephant" don't quite hold up under scrutiny, but the riffs are consistently peerless.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel42'} onChange={handleChange('panel42')}>
                    <AccordionSummary>
                        <SubTitle>42. Open Mike Eagle - Anime, Trauma and Divorce</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                I fucking haaaate nerdcore rappers, but Open Mike Eagle is so fucking funny and earnest in the way that
                                he incorporates comic book and anime references into otherwise really serious subject matter, that I just
                                can't help but crack a smile when he nerds out. Knowing how much of a fan of DOOM he was, there's something
                                about his rhymeplay on this album that really resonates with me, and I think I might even enjoy this one more
                                as time goes on. Plus, his hair has never looked better.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel43'} onChange={handleChange('panel43')}>
                    <AccordionSummary>
                        <SubTitle>43. Zelooperz - Valley of Life</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                This is the one where Ze just goes all out. The still life cover betrays the fact that
                                this is probably his most chaotic release of the year, from Lil B inspired adlibs and voice
                                modulations to BROCKHAMPTON levels of aggressive shouting. It's certainly a bit more of an acquired
                                taste than some of his other works, but if you want to just go nuts for half an hour, this is
                                definitely some of the most goofy, entertaining and inventive hip hop released in 2020.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel44'} onChange={handleChange('panel44')}>
                    <AccordionSummary>
                        <SubTitle>44. Boldy James/The Alchemist - The Price of Tea in China</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Although this isn't Boldy or Al's best work of 2020, it still has that instant classic feel
                                to it - it just sounds like hip hop from a previous era. This was the first Griselda record
                                of the year that made me realize just how serious these guys were about their aesthetic,
                                and it also led into one of the last episodes of Kenny Beats' "The Cave" that we got before the
                                pandemic killed music for the year - so that alone gives it some bittersweet nostalgia.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel45'} onChange={handleChange('panel45')}>
                    <AccordionSummary>
                        <SubTitle>45. of Montreal - UR FUN </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                I can't tell if this is of Montreal's best album since 2013.. but I think it might be. Ever since he
                                dropped the Georgie Fruit bit (probably a good idea considering where woke culture is at these days),
                                Kevin Barnes has been mainly focused on just mashing every genre he can get his hands on together in one
                                pot, often in multiple songs. Sometimes it really works, sometimes it really doesn't. So perhaps the smartest
                                decision on UR FUN is not the lovely retro album cover, or the incredibly timely song title of "Don't Let Me
                                Die in America", no it's just the fact that Barnes decided to bring things back to basics with a simple (by
                                of Montreal standards), straight forward synth pop album. There's nothing here as exciting as the Georgie Fruit
                                run, but it absolutely lives up to the album title. This is one I would kill to see live once it's safe to do
                                so again.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel46'} onChange={handleChange('panel46')}>
                    <AccordionSummary>
                        <SubTitle>46. Deerhoof - Future Teenage Cave Artists</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Oh Deerhoof. Please don't ever stop making records. The San Francisco-based experimental
                                noise-pop-funk-whatever-genre-they're-playing-now outfit is one of the few bands that seems to never ever
                                get stale. In fact, I don't think they could make boring music if they tried. There's some killer, crunchy,
                                gnarly rhythmic stuff going on throughout this album, but honestly, the title track/lead single/album opener
                                is the standout - it's one of their best songs they've ever released. They put out at least 2 other albums of
                                far more experimental stuff this year that I haven't gotten around to yet, but that track alone is one of my
                                top 5 songs of the year, and their entire career.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel47'} onChange={handleChange('panel47')}>
                    <AccordionSummary>
                        <SubTitle>47. Thundercat - It Is What It Is</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                It's hard to tell just how serious Steven Bruner is about making albums. Part of me thinks
                                he hates it and it's just a chore to him, and he couldn't make a 100% serious album even if he
                                tried. But he doesn't try. And that's ok.
                            </ParagraphRegular>
                            <ParagraphRegular>
                                If you read any interviews with him about the making of this album, he will talk a lot about how
                                the tragic death of his good friend Mac Miller had a big effect on everything here including the
                                title. That certainly shines through in some parts - but overall this is a party record. And a great
                                one too. The Louis Cole collaboration, aptly titled "I Love Louis Cole" is a clear standout, as
                                are all of the singles and fantastic music videos that came along with this. Thundercat is probably
                                the least serious "serious" musician recording today, and I love him for it.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel48'} onChange={handleChange('panel48')}>
                    <AccordionSummary>
                        <SubTitle>48. Aesop Rock - Spirit World Field Guide</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                This album would have been in my top ten if it wasn't for the fucking terrible vocal mixing here. Honestly
                                I really don't know what Aesop was going for. The vocals are harsh and frankly unlistenable in in-ear headphones,
                                which I regretably use too often these days. Which is a fucking shame, considering that he's really at the top
                                of his game lyrically and musically speaking. The production is absolutely phenomenal, and the loose spirtual concept that
                                binds it all together really works for the most part. I really really want to love this album, and for the most part I do.
                                I think Aesop Rock is one of the best rappers around, and he's proven himself to be a fantastic producer too. Just please for
                                the love of god, get someone else to mix the vocals next time. Jesus fucking christ. This could have been a classic. Remaster
                                when?
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel49'} onChange={handleChange('panel49')}>
                    <AccordionSummary>
                        <SubTitle>49. Little Dragon - New Me, Same Us</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Little Dragon are one of the top 10 best live acts in the world, which has made it even more frustrating
                                that they haven't had a truly great album since 2011, when they first broke out. But they make serious steps
                                to remedy that here. The synths are jucier than ever, the rhythms are funkier and more eclectic than they
                                were on the past few releases, and album closer "Water" is one of the smoothest pieces of RnB they've ever
                                cooked up. It's also one of the best album closers of 2020. More of this please.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel50'} onChange={handleChange('panel50')}>
                    <AccordionSummary>
                        <SubTitle>50. Bright Eyes - Down in The Woods, Where the World Once Was</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextWrapperLeft>
                            <ParagraphRegular>
                                Man, Conor Oberst has had a rough few years. Between the false rape accusation just prior to the #MeToo movement
                                that nearly derailed his career, and now the unforunate fact that he tried to surprise everyone with a reunion of
                                Bright Eyes in the absolute worst year possible, I really feel for the guy. This isn't Bright Eyes best work
                                by any means, but I enjoy it a lot more than I have most of his solo work, and it's just so nice to see them back
                                on the scene. I really hope 2021 and beyond is kind to Conor, because the man deserves a fucking break.
                            </ParagraphRegular>
                        </TextWrapperLeft>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel51'} onChange={handleChange('panel51')}>
                    <AccordionSummary>
                        <SubTitle>Albums 51 - 100 </SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Container>
                            <TextWrapperCenter>
                                <ParagraphRegular>
                                    <ul>
                                        <li>51. Oneohtrix Point Never - Magic Oneohtrix Point Never</li>
                                        <li>52. Gabriel Garzon Montano - Aguita</li>
                                        <li>53. Statik Selektah - The Balancing Act</li>
                                        <li>54. Chester Watson - A Japanese Horror Film</li>
                                        <li>55. Waxahatchee - Saint Cloud</li>
                                        <li>56. Angel Olsen - Whole New Mess</li>
                                        <li>57. Com Truise - In Decay, Too</li>
                                        <li>58. Damaged Bug - Bug on Yonkers</li>
                                        <li>59. Boldy James/Sterling Toles - Manger on McNichols</li>
                                        <li>60. King Gizzard and the Lizard Wizard - KG</li>
                                        <li>61. Hum - Inlet</li>
                                        <li>62. Tops - I Feel Alive</li>
                                        <li>63. Conway the Machine - No One Mourns the Wicked</li>
                                        <li>64. Darkside - Psychic Live July 14 2014</li>
                                        <li>65. Quelle Chris - Innocent Country 3</li>
                                        <li>66. Larry June/Cardo - Cruise USA</li>
                                        <li>67. Thee Oh Sees - Panther Rotate</li>
                                        <li>68. Shrines - Armand Hammer</li>
                                        <li>69. Jay Electronica - A Written Testimony</li>
                                        <li>70. Caroline Rose - Superstar</li>
                                        <li>71. Thee Oh Sees - Metamorphosed</li>
                                        <li>72. Bad Nerves - Bad Nerves</li>
                                        <li>73. Khruangbin - Mordechai</li>
                                        <li>74. Knxwledge - 1988</li>
                                        <li>75. King Krule - Man Alive!</li>
                                        <li>76. Zelooperz - Gremlin</li>
                                        <li>77. Car Seat Headrest - Making a Door Less Open</li>
                                        <li>78. Larry June/Harry Fraud - Keep Going</li>
                                        <li>79. Joji - Nectar</li>
                                        <li>80. Mac Miller - Circles</li>
                                        <li>81. Grimes - Miss Anthropocene</li>
                                        <li>82. Kamaiyah - Got It Made</li>
                                        <li>83. Larry June - Adjust to the Game</li>
                                        <li>84. Dua Lipa - Future Nostalgia</li>
                                        <li>85. Evan Myall - Evan Myall</li>
                                        <li>86. Thao and the Get Down Stay Down - Temple</li>
                                        <li>87. Real Estate - The Main Thing</li>
                                        <li>88. Fuzz - III</li>
                                        <li>89. Clipping. - Visions of Bodies Being Burned</li>
                                        <li>90. Roc Marciano - Mt. Marci</li>
                                        <li>91. Folklore - Taylor Swift</li>
                                        <li>92. Rico Nasty - Nightmare Vacation</li>
                                        <li>93. Kamaiyah - No Explanations</li>
                                        <li>94. Playboi Carti - Whole Lotta Red</li>
                                        <li>95. Sufjan Stevens - The Ascension</li>
                                        <li>96. Porches - Ricky music</li>
                                        <li>97. Nicolas Jaar - Telas</li>
                                        <li>98. Childish Gambino - 3.15.2020</li>
                                        <li>99. Kamaiyah - Oakland Nights</li>
                                        <li>100. Phoebe Bridgers - Punisher</li>
                                    </ul>

                                </ParagraphRegular>
                            </TextWrapperCenter>
                        </Container>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel52'} onChange={handleChange('panel52')}>
                    <AccordionSummary>
                        <SubTitle>Worst Albums (No Particular Order)</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Container>
                            <TextWrapperCenter>
                                <ParagraphRegular>
                                    <ul>
                                        <li>Lady Gaga - Chromatica</li>
                                        <li>The Weeknd - After Hours </li>
                                        <li>Drake - Dark Lane Demo Tapes</li>
                                        <li>Future - High Off Life</li>
                                    </ul>
                                </ParagraphRegular>
                            </TextWrapperCenter>
                        </Container>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel53'} onChange={handleChange('panel53')}>
                    <AccordionSummary>
                        <SubTitle>Honorable Mentions (No Particular Order)</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Container>
                            <TextWrapperCenter>
                                <ParagraphRegular>
                                    <ul>
                                        <li>No Age - Goons Be Gone</li>
                                        <li>Sparks - A Steady Drip, Drip, Drip</li>
                                        <li>Jerry Paper - Abracadabra</li>
                                        <li>Kid Cudi - Man on the Moon Pt. III</li>
                                        <li>Kamaiyah - Oakland Nights</li>
                                        <li>Black Lips - Sing In a World That’s Falling Apart</li>
                                        <li>Kehlani - It Was Good Until It Wasn’t</li>
                                        <li>Nine Inch Nails - Ghosts V/VI</li>
                                        <li>Larry June - Adjust To The Game</li>
                                        <li>Positions - Arianna Grande</li>
                                        <li>Larry June/Berner - Cooks and Orange Juice</li>
                                        <li>Knxwledge - 10,000 Proof </li>
                                        <li>Ka - Descendents of Cain</li>
                                        <li>Teyana Taylor - The Album</li>
                                    </ul>
                                </ParagraphRegular>
                            </TextWrapperCenter>
                        </Container>
                    </AccordionDetails>
                </Accordion>

                <Accordion square expanded={expanded === 'panel54'} onChange={handleChange('panel54')}>
                    <AccordionSummary>
                        <SubTitle>To Rank Still (Haven't Gotten Around To These Yet)</SubTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Container>
                            <TextWrapperCenter>
                                <ParagraphRegular>
                                    <ul>
                                        <li>Yellow Days - A Day in a Yellow Beat</li>
                                        <li>Black Atlas - Dream Awake</li>
                                        <li>Taylor Swift - Evermore</li>
                                        <li>Westside Gunn - Who Made the Sunshine </li>
                                        <li>Westside Gunn - Flygod Is An Awesome God 2</li>
                                        <li>Jessie Ware - What’s Your Pleasure? </li>
                                        <li>Jacob Collier - Djesse Vol. 3</li>
                                        <li>2 Chainz - No Face No Case </li>
                                        <li>Laura Marling - Song for Our Daughter</li>
                                        <li>SahBabii - Barnacles </li>
                                        <li>Oddisee - Odd Cure</li>
                                        <li>Blu & Exile - Miles </li>
                                        <li>Jarv Is - Beyond the Pale </li>
                                        <li>Ty Dolla $ign - Featuring Ty Dolla $ign</li>
                                        <li>The Spits - VI</li>
                                        <li>Future Islands - As Long As You Are </li>
                                        <li>Moses Sumney - grae</li>
                                        <li>Bob Dylan - Rough and Rowdy</li>
                                        <li>Paul McCartney - McCartney III</li>
                                        <li>The 1975 - Notes on a Conditional Form</li>
                                        <li>Soccer Mommy - color theory</li>
                                    </ul>
                                </ParagraphRegular>
                            </TextWrapperCenter>
                        </Container>
                    </AccordionDetails>
                </Accordion>
        </FadeWrapperBlock>
    </>
    )
}