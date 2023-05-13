import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Vids from "../assets/student2.mp4";
import axios from "axios";



export const Public=()=>{

    const [message,setmessage]=useState("")
    const router = useNavigate();
    const[getpublic,setgetpublic]=useState({
      email:"",
      password:""
    })
  const handlechange=(event)=>{
     const target = event.target;
     const name = target.name;
     const value = target.value;
  
     setgetpublic({
      ...getpublic,
      [name]:value
     })
  }
  const handleclick=()=>{
     axios.post('http://localhost:8080/users/login/',getpublic)
      .then(function (response){
        console.log(response.data.status)
         if(response.data.status === 'success'){
             router('/phome')
         }
         else{
          console.log(response.data.message)
          setmessage(response.data.message);
         }
      })
      .catch(function (error){
        console.log(error);
      })
  }

    return(
   <Fragment>
        <video autoPlay loop muted>
          <source src={Vids} type="video/mp4" />
        </video>

        <div  className="x2">
  <Link id="loghome" className="" to='/' style={{textDecoration:'none' }} >Retrun Home</Link>

</div>
      
<div className="logreg-box container ">
    <div className="form-box login" >
        <form id="plm"  className=" p-5 ">

<h2>Student-login</h2>
<span className="messagess">{message}</span>
<div id='a1' className="input-box">
<span className="icon"><box-icon type='solid' name='envelope'></box-icon></span>
<input onChange={handlechange} value={getpublic.email} name="email" type="email" required />
<label>Email</label>
</div>
<div id='a2' className="input-box">
<span className="icon"><box-icon type='solid' name='loc'></box-icon></span>
<input onChange={handlechange} value={getpublic.password} name="password" type="password" required />
<label>Password</label>
</div>

<div className="mt-4 ms-2">
<Link  style={{textDecoration:'none',color:'white'}}>Forget password ?</Link>
</div>
 
 <div className="mt-2 " id='dfg'>
    <button type="button" onClick={handleclick} id='sds' className='btn btn-primary '>Sign-in</button>
 </div>
<div className="mt-4 ms-2">
<Link to={'/pusers'} style={{textDecoration:'none' ,color:'white'}}>Don,t have account create now</Link>
</div>
<div className="mt-4 ms-2">
<Link to='/admin' style={{textDecoration:'none',color:'white'}}>Sign-in admin account</Link>
</div>

        </form>




    </div>



</div>


</Fragment>
    )


};