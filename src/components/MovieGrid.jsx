import React from 'react'
import movieCategory from '../utils/movieCategory'
import styled from 'styled-components'


const CardContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60vw;
  height: 100vh;
  padding: 5rem;
  `

const Card = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1.2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const CardImage = styled.img`
  width: 8rem;
  height: 6rem;
  object-fit: cover;    
`

const CardText = styled.p`
  font-family: DM Sans, sans-serif;
  font-weight: 500;
  font-style: bold;
  font-size: 1.3rem;
  color: #FFFFFF;
  margin-bottom: 0.7rem;
`


const MovieGrid = () => {
  return (
    <CardContainer >
        {movieCategory.map((item) => (
            <Card key={item.id} style={{background: item.backgroundColor}}>

                <CardText>{item.label}</CardText>
                <CardImage src={item.image} alt='movie' />
            </Card>
        ))}
    </CardContainer>
  )
}

export default MovieGrid