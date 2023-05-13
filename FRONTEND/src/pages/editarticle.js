import axios from 'axios';
import React, { Fragment, useState ,useEffect} from 'react'
import styled from 'styled-components';
import { Link, useNavigate , useParams} from "react-router-dom";

const Editarticle = () => {


    const params = useParams();

    const [message,setmessage]=useState();

    const [bdata,setbdata]=useState({
        articlename:"",
        date:"",
        authorname:"",
        highlight:"",
        article:""
    })

useEffect(()=>{
  if(params.id){
    
    axios.get('http://localhost:8080/server/'+params.id)
.then(function (response){
    console.log(response.data)
    setbdata(response.data.data)
})
.catch(function (error){
console.log(error)
})
}
  
},[])

const handlechange=(event)=>{

  const target = event.target;
  const name = target.name;
  const value = target.value;

  setbdata({
    ...bdata,
    [name]:value
  })

}
const handleclick=()=>{
  
    
  axios.put(`http://localhost:8080/server/${params.id}`,bdata)
  .then(function (response){
    setmessage(response.data.status)
    console.log(response.data)
   
  })
  .catch(function (error){
    console.log(error);
  })

 

}



  return (
<Fragment>
<nav id="home" >

<div  >
  <Link id="sec" className="first" to='/ehome' style={{textDecoration:'none' }} >Home</Link>
  <Link id="sec" className="first"  to='/notes' style={{textDecoration:'none' }}  >Articles</Link>
  <Link id="sec" className="first"  to='/addarticles' style={{textDecoration:'none' }}  >Add-articles</Link>
  {/* <Link id="sec" className="first" to='/editarticles' style={{textDecoration:'none' }}  >Edit-articles</Link> */}
</div>

<div >
  <Link id="sec" className="first"  to='/' style={{textDecoration:'none'  }} >Signout</Link>
</div>
</nav>
  
  <div className='x3'>
    

<div id='sl'  className='container col-sm-5 mt-5 '>

  <h1 className='text-center'>Edit articles</h1>
  <span className='message'>{message}</span>
<form  encType='multipart/form-data'  >
    <div className='form-group'>
        <label className='form-label' >Article name</label>
        <input className='form-control' value={bdata.articlename} name='articlename' onChange={handlechange} type='text' placeholder='articlename'     />
    </div>
    <div className='form-group'>
        <label className='form-label' >Date</label>
        <input className='form-control'  value={bdata.date}  name='date' onChange={handlechange}  type='date'     />
    </div>
    <div className='form-group'>
        <label className='form-label' >Author name</label>
        <input className='form-control'  value={bdata.authorname} name='authorname'   onChange={handlechange} type='text' placeholder='Author name'     />
    </div>
    <div className='form-group'>
        <label className='form-label' >High light</label>
        <input className='form-control'  value={bdata.highlight} name='highlight'   onChange={handlechange} type='text' placeholder='highlight'     />
    </div>
    <div className='form-group'>
        <label className='form-label' >Article</label>
        <textarea className='form-control' value={bdata.article} name='article'  onChange={handlechange} type='text'  placeholder='Articles' rows="4"></textarea>
    </div>

     <button  onClick={handleclick} type='button'  className='btn btn-outline-success mt-3' >Update-article</button>
     
</form>

</div>
</div>
</Fragment>
  )
}

export default Editarticle;

const Fragments = styled.div`

// .message{
//   font-weight:900;
//   color:tomato;
//   padding:1rem 1rem 1rem 0;
// }


`;