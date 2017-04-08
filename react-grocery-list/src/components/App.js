import React from 'react';
import GroceryList from './GroceryList';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let listOfItems = [
      {name: "Oranges"},
      {name: "Bananas"},
      {name: "Bread"}
    ]

    return(
      <div>
        <h1>Grocery List</h1>
        <GroceryList groceries={listOfItems}/>
      </div>
    );
  }
};

export default App;
