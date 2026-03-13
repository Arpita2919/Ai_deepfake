import React,{useState} from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import UploadZone from "./components/UploadZone"
import ResultCard from "./components/ResultCard"
import Features from "./components/Features"
import Footer from "./components/Footer"

function App(){

const [result,setResult]=useState(null)

return(

<div>

<Navbar/>

<Hero/>

<UploadZone setResult={setResult}/>

<ResultCard result={result}/>

<Features/>

<Footer/>

</div>

)

}

export default App