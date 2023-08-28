import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import Searchbar from '../SearchBar/Searchbar'
import Sugesstion from '../Sugesstion/Sugesstion'
import {useDispatch , useSelector } from "react-redux";
import { setString } from '../../redux/searchSlice';
import './LandingPage.scss'

const LandingPage = () => {
  const [click , setClick]  = useState(false);
  const dispatch = useDispatch();
  const searchInput = useSelector(state =>state.string);
  const redirect = async () => {
    window.location.href = "/search";
  };
  
  const onHandleSubmit =async (e)=>{
    if(e.key ==="Enter"){
      if(searchInput){
        // console.log("you got the search item")
        console.log(searchInput)
        // await redirect();
        
      }
    }
  }
  return (

   <>
    <div className="hero">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="search_bar" onClick={ () => setClick(!click)}>
        <Searchbar value={searchInput} onHandleSubmit={onHandleSubmit} handleChange ={(e)=>dispatch(setString(e.target.value))}/>
        </div>

        {click && <Sugesstion setClick ={setClick}/>}
    </div>
   </> 
  )
}

export default LandingPage
