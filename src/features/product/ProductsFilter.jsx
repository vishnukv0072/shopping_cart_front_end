import React, {useRef, useState} from 'react';
import {MenuItem, Select, Checkbox, FormControlLabel, FormGroup, Slider} from '@mui/material';
import Button from "../../ui/Button.jsx";
import Typography from "@mui/material/Typography";

const ProductFilter = () => {
  const [sortValue, setSortValue] = useState('');
  const [value, setValue] = useState([0, 300]);
  const filterObject = useRef();
  // const [isHovered, setIsHovered] = useState(false);
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

  function handleMouseEnter() {
    console.log(filterObject)
  }

  function handleMouseLeave() {

  }

  return (
    <div id="filter" className="sticky top-0 z-9" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={filterObject}>
      <div className="grid grid-cols-12 px-5 py-1 bg-[#1E293B] text-white rounded-lg shadow-lg">
        <div className="flex items-center gap-2 col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-3">
          <label className="font-medium">Sort By</label>
          <Select
            value={sortValue}
            onChange={handleSortChange}
            displayEmpty
            className="bg-[#334155] text-white px-5 py-4 rounded-md h-[30%] w-90 sm:w-60 lg:w-50"
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
        <div
          className="flex items-center gap-3 col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-9 md:justify-around">
          <Typography id="range-slider" className="mb-0" gutterBottom>
            Price range
          </Typography>

          <Slider
            className="max-w-[50%] sm:max-w-[40%] md:max-w-[55%] lg:max-w-[60%]"
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            // getAriaValueText={() => "dddd"}
          />

          <Button type="light"><span className="font-semibold">Apply Filters</span></Button>
        </div>
      </div>
      {/*<div id="draw">*/}
      {/*  <p>*/}
      {/*    sort & filter*/}
      {/*    /!*<img src="/public/shoppingCartFilter.png" alt="filter"/>*!/*/}
      {/*  </p>*/}
      {/*</div>*/}
    </div>
  );
};

export default ProductFilter;
