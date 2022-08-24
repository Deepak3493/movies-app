import React from 'react'
import Genre from './Genre'
import Movies from './Movies'
import { useState } from 'react';

function Main() {
  const[genre , setGenre] = useState("");
  const setGlobalGenre = (val) => {
     setGenre(val);
  }
  console.log("parentGenre ",genre);
  return (
    <div className='flex'>
        <Genre setGlobalGenre ={setGlobalGenre} />
        <Movies Globalgenre = {genre}/>
    </div>
  )
}

export default Main