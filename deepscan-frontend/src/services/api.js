import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL?.replace(/\/+$/, "") ||
  "http://localhost:5000";

export const analyzeImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(`${API_BASE_URL}/api/analyze`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (err) {
    const apiMessage =
      err?.response?.data?.error ||
      err?.response?.data?.message ||
      err?.message ||
      "Request failed";
    throw new Error(apiMessage);
  }
};