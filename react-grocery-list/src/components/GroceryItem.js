import React from 'react';

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let itemName = this.props.itemName;
    return(
      <li>
        {itemName}
        <button type="button" onClick={ (event) => { alert('Button was clicked')} }>Delete</button>
      </li>
    );
  }
};

export default GroceryItem;
