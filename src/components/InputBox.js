import React, { useState } from 'react'

function InputBox(props) {
    let [searchText, setSearchText] = useState("");
    let [numberOfItems, setNumberOfItems] = useState("");
    const handleText =(e) =>{
        setSearchText(e.target.value);
        props.searchGlobalcontent(e.target.value);
        console.log("in inputbox" , e.target.value);
    }

    const handleCount = (e)=>{
        setNumberOfItems(e.target.value);
        props.numberOfitemfn(e.target.value);
    }

  return (
    <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">New</button> 
        <input className='border rounded py-1 px-1 mx-1' type = "text" value = {searchText} onChange = {handleText}></input>
        <input className='border rounded py-1 px-1 mx-1' type = "number" value = {numberOfItems} onChange = {handleCount}></input>
    </div>
  )
}

export default InputBox