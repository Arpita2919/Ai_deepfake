import React from "react";

const Hero = () => {

return(

<section style={styles.hero}>

<h1>Detect AI Generated Images Instantly</h1>

<p>
Upload an image and DeepScan will analyze whether it is real or AI generated.
</p>

</section>

)

}

const styles={

hero:{
textAlign:"center",
paddingTop:"120px"
}

}

export default Hero