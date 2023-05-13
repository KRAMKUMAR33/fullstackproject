
import 'boxicons'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Vids from "../assets/student1.mp4";

export const Ehome=()=>{

    return(
      <Fragment>
    
        <nav  id="home" >

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
        <video autoPlay loop muted>
          <source src={Vids} type="video/mp4" />
        </video>




</Fragment>
    )


};