import axios from 'axios';
import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';


const Addarticle = () => {

  const[message,setmessage]=useState("");

  const [postdata,setpostdata]=useState({
      
    articlename:"",
    date:"",
    authorname:"",
    highlight:"",
    article:""

  });



  const handlechange=(event)=>{
    const target = event.target;
    const name = target.name;
    const value = target.value;

   
    setpostdata({
      ...postdata,
      [name]:value
    })

  }


  const handleclick=()=>{
    axios.post('http://localhost:8080/server',postdata)
    .then(function (response){
      console.log(response.data)
      setmessage(response.data.status)
      
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
    

<div id='sl'  className='container col-sm-4 mt-5 '>

  <h1 className='text-center'>Add articles</h1>
  <span className='message'>{message}</span>
<form  encType='multipart/form-data'  >
    <div className='form-group'>
        <label className='form-label' >Article name</label>
        <input className='form-control' value={postdata.articlename} name='articlename' onChange={handlechange} type='text' placeholder='articlename'    />
    </div>
    <div className='form-group'>
        <label className='form-label' >Date</label>
        <input className='form-control'onChange={handlechange} name='date' value={postdata.date} type='date' placeholder='date'     />
    </div>
    <div className='form-group'>
        <label className='form-label' >Author name</label>
        <input className='form-control' onChange={handlechange} name='authorname' value={postdata.authorname} placeholder='authorname' />
    </div>
    <div className='form-group'>
        <label className='form-label' >High light</label>
        <input className='form-control' onChange={handlechange} name='highlight' value={postdata.highlight} placeholder='highlight' />
    </div>
    <div className='form-group'>
        <label className='form-label' >Article</label>
        <textarea className='form-control' onChange={handlechange} name='article' value={postdata.article} type='text' placeholder='type your article'  rows={4}  /> 
    </div>

     <button onClick={handleclick} type='button'  className='btn btn-outline-success mt-3' >Submit</button>
    
</form>

</div>
</div>
</Fragment>
  )
}

export default Addarticle;

