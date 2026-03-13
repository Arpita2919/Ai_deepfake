import React from "react";
import axios from "axios";

function UploadBox({ setResult }) {

  const handleUpload = async (e) => {

    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);

    try {

      const res = await axios.post(
        "http://localhost:5000/api/analyze",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setResult(res.data);

    } catch (err) {
      alert("Upload failed");
    }
  };

  return (

    <div className="upload-container">

      <label className="upload-box">

        <input type="file" hidden onChange={handleUpload} />

        <div className="upload-text">

          <h2>📤 Upload Image</h2>
          <p>Click or Drag & Drop</p>

        </div>

      </label>

    </div>
  );
}

export default UploadBox;