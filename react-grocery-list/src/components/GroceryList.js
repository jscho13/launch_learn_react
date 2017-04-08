import React from 'react';
import GroceryItem from './GroceryItem';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let groceryItems = this.props.groceries.map((grocery) => {
      return (
        <GroceryItem itemName={grocery.name}/>
      )
    });

    return(
      <ul>
        {groceryItems}
      </ul>
    );

  }
};

export default GroceryList;
