import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './COMPONENTS/Home'
import About from './COMPONENTS/About/About';
import Services from './COMPONENTS/Services/Services';
import Blog from './COMPONENTS/Blog/Blog';
import FreeConsultation from './COMPONENTS/FreeConsultation/FreeConsultation';
import { useEffect, useState } from 'react';



function App() {

  const [apiresponse, setapiresponse] = useState(null)

  useEffect(() => {
    const url = "http://localhost:9000";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.text();
        setapiresponse(json)
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);
  return (
    <div className="App">
      {/* <p className="App-intro">{apiresponse}</p> */}
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Services" element={<Services />}/> 
      <Route path="/About" element={<About/>}/>
      <Route path="/Blog" element={<Blog />}/>
      <Route path="/FreeConsultation" element={<FreeConsultation />}/>
      </Routes>
      
    </div>
  );
}

export default App;
