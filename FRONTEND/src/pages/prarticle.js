import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

import { Link, useNavigate , useParams} from "react-router-dom";


export const Prarticles = () => {

   
    const params = useParams();

    const [gdata,setgdata]=useState({
        articlename:"",
        date:"",
        authorname:"",
        article:""
    })



    useEffect(()=>{


        if(params.id){
    
            axios.get('http://localhost:8080/server/'+params.id)
        .then(function (response){
            console.log(response.data)
            setgdata(response.data.data)
        })
    .catch(function (error){
        console.log(error)
    })
        }
          
    
        },[])



  return (
    <Fragment>
        <nav id="home" >

<div  >
  <Link id="sec" className="first" to='/phome' style={{textDecoration:'none' }} >Home</Link>
  <Link id="sec" className="first"  to='/publicview' style={{textDecoration:'none' }}  >Articles</Link>
  <Link id="sec" className="first"  to='/paddarticle' style={{textDecoration:'none' }}  >Add-articles</Link>
  {/* <Link id="sec" className="first" to='/editarticles' style={{textDecoration:'none' }}  >Edit-articles</Link> */}
</div>

<div >
  <Link id="sec" className="first"  to='/' style={{textDecoration:'none'  }} >Signout</Link>
</div>
</nav>
  
    <div className='container x3'>
         <h1>{gdata.articlename}</h1>
          <h4>{gdata.date}</h4>
         <h3>{gdata.authorname}</h3>
         <div style={{ whiteSpace: 'pre-wrap' }}>{gdata.article}</div>
         <Link to="/publicview" className="btn btn-primary mt-5">Back</Link >
    </div>
    </Fragment>
  )
}


