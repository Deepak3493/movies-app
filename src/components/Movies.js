import React from 'react'
import InputBox from './InputBox'
import Pagination from './Pagination'
import MoviesTable from './MoviesTable'
import { useState } from 'react'

function Movies(props) {
  const[searchContent ,setSearchContent] = useState("");
  const[pagination, setGlobalPagination] = useState(1);
  const[numberOfitems, setNumberOfItems] = useState(1);
  let Globalgenre = props.Globalgenre;
  const changePagination = (num)=> {
    setGlobalPagination(num);
  }
  
  const numberOfitemfn =(n)=>{
    setNumberOfItems(n);
  }

  console.log("pagination No in movies.js :" + pagination);

  const searchGlobalcontent = (content) => {
    setSearchContent(content);
  }

   //console.log("int movies ",content);
  return (
    <div >
        <InputBox searchGlobalcontent ={searchGlobalcontent} numberOfitemfn = {numberOfitemfn}></InputBox>
        <MoviesTable searchContent = {searchContent} pagination={pagination} numberOfitems ={numberOfitems} Globalgenre = {Globalgenre}></MoviesTable>
        <Pagination setGlobalPagination = {setGlobalPagination}></Pagination>
    </div>
  )
}

export default Movies