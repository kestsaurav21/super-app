import React from 'react'
import HomeBanner from '../components/HomeBanner'
import styled from 'styled-components'
import Login from '../components/Login'

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;

`



const Home = () => {
  return (
    <HomeContainer>
        <HomeBanner />
        <Login />

    </HomeContainer>
  )
}

export default Home