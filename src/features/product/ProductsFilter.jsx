import React, {useState} from 'react';
import {MenuItem, Select, Checkbox, FormControlLabel, FormGroup} from '@mui/material';
import Button from "../../ui/Button.jsx";

const ProductFilter = () => {
  const [sortValue, setSortValue] = useState('');
  // const [filters, setFilters] = useState({
  //   category: false,
  //   priceRange: false,
  //   brand: false,
  // });

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  // const handleFilterChange = (event) => {
  //   setFilters({
  //     ...filters,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-[#1E293B] text-white rounded-lg shadow-lg">
      <div className="flex items-center gap-2 me-4">
        <label className="font-medium">Sort By</label>
        <Select
          value={sortValue}
          onChange={handleSortChange}
          displayEmpty
          className="bg-[#334155] text-white w-50 px-5 py-1.5 rounded-md h-[30%]"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="price-asc" className="text-light">Price: Low to High</MenuItem>
          <MenuItem value="price-desc">Price: High to Low</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="ratings">Ratings</MenuItem>
        </Select>
      </div>

      <div className="flex items-center justify-around gap-3">
        <label className="font-medium">Filters</label>
        <Button type="light">Apply Filters</Button>
      </div>

      {/* Apply Filter Button */}

    </div>
  );
};

export default ProductFilter;
