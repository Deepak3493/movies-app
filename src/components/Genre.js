import React, { useState , useEffect } from 'react'

function Genre(props) {
  const[genre, setGenre] = useState([]);
  const[loader,SetLoader] = useState(true);
  const[targetGenre , setTargetGenre] = useState("");
  useEffect( () =>{
      apiCalls();
  },[] )

  const apiCalls = async ()=>{
      let response = await fetch('https://react-backend101.herokuapp.com/genres');
      response = await response.json();
      SetLoader(false);
      setGenre(response.genres);
  }
  const setbothGlobalLocalGenre = (e) => {
           setTargetGenre(e.target.innerText);
           props.setGlobalGenre(e.target.innerText);
  }
  return (  <div className='Genre'>
            <div className='mr-6 font-bold border-t-0 h-10 w-20 text-center border-2'  onClick={setbothGlobalLocalGenre}>All genres</div>
            {
              loader===true? <div> Loading...</div> : genre.map((gen) =>{
                return  <div className = 'mr-6 font-bold border-t-0 h-10 w-20 text-center border-2'
                onClick={setbothGlobalLocalGenre}>{gen.name}</div>
            })
           }
    </div>
  )
}
export default Genre
