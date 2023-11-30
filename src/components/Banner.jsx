import { useState } from "react"
import { useEffect } from "react"
import instance from "../instance"
import './Banner.css'

function Banner({fetchurl}){
    const [movie,setMovieBanner] = useState()
    const base_url = "https://image.tmdb.org/t/p/original";
    const fetchData = async()=>{
        const {data} = await instance.get(fetchurl)
        setMovieBanner(data.results[Math.floor(Math.random()*data.results.length)])
    }
    useEffect(()=>{
        fetchData();
    },[])
   console.log("movie banner");
   console.log(movie);
    return(
        <>
        <div style={{height:"650px", width:"100%", backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundPosition:"center",backgroundAttachment:"fixed", backgroundSize:"cover"}}>
        {/* <h1 className="text-danger bg-transparent fw-bold ms-3" >NETFLIX</h1> */}
            <div className="banner_content">
                <h1>{movie?.name}</h1>
                <button className="btn btn-danger">play<i class="fa-solid fa-play bg-transparent ms-2" ></i></button>
                <button className="btn btn-outline-light ms-4 ">More Info<i class="fa-solid fa-caret-down bg-transparent ms-2"></i></button>
                <h2>{movie?.overview?.slice(0,200)}...</h2>
            </div>
        </div>
        </>
    )
}
export default Banner