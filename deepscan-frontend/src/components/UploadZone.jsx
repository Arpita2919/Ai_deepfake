import React, {useState} from "react";
import axios from "axios";

const UploadZone = ({setResult}) => {

const [file,setFile]=useState(null)

const upload= async ()=>{

const formData=new FormData()

formData.append("image",file)

const res=await axios.post("http://localhost:5000/detect",formData)

setResult(res.data)

}

return(

<section>

<div style={styles.box}>

<input type="file" onChange={(e)=>setFile(e.target.files[0])}/>

<button onClick={upload}>Analyze Image</button>

</div>

</section>

)

}

const styles={

box:{
border:"2px dashed #38bdf8",
padding:"60px",
textAlign:"center",
borderRadius:"12px"
}

}

export default UploadZone