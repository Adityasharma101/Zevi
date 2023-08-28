import React from 'react'
import {BsSearch} from "react-icons/bs"
import './Searchbar.scss'


const Searchbar = ({value , handleChange , onHandleSubmit}) => {
  return (
    <>
      <input type="text" placeholder='Search' name="search" id="search" value={value} onKeyDown={onHandleSubmit} autoComplete="off" onChange={handleChange} />
      <BsSearch id='search_icon' />
    </>
  )
}

export default Searchbar
