import { Fragment } from "react"

// import Bc from '../assets/bcim.jpg'
import Vids from "../assets/student2.mp4";
import { Link } from "react-router-dom";

export const Home=()=>{


    return(
<div className="App">
<video autoPlay loop muted>
          <source src={Vids} type="video/mp4" />
        </video>


        <div className="Bpp">
            {/* <img>
            <source src={Bc} type="img.jpg"></source></img> */}

<h1 id="head" >Heaven Library</h1>
<div className="x1" >
    <Link id="homelogin" className=""  to='/library' style={{textDecoration:'none'  }} >login</Link>
  </div>
        </div>
        </div>
        
    )

}