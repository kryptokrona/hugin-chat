import * as React from 'react'
import styled from "@emotion/styled";
import {FaDiscord, FaTelegram, FaTwitter} from 'react-icons/fa'

const Section = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.13);
  width: 100%;
  background-color: #1d1d1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  max-width: 1200px;
  padding: 40px 40px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    padding: 60px 20px;
    
  }
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media screen and (max-width: 580px) {
    justify-content: space-evenly;
    gap: 50px
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 580px) {
    justify-content: center;
    margin-top: 50px;
  }
`

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: end;
  margin-top: 20px;

  @media screen and (max-width: 580px) {
    justify-content: center;
  }
`

const NavList = styled.ul`
 padding: 0;
  margin-top: 0;
`

const NavTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
  font-weight: 400;
  margin-top: 0;
`

const ListItem = styled.h3`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 200;
  font-size: 1rem;
  font-family: 'Roboto Mono', monospace;
  transition: 250ms;
  
  &:hover {
    color: #fff;
    cursor: pointer;
  }
`

const SubTitle = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: rgba(255, 255, 255, 0.53);
  font-weight: 200;
  margin: 0;
  text-align: end;

  @media screen and (max-width: 580px) {
    text-align: center;
  }
`


const Footer= () => {
    return(
        <Section>
            <Container>
                <ListWrapper>
                    <NavList>
                        <NavTitle>Kryptokrona</NavTitle>
                        <ListItem>Website</ListItem>
                        <ListItem>Explorer</ListItem>
                        <ListItem>Litepaper</ListItem>
                    </NavList>
                    <NavList>
                        <NavTitle>Hugin</NavTitle>
                        <ListItem>Whitepaper</ListItem>
                        <ListItem>Github</ListItem>
                        <ListItem>Refill</ListItem>
                    </NavList>
                </ListWrapper>
                <ContentWrapper>
                    <SubTitle>Powered by Kryptokrona</SubTitle>
                    <SocialsWrapper>
                        <a href="https://twitter.com/kryptokrona"><FaTwitter size="1.5em" color="#FFFFFF87"/></a>
                        <a href="https://twitter.com/kryptokrona"><FaDiscord size="1.5em" color="#FFFFFF87"/></a>
                        <a href="https://twitter.com/kryptokrona"><FaTelegram size="1.5em" color="#FFFFFF87"/></a>
                    </SocialsWrapper>
                </ContentWrapper>
            </Container>
        </Section>
    )
}

export default Footer