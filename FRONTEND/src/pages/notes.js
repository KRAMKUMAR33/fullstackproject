import axios from "axios";
import { Fragment, useEffect, useState } from "react"
import styled from "styled-components";
import spinner from "./loading.gif"
import { Link, useParams } from "react-router-dom";

export const Notes=()=>{

  const params = useParams();

     const [getdata,setgetdata]=useState([]);

     useEffect(()=>{

  getarticles();

     },[])

     function getarticles()
    { axios.get('http://localhost:8080/server')
     .then(function (response){
         console.log(response.data.data);
         setgetdata(response.data.data)
     })
     .catch(function (error){
         console.log(error);
     })}




     const handledelete=(id)=>{
  
    
      axios.delete(`http://localhost:8080/server/${id}`)
      .then(function (response){
        console.log(response.data)
        getarticles()
         
      })
      .catch(function (error){
        console.log(error);
      })
    
     
    
    }
 



    return(
        <Fragments>

<nav id="home" >

<div  >
  <Link id="sec" className="first" to='/ehome' style={{textDecoration:'none' }} >Home</Link>
  <Link id="sec" className="first"  to='/notes' style={{textDecoration:'none' }}  >Articles</Link>
  <Link id="sec" className="first"  to='/addarticles' style={{textDecoration:'none' }}  >Add-articles</Link>
  {/* <Link id="sec" className="first" to='/editarticles' style={{textDecoration:'none' }}  >Edit-articles</Link> */}
</div>

<div >
  {/* <Link id="sec" className="first"  to='/library' style={{textDecoration:'none'  }} >login</Link> */}
  <Link id="sec" className="first" to='/' style={{textDecoration:'none' }} >Signout</Link>

</div>
</nav>

      <div>
      <div className="a1">
      </div>
      </div>
      
      {!getdata.length ? (<img src={spinner} alt="loading..."/>):(
      
      getdata.map((data)=>

        <div className="container mt-5" >

        <div className="row">
        <Link style={{textDecoration:"none"/*,color:"black"*/}} to={{
        pathname: `/Rarticles/${data._id}` 
       }} >
       <h2>{data.articlename}</h2>
       </Link>
              
            
             <h4>{data.date}</h4>
             <h3>{data.authorname}</h3>
             <p>{data.highlight}</p>
            
        </div>

         
           
             <div className="row" >
                <div className="col-sm-2">
                <Link to={`/editarticles/${data._id}`} className="btn btn-outline-success">update</Link>

                </div>
            
                <div className="col-sm-2">
                <button  onClick={()=> handledelete(data._id)}  type="submit" className="btn btn-outline-danger">Delete</button >

                </div>

             </div>

             <br/>

        </div>
     ))}
       

      </Fragments>




    )


}

const Fragments = styled.div`

margin :7rem 0;

img{
  width : 10rem;
  display: block;
  margin: 0 auto;
  
}

overflow:hidden



`


;

