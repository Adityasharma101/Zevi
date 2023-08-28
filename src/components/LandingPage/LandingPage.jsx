import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import SearchBar from '../SearchBar/SearchBar'
import Sugesstion from '../Sugesstion/Sugesstion'
import {useDispatch , useSelector } from "react-redux";
import { setString } from '../../redux/searchSlice';
import './LandingPage.scss'
import {  useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [click , setClick]  = useState(false);
  const dispatch = useDispatch();
  const searchInput = useSelector(state =>state.string);

  
  const onHandleSubmit =async (e)=>{
    if(e.key ==="Enter"){
      if(searchInput){
        navigate('search' );
        
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
        <SearchBar value={searchInput} onHandleSubmit={onHandleSubmit} handleChange ={(e)=>dispatch(setString(e.target.value))}/>
        </div>

        {click && <Sugesstion setClick ={setClick}/>}
    </div>
   </> 
  )
}

export default LandingPage
