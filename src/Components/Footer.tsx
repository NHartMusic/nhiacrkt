import React from "react"
import styled from "styled-components"
//styles
import { ParagraphRegular, TextLink } from '../ui/Typography'

const StyledFooter = styled.footer`
  display: flex;
  margin: 0 auto;
  text-align: center;
  color: white;
  background: var(--primary-color);
  padding: 1rem 0;
`

const FooterText = styled(ParagraphRegular)`
  display: flex;
  margin: 0 auto;
`

const Footer = () => (
  <StyledFooter>
    <FooterText>
      © {new Date().getFullYear()} &nbsp;Nick Hart
    </FooterText>
  </StyledFooter>
)


export default Footer