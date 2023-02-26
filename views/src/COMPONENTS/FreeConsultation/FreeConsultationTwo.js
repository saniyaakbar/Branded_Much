import React, { useEffect, useState } from 'react'
import './FreeConsultationTwo.css'
import Nav from '../Nav'
import Footer from '../ContactUs'
import axios from 'axios'
import { useNavigate} from "react-router";
// import Submitted from './Submitted';
const { REACT_APP_ENDPOINT } = process.env;

// import { useHistory } from "react-router-dom";


function FreeConsultation2() {
  const navigate = useNavigate();
  // const history = useHistory();
  const [formSubmit, setFormSubmit] = useState(false)
  const [userData, setuserData] = useState(    
    { message : ""}
  );

  const setuser = (e) => {
    const data = {...userData, [e.target.name] : e.target.value}
    setuserData(data)
    // console.log(userData)
    
  }

 const userDataSubmit = async (e) => {
    e.preventDefault()
    navigate('/FormSubmitted')

    // if(userData.phone.length < 10){
    //   alert("Mobile number must be at least 10 digits!");
    // }
    // else{

  //  const  headers =  {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',

  //       }

  //   axios.post("http://localhost:9000/message", {...userData}, headers)
  //   .then(response => {
  //     console.log(response)
  //     navigate('/FormSubmitted')

  //   })
  //   .catch(err=> console.log(err))
      
      // const rawResponse = await fetch(`${REACT_APP_ENDPOINT}/userData`, {
      //   method: 'POST',
      //   mode:"cors",
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',

      //   },
      //   body: JSON.stringify(userData)
      // });
      // const content = await rawResponse.json();
      // navigate('/FormSubmitted')
    // }
    
      
    
      // console.log(content);
    // setFormSubmit(true)
      // navigate('/FormSubmitted')
      // history.push("/FormSubmitted")
    
  }

  useEffect(() => {
   
  
    return () => {
     
    }
  }, [formSubmit])
  

  return (
    <div className='freeConsultation2'>
        <Nav/>
        {/* {formSubmit && <Submitted/>} */}
        {/* {!formSubmit &&  */}
        <div className="consultationBox">
        <h1>Can't decide what to do next?</h1>
        <p>Drop us your details and we'll get back to you in less than 24 hours.</p>

        <form onSubmit={(e)=>userDataSubmit(e)}>
          <div className="personalInfo">

          <input required onChange={setuser} value={userData.name} placeholder='Name' type="text" name='name' />
          <input required onChange={setuser} value={userData.company} placeholder='Company' type="text" name="company"/>
          <input required onChange={setuser} value={userData.industry} placeholder='Industry' type="text" name="industry"/>
          <input required onChange={setuser} value={userData.designation} placeholder='Designation' type="text" name="designation"/>

          </div>

          <div className="extraInfo">

          <input required onChange={setuser} value={userData.email} placeholder='Email' type="email" name="email"/>
          <input required onChange={setuser} value={userData.phone} placeholder='Phone Number' type="Number" name="phone"/>
          <input required onChange={setuser} value={userData.location} placeholder='Location' type="text" name="location"/>
          <input onChange={setuser} value={userData.message} placeholder='Message (Optional)' type="text" name="message"/>

          </div>

          <button type='submit'>Submit</button>
         
        </form>

        </div>

        {/* } */}
        
        
      
    </div>
  )
}

export default FreeConsultation2