import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import MovieGrid from '../components/MovieGrid'
import { CategoryContext } from '../context/CategoryContext'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const LeftContainer = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4rem;
  margin-top: 12rem;
`

const Header = styled.h1`
  font-family: "Single Day", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 47px;
  color: #72DB73;
  margin-bottom: 2rem;
  `

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: bold;
  font-size: 2.8rem;
  color: #FFFFFF;
  margin-bottom: 0.8rem;
  line-height: 4rem;
`

const RightContainer = styled.div`
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  width: 60vw;
  height: 100vh;
  padding: 5rem;
  `

const Button = styled.button`
  background-color: #148A08;
  width: 120px;
  height: 35px;
  border-radius: 28px;
  color: #FFFFFF;
  font-family: "Outfit", sans-serif;
  font-weight: 400;
  font-style: bold;
  font-size: 15px;
  cursor: pointer;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  `


const Category = () => {

  const { category } = useContext(CategoryContext);

  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleNextPage = () => {
    if(selectedCategory.length >=3){
      navigate('/results')
    }
    else{
      alert("Please select atleast 3 genres")
    }

  }

  return (
    <Container>
      <LeftContainer>
      <Header>Super App</Header>
        <Text>Choose your <br /> entertainment <br /> category</Text>
      </LeftContainer>

      <RightContainer >
        {category.map((movie) => (
            <MovieGrid genre={movie} key={movie.id} selected={selectedCategory} setSelected={setSelectedCategory} />
        ))}
      </RightContainer>

      <Button onClick={handleNextPage}>Next Page</Button>

        
    </Container>
  )
}

export default Category