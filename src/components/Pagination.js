import React, { useState } from 'react'

function Pagination(props) {
  const[pagination, setPagination] = useState(1);
  const paginationNumber = (n)=> {
        setPagination(n);
        props.setGlobalPagination(n);
  }
  console.log("pagination.js : ", pagination);
  return (
    <>
      <button className="bg-blue-500 text-white py-2 px-3 rounded" onClick = {()=>paginationNumber(1)} >1</button> 
      <button className="hover:bg-blue-500 border-1 py-2 px-3 rounded" onClick = {()=>paginationNumber(2)} >2</button> 
      <button className="hover:bg-blue-500 border-1 py-2 px-3 rounded" onClick = {()=>paginationNumber(3)} >3</button> 
    </>
  )
}
export default Pagination