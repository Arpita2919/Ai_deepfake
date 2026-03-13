import React from "react";

const ConfidenceMeter = ({score}) => {

return(

<div style={{marginTop:"30px"}}>

<h3>AI Probability</h3>

<div style={styles.bar}>

<div style={{...styles.fill,width:`${score}%`}}></div>

</div>

<p>{score}% Likely AI Generated</p>

</div>

)

}

const styles={

bar:{
width:"100%",
height:"20px",
background:"#1e293b",
borderRadius:"10px"
},

fill:{
height:"20px",
background:"#38bdf8",
borderRadius:"10px"
}

}

export default ConfidenceMeter