import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>

      <h2 style={styles.logo}>DeepScan</h2>

      <div style={styles.links}>
        <a>Home</a>
        <a>Features</a>
        <a>Upload</a>
      </div>

    </nav>
  );
};

const styles = {
nav:{
display:"flex",
justifyContent:"space-between",
padding:"20px 10%",
background:"#020617"
},
logo:{
color:"#38bdf8"
},
links:{
display:"flex",
gap:"25px"
}
};

export default Navbar;