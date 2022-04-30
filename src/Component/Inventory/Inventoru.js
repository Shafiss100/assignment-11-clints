import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {
    return (
      <div>
        <Link to={"/inventory"}>add more item</Link>
      </div>
    );
};

export default Inventory;