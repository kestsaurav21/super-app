import React from 'react'
import assets from '../assets/assets'
import styled from 'styled-components';


const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const LeftContainer = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
  `

const Text = styled.p`
  position: absolute;
  font-family: 'Roboto', sans-serif;
  bottom: 10%;
  left: 10%;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
`


const HomeBanner = () => {
  return (
    <LeftContainer>
        <BannerImg src={assets.banner} alt="banner" />
        <Text>Discover new things on <br /> Superapp</Text>
    </LeftContainer>
  )
}

export default HomeBanner