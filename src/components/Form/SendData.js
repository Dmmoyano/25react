import {useState} from 'react';
import axios from 'axios';
import Formulario from './Formulario';


export default function SendData()  {

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        phone :"",
        message : "",
    });

    const handleChangeName = (event) => {
        const name = event.target.value
        setFormData({...formData, name})
     }  
     
     const handleChangeEmail = (event) => {
         const email = event.target.value
         setFormData({...formData, email})
      } 
 
      const handleChangePhone = (event) => {
         const phone = event.target.value
         setFormData({...formData, phone})
      } 
 
      const handleChangeMessage = (event) => {
         const message = event.target.value
         setFormData({...formData, message})
      }  

      console.log(formData)

      const handleSubmit = ()=>{
        const sendInfo = async () => {
            console.log(formData)
            try{
             const response = await axios({
                method: 'POST',
                formData,    
                url:  `http://laravelmundose.herokuapp.com/public`

             })
             console.log(response)
            }catch(err){
             console.log(err)
            }
        }
         sendInfo()
         setFormData({
             name : "",
             email : "",
             phone :"",
             message : ""
         })
    }

    return (
        <div>
        <Formulario
        onChangeName = {handleChangeName}
        onChangeEmail = {handleChangeEmail}
        onChangePhone = {handleChangePhone}
        onChangeMessage = {handleChangeMessage}
        onClick = {handleSubmit}
        />
        </div>
    )
}