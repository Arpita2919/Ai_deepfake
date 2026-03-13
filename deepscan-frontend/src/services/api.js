import axios from "axios"

export const detectImage=(file)=>{

const formData=new FormData()

formData.append("image",file)

return axios.post("http://localhost:5000/detect",formData)

}