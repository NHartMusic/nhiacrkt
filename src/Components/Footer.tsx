import React from "react"
import styled from "styled-components"
//styles
import { ParagraphRegular, TextLink } from '../UI/Typography'

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
      © {new Date().getFullYear()} &nbsp;<TextLink to='https://www.kiekurecords.com/'>Kieku Records</TextLink>
    </FooterText>
    <FooterText>
      Site built by &nbsp;<TextLink to='https://github.com/NHartAbout'>Nick Hart</TextLink>
    </FooterText>
  </StyledFooter>
)


export default Footer