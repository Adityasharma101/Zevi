import React, { useState, useEffect } from 'react';
import logo from "../../assets/logo.png"
import { useSelector, useDispatch } from 'react-redux';
import { dataList, ItemsData, PriceData, RatingsData } from '../../db/data'
import SearchBar from '../SearchBar/SearchBar'
import ProductCard from "../ProductCard/ProductCard"

import './Products.scss'
import { setString } from '../../redux/searchSlice';
import SideBar from '../SideBar/SideBar';

const Products = () => {
  const searchInput = useSelector(state => state.string);
  const [data, setData] = useState(dataList);
  const [filterItems, setfilterItems] = useState(ItemsData);
  const [filterPrice, setfilterPrice] = useState(PriceData);
  const [filterRating, setfilterRating] = useState(RatingsData);
  const dispatch = useDispatch();



  const handleChangeItemsChecked = (id) => {
    const filterListState = filterItems;
    const changeCheckedCuisines = filterListState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setfilterItems(changeCheckedCuisines);
  };
  const handleChangePriceChecked = (id) => {
    const filterListState = filterPrice;
    const changeCheckedCuisines = filterListState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setfilterPrice(changeCheckedCuisines);
  };
  const handleChangeRatingsChecked = (id) => {
    const filterListState = filterRating;
    const changeCheckedCuisines = filterListState.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setfilterRating(changeCheckedCuisines);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    let CheckedFilters = filterItems
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    let CheckedFiltersRating = filterRating
      .filter((item) => item.checked)
      .map((item) => item.label);

    let CheckedFiltersPrice = filterPrice
      .filter((item) => item.checked)
      .map((item) => item.label);

    if (CheckedFilters.length) {
      updatedList = updatedList.filter((item) => {
        return CheckedFilters.includes(item.label.toLowerCase());
      });
    }
    if (CheckedFiltersRating.length) {
      updatedList = updatedList.filter((item) => {
        return CheckedFiltersRating.includes(item.rating);
      });
    }
    if (CheckedFiltersPrice.length) {
      const minPrice = CheckedFiltersPrice[0];

      updatedList = updatedList.filter((item) =>
        minPrice === 500
          ? item.price <= 500
          : item.price >= 1000 && item.price <= 3000
      );

      updatedList = updatedList.filter((item) =>
        minPrice >= 1000
          ? item.price >= 1000 && item.price <= 3000
          : item.price <= 500
      );
    }

    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title
            .toLowerCase()
            .trim()
            .search(searchInput.toLowerCase().trim()) !== -1
      );
    }
    setData(updatedList);

    // !updatedList.length ? setFound(false) : setFound(true);
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterItems, filterPrice, filterRating, searchInput]);

  return (
    <>
      <div className="navigation">
        <div className="search_bar">
          <SearchBar value={searchInput} handleChange={(e) => dispatch(setString(e.target.value))} />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>

        <div className="sidebar">
      <h1 className='search_text '>Search Results</h1>
        <SideBar
        Label="Brand"
        filterItems={filterItems}
        change={handleChangeItemsChecked}
      />
      <SideBar
        Label="Price Range"
        filterItems={filterPrice}
        change={handleChangePriceChecked}
      />
      <SideBar
        Label="Ratings"
        filterItems={filterRating}
        change={handleChangeRatingsChecked}
      />
        </div>
      <ProductCard data={data}/>
    </>

  );
}

export default Products;
