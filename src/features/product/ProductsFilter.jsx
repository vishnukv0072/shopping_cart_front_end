import React, {useState} from 'react';
import {MenuItem, Select, Checkbox, FormControlLabel, FormGroup, Slider} from '@mui/material';
import Button from "../../ui/Button.jsx";
import Typography from "@mui/material/Typography";

const ProductFilter = () => {
  const [sortValue, setSortValue] = useState('');
  const [value, setValue] = useState([0, 300]);
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
  const minDistance = 10
  function handleChange(event, newValue, activeThumb) {
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  }

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
      <div className="flex items-center justify-around gap-3 w-[100%]">
        {/*<label className="font-medium w-10">Filters</label>*/}
        <Typography id="range-slider" className="mb-0" gutterBottom>
          Price range
        </Typography>
        <Slider
          className="max-w-[70%]"
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          // getAriaValueText={() => "dddd"}
        />
        <Button type="light">Apply Filters</Button>
      </div>
    </div>
  );
};

export default ProductFilter;
