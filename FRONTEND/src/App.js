import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./pages/style.css";
import { Admin } from "./pages/admin";
import { Public } from "./pages/public";
import { Home } from "./pages/home";
import { Notes } from "./pages/notes";
import Addarticle from "./pages/addarticle";
import Rarticles from "./pages/Rarticles";
import { useEffect, useState } from "react";
import axios from "axios";
import Editarticle from "./pages/editarticle";
import { Ehome } from "./pages/ehome";
import { Publicview } from "./pages/publicview";
import { Phome } from "./pages/phome";
import { Paddarticle } from "./pages/paddarticle";
import { Prarticles } from "./pages/prarticle";
import { Pusers } from "./pages/pusers";

function App() {



  return (
    <div className="App">




<BrowserRouter>





<Routes>
<Route path="/" element={<Home/>} />
<Route path="/admin" element={<Admin/>} />
<Route path="/library" element={<Public/>} />


<Route path="/notes" element={<Notes/>}  />


<Route path="/addarticles" element={<Addarticle/>} />
<Route path="/editarticles/:id" element={<Editarticle/>} />
<Route path="/Rarticles/:id" element={<Rarticles/>} />
<Route path="/ehome" element={<Ehome/>} />
<Route path="/publicview" element={<Publicview/>} />
<Route path="/phome" element={<Phome/>} />
<Route path="/paddarticle" element={<Paddarticle/>} />
<Route path="/prarticle/:id" element={<Prarticles/>} />
<Route path="/pusers" element={<Pusers/>} />




</Routes>


</BrowserRouter>







     
    </div>
  );
}

export default App;
