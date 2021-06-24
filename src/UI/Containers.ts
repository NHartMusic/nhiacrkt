import styled from 'styled-components'
import { motion } from 'framer-motion'
import { SmallDesktop, iPad } from '../ui/MediaQueries'

export const CaptionBlock = styled.div`
  display: block; 
  text-align: center;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0px 1.0875rem;
  padding-top: 0;
`

export const FadeWrapperFlex = styled(motion.div)`
  display: flex;
  margin: 0 auto;
`

export const FadeWrapperBlock = styled(motion.div)`
  display: block;
`

export const TextWrapperCenter = styled.div`
  display: flex;
  margin: 20px 0px;

  ul {
  list-style-type: none;
}
`

export const TextWrapperLeft = styled.div`
  display: block;
  margin: 30px 100px;

  @media ${SmallDesktop} {
    margin: 25px;
  }

  @media ${iPad} {
    text-align: center;
  }
`

export const IconBar = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 70px;
  justify-content: space-around;
  width: 100%;
`