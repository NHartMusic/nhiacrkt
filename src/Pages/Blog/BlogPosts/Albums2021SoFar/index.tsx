import React, { PureComponent, ReactNode } from 'react'
//ui Imports
import { Title, ParagraphRegularWhite } from '../../../../ui/Typography'
import { fade0, fade1, fade2, fade3 } from '../../../../ui/Media'
import { FadeWrapperBlock, IconBar, TextWrapperCenter, TextWrapperLeft } from '../../../../ui/Containers'
//icons 
import { facebook, instagram, linkedin, twitter } from '../../../../assets/icons'
import { Icon } from '../../../../ui/Media'

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
                        <Title>Best Albums of 2021 So Far</Title>
                    </TextWrapperCenter>
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade1}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperLeft>
                        <ParagraphRegularWhite>
                            Taking into account the music industry stalemate that lasted throughout 2020, it’s been encouraging 
                            to see just how many great albums have been released in the first half of 2021. I do feel a bit bad 
                            for any indie rock artist that tries to put anything out from July onwards, as there is an imminent 
                            major label blitz on the horizon that will likely dwarf any smaller releases. Considering the way 
                            festivals like to rotate out their sadgirl alternative pop star headliners, it does seem a bit counter-intuitive 
                            to have the majors drop Lana Del Rey, Lorde and Billie Eilish records all in the same year, but that’s just one 
                            of many symptoms of an overdue catalog ready to blow. 
                        </ParagraphRegularWhite>
                    </TextWrapperLeft >
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperLeft>
                        <ParagraphRegularWhite>
                            We still might not have release dates from Kendrick, A$AP Rocky or Frank Ocean (let alone dates for 
                            already-confirmed projects like Isaiah Rashad), but it DOES seem like Vince Staples is finally ramping up 
                            for a new project. Lil Nas X finally has a full length on the way, Thom Yorke and Damon Albarn have new solo 
                            work cooking up, and Nicolas Jaar is finally revisiting his best project with a long overdue sophomore album 
                            from Darkside. I have a lot of faith that by the end of this year, we’re going to have so much more good (and bad) 
                            music than most of us could ever hope to listen to and rank, even if we were all sitting around in quarantine with 
                            nothing better to do.
                        </ParagraphRegularWhite>
                    </TextWrapperLeft >
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade3}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperLeft>
                        <ParagraphRegularWhite>
                            So far 2021 has been an indie music nerd’s wet dream; with the absence of arena shows, smaller bands like Japanese 
                            Breakfast and independent rappers like Duke Deuce have been able to carry on building momentum that many worried 
                            the pandemic would steal. The Save our Stages act in the US, as well as Bandcamp’s many fundraisers, have provided some 
                            rays of hope to self-released musicians. Before Taylor Swift eats up all the airwaves with her re-recorded catalogue, let’s just 
                            quickly savor how many excellent non-mainstream albums have found surprising success in the past 6 months. Avant garde jazz fusion 
                            is doing great with killer releases from The Weather Station, Squid and Black Country, New Road. 90’s RnB is having a renaissance 
                            with Arlo Parks, Jazmine Sullivan and Erika de Casier. And of course, the most important music story of the year, Lana Del Rey finally, 
                            definitively proved to the world that she has black friends. 
                        </ParagraphRegularWhite>
                    </TextWrapperLeft >
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade3}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperLeft>
                        <ParagraphRegularWhite>
                        It’s been a strange, chaotic stream of music throughout the year, capped off by the double whammy of new releases by Hiatus Kaiyote and 
                        a potentially career-topping joint from Tyler, The Creator. 
                        </ParagraphRegularWhite>
                    </TextWrapperLeft >
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade3}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperLeft>
                        <ParagraphRegularWhite>
                        Things are slowly going back to “normal” though, delta variant be damned. The major labels are coming. The restrictions are being lifted. 
                        We’ll see what other surprises the rest of the year has in store, but I have a feeling it will *mostly* be good stuff. This is where I’m at 
                        right now in terms of every album I’ve listened to so far. If there’s something you feel like I’m missing out on, by all means hit me up on 
                        social media and tell me about it. Click here to read my end of the year list for 2021, and here for my 2020 album ranking. 
                        </ParagraphRegularWhite>
                    </TextWrapperLeft >

                    <TextWrapperLeft>
                        <ParagraphRegularWhite>
                        <ol>
                            <li>Tyler, The Creator - CALL ME IF YOU GET LOST</li>
                            <li>The Armed - ULTRAPOP</li>
                            <li>Hiatus Kaiyote - Mood Valiant </li>
                            <li>Mach-Hommy - Pray for Haiti</li> 
                            <li>Nine - Sault</li>
                            <li>BROCKHAMPTON - Roadrunner: New Light, New Machine</li>
                            <li>Stereolab - Electrically Possessed [Switched On Vol. 4]</li>
                            <li>Tony Allen - There is No End</li>
                            <li>Genesis Owusu - Smiling with No Teeth</li>
                            <li>Wolf Alice - Blue Weekend</li>
                            <li>The Weather Station - Ignorance </li>
                            <li>Madlib - Sound Ancestors </li>
                            <li>Spellling - The Turning Wheel </li>
                            <li>Tune-Yards - sketchy.</li>
                            <li>The Besnard Lakes - The Besnard Lakes are the Last of the Great Thunderstorm Warnings</li>
                            <li>Casper Clausen - Better Way</li>
                            <li>Du Blonde - Homecoming </li>
                            <li>Floating Points/Pharoah Sanders/The London Symphony Orchestra - Promises</li>
                            <li>The Notwist - Vertigo Days</li>
                            <li>Garbage - No Gods No Masters</li>
                            <li>Japanese Breakfast - Jubilee </li>
                            <li>King Gizzard and the Lizard Wizard - L.W.</li>
                            <li>Fiddlehead - Between The Richness (Run For Cover)</li>
                            <li>MNDSGN - Rare Pleasure</li>
                            <li>Black Country, New Road - For the first time</li>
                            <li>King Gizzard and the Lizard Wizard - Butterfly 3000 </li>
                            <li>St. Vincent - Daddy’s Home </li>
                            <li>Benny The Butcher/Harry Fraud - The Plugs I Met 2 </li>
                            <li>Slowthai - Tyron </li>
                            <li>Arlo Parks - Collapsed in Suns</li>
                            <li>Czarface/MF DOOM - Super What? </li>
                            <li>Armand Hammer/The Alchemist - Haram</li>
                            <li>Squid - Bright Green Field</li>
                            <li>Kiefer - Between Days</li>
                            <li>Larry June - Orange Print </li>
                            <li>Migos - Culture III </li>
                            <li>J. Cole - The Off Season</li>
                            <li>Dinosaur Jr. - Sweep It Into Space</li>
                            <li>Field Music - Flat White Moon</li>
                            <li>iLoveMakonnen - My Parade </li>
                            <li>Lana Del Rey - Chemtrails Over the Country Club </li>
                            <li>Rhys Langston - Stalin Bollywood</li>
                            <li>Rhye - Home</li>
                            <li>ALLBLACK - TY4FWM </li>
                            <li>Denzel Curry/Kenny Beats - Unlocked 1.5</li>
                            <li>of Montreal - I Feel Safe With You, Trash </li>
                            <li>Jane, Inc. - Number One</li>
                            <li>Jazmine Sullivan - Heaux Tales</li>
                            <li>YSL - Slime Language 2 </li>
                            <li>Benny Sings - Music</li>
                        </ol>
                            

                        </ParagraphRegularWhite>
                    </TextWrapperLeft >
                </FadeWrapperBlock>
            </>
        )
    }
}

export default Connect
