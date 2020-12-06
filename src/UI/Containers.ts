import styled from 'styled-components'
import { motion } from 'framer-motion'

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
`

export const TextWrapperLeft = styled.div`
  display: block;
  margin: 30px 100px;
`