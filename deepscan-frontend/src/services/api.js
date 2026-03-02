const formData = new FormData();
formData.append('image', file);
const res = await axios.post('http://localhost:5000/api/analyze', formData);
return res.data;