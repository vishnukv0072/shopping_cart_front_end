import React, {useEffect, useState} from 'react';
import {MenuItem, Select, Slider} from '@mui/material';
import Typography from "@mui/material/Typography";
import Button from "../../ui/Button.jsx";
import {formatCurrency} from "../../utils/helpers.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts, getMinMax, setOrder} from "../search/SearchSlice.js";

const ProductFilter = () => {
  const minDistance = 10
  const minMax = useSelector(getMinMax);
  const dispatch = useDispatch();
  const [sortValue, setSortValue] = useState('');
  const [value, setValue] = useState([]);

  useEffect(() => {
    setValue(minMax);
  }, [minMax]);

  function handleSortChange(event) {
    setSortValue(event.target.value);
    dispatch(setOrder(event.target.value));
    dispatch(fetchProducts());
  };

  function handleChange(event, newValue, activeThumb) {
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  }

  return (<div className="grid grid-cols-12 px-5 py-1 bg-[#1E293B] text-white rounded-lg shadow-lg sticky top-0 z-9">
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
      <div className="flex items-center gap-3 col-span-12 sm:col-span-6 md:col-span-7 lg:col-span-9 md:justify-around">
        <Typography id="range-slider" className="mb-0" gutterBottom>
          Price range
        </Typography>
        <Slider
          className="max-w-[50%] sm:max-w-[40%] md:max-w-[55%] lg:max-w-[60%]"
          value={value}
          onChange={handleChange}
          valueLabelDisplay="off"
          aria-labelledby="range-slider"
        />
        <Button type="light"><span className="font-semibold">Apply Filters</span></Button>
      </div>
      <div className="col-span-10 md:text-end">{formatCurrency(value[0])} - {formatCurrency(value[1])}</div>
    </div>);
};

export default ProductFilter;
