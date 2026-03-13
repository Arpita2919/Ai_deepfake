import React from "react";

const Features = () => {

return(

<section style={styles.grid}>

<div style={styles.card}>
<h3>AI Detection</h3>
<p>Deep learning model detects AI generated images</p>
</div>

<div style={styles.card}>
<h3>Metadata Analysis</h3>
<p>Checks EXIF data anomalies</p>
</div>

<div style={styles.card}>
<h3>Fast Processing</h3>
<p>Results in less than 3 seconds</p>
</div>

</section>

)

}

const styles={

grid:{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"30px"
},

card:{
background:"#1e293b",
padding:"30px",
borderRadius:"10px"
}

}

export default Features