import React from 'react';
import { useSelector } from 'react-redux';

function Products() {
  const searchInput = useSelector(state => state.string);

  return (
    <div>
      <p>Search Input in Products: {searchInput}</p>
      {/* Other content */}
    </div>
  );
}

export default Products;
