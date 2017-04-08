import React from 'react'
import Grocery from './Grocery'

const GroceryList = (props) => {
  let groceries = props.groceries.map((grocery) => {
    const { id, name } = grocery
    let handleButtonClick = () => props.handleButtonClick(id)
    
    return (
      <Grocery
        key={grocery.id}
        name={grocery.name}
        handleButtonClick={handleButtonClick}
      />
    )
  })

  return (
    <ul>
      {groceries}
    </ul>
  )
}

export default GroceryList
