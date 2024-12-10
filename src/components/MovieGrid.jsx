import React from 'react'
import styled from 'styled-components'


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


const MovieGrid = ({ genre, selected, setSelected }) => {

  const handleSelection = () => {

    if(selected.includes(genre.value)){
      setSelected(selected.filter((item) => item !== genre.value))
    }else{
      setSelected([...selected, genre.value])
    }

  }

  const generateBorder = (value) => {
    if(selected.includes(value)){
      return "4px solid green"
    }
    else{
      return "none"
    }
  }

  return (
            <Card style={{background: genre.backgroundColor,
              border: generateBorder(genre.value)
            }}
            onClick={handleSelection}
            >
                <CardText>{genre.label}</CardText>
                <CardImage src={genre.image} alt='movie' />
            </Card>
      
  )
}

export default MovieGrid