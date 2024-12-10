import React from 'react'
import styled from 'styled-components'
import { IoIosClose } from "react-icons/io";

const Chip = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 15px;
  background-color: #148A08;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Text = styled.p`
  font-family: DM Sans, sans-serif;
  font-weight: 200;
  font-style: bold;
  font-size: 1.3rem;
  color: #FFFFFF;
`

const MovieChip = ( { genre, selected, setSelected }) => {

  const handleSelection = () => {
    if(selected.includes(genre)){
      setSelected(selected.filter((item) => item !== genre))
    }else{
      setSelected([...selected, genre])
    }
  }  
  
  return (
    <Chip onClick={handleSelection}>
        <Text>{genre}</Text>
        <IoIosClose  style={{color: "white",
          fontSize: "1.5rem",
          cursor: "pointer"
        }} />
    </Chip>
  )
}

export default MovieChip