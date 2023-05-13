import "boxicons";
import { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Vids from "../assets/student2.mp4";
import axios from "axios";
export const Pusers = () => {
   
  const [message,setmessage]=useState("")
  const router = useNavigate();
  const[getusers,setgetusers]=useState({
    username:"",
    dob:"",
    email:"",
    password:"",
    retypepassword:"",
    phone:""
  })
const handlechange=(event)=>{
   const target = event.target;
   const name = target.name;
   const value = target.value;

   setgetusers({
    ...getusers,
    [name]:value
   })
}
const handleclick=()=>{
   axios.post('http://localhost:8080/users/usersignup/',getusers)
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
      <video autoPlay loop muted>
        <source src={Vids} type="video/mp4" />
      </video>
      <div className="x2">
        <Link
          id="loghome"
          className=""
          to="/"
          style={{ textDecoration: "none" }}
        >
          Retrun Home
        </Link>
      </div>
      <div className="container  ">
        <form className="forms  ">
          <h1 className="text-center">Sign-up</h1>
             <div className="form-group">
              <label className="form-label">Username</label>
              <input value={getusers.username} onChange={handlechange} name="username" type="text" placeholder="username" className="form-control" />
             </div>
             <div className="form-group">
              <label className="form-label">D.O.B</label>
              <input value={getusers.dob} onChange={handlechange} name="dob" type="date"  className="form-control" />
             </div>
             <div className="form-group">
              <label className="form-label">Email</label>
              <input value={getusers.email} onChange={handlechange} name="email" type="email" placeholder="email" className="form-control" />
             </div>
             <div className="form-group">
              <label className="form-label">Password</label>
              <input value={getusers.password} onChange={handlechange} name="password" type="text" placeholder="password" className="form-control" />
             </div>
             <div className="form-group">
              <label className="form-label">Retypepassword</label>
              <input value={getusers.retypepassword} onChange={handlechange} name="retypepassword" type="password" placeholder="retypepassword" className="form-control" />
             </div>
             <div className="form-group">
              <label className="form-label">Phone</label>
              <input value={getusers.phone} onChange={handlechange} name="phone" type="text" placeholder="phone" className="form-control" />
             </div>
             <br/>
             <button type="button" onClick={handleclick} className="btn btn-primary" >Sign-up</button><span className="message1">{message}</span>
        </form>

      </div>


    </Fragment>
  );
};
