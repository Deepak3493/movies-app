import React, { useEffect, useState } from 'react'
import cloneDeep from 'lodash/cloneDeep';
function MoviesTable(props) {
    const [loader, setLoader] = useState(true);
    const [content, setContent] = useState([])
    const globalGenre = props.Globalgenre;
    const pagination = props.pagination;
    const numberOfitems = props.numberOfitems;
    //const[filteredContent, setFilteredContent] = useState([]);

    const deleteMovie = (movieId)=>{
       // let resOfTheMovies = cloneDeep(content);
        let newObject = content.filter((movies)=> (movies._id !== movieId));
       // let newObject = {...content:resOfTheMovies}
        console.log(newObject);
        console.log(movieId);
        setContent(newObject);
   }
   console.log(content);

    let filteredContent = [];
    if(props.searchContent.length>0 && globalGenre.length>0 && globalGenre!=="All genres"){
        filteredContent = content.filter((movies) => (movies.title.indexOf(props.searchContent)>-1) && (movies.genre.name === globalGenre));
    }
    else if(globalGenre.length>0 && globalGenre!=="All genres"){
        filteredContent = content.filter((movies) => movies.genre.name === globalGenre);
    }
    else if(props.searchContent.length>0){
        filteredContent = content.filter((movies)=> movies.title.indexOf(props.searchContent)>-1)
    }
    else{
        filteredContent = content;
    }
    console.log("pagination No in moviesTable.js :" + props.pagination);
    console.log(filteredContent);
    console.log("moviesTable: numberofitems"+ props.numberOfitems)
    console.log("genreinchild",globalGenre);
    // jab static html render ho jayega then ye api calls hongi
    // it means phle return execute hoga then uske bad
    // ye useEffect execute hoga
    // run only one time after return statement
    useEffect(() => {
        //fetch is inbuild function of browser that makes the request to fetch the data
        // you have to place the function of api calls here to render after return statement
        fetchPost();
    }, [])
    
    const fetchPost = async ()=>{
        let response = await fetch('https://react-backend101.herokuapp.com/movies');
        // jo bhi response aya hai use json m convert krna h ye bhi await krna hota hai
        response = await response.json();
        // json ko stringify krna pdta hai nhi to chalega nhi
        setLoader(false);
        setContent(response.movies);
    }

    
    // data 
    // table contains two things thead and tbody both can contain tr and (th or td)
    filteredContent =  filteredContent.slice((pagination-1)*numberOfitems,pagination*numberOfitems);

    return (
    <div>
        {loader === true? <div className='font-bold'>Loading...</div>:
        <div className=''>
           <table className='table-auto'>
               <thead>
                    <tr>
                        <th className='px-2 '>#</th>
                        <th className='px-2 '>Title</th>
                        <th className='px-4 '>Genre</th>
                        <th className='px-2 '>Stock</th>
                        <th className='px-2 '>Rate</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredContent.map(function(movie,idx){
                             return <tr>
                                    <td className="px-2 text-center">{idx+1}</td>
                                    <td className="px-2 text-center">{movie.title}.</td>
                                    <td className="px-4 text-center">{movie.genre.name}</td>
                                    <td className="px-2 text-center">{movie.numberInStock}</td>
                                    <td className="px-2 text-center">{movie.dailyRentalRate}</td>
                                    <td><button className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' 
                                    onClick={()=>deleteMovie(movie._id)}>Delete</button></td>
                                 </tr> 
                        })
                    }
                </tbody>
            </table> 
        </div>}
    </div>
  )
}

export default MoviesTable