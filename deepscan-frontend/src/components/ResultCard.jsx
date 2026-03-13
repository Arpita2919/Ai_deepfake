import React from "react";
import ConfidenceMeter from "./ConfidenceMeter";

const ResultCard = ({result}) => {

if(!result) return null

return(

<section>

<h2>Analysis Result</h2>

<ConfidenceMeter score={result.score}/>

<p>Verdict: {result.label}</p>

</section>

)

}

export default ResultCard