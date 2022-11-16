import React, { useEffect, useState } from 'react'
import './Css/Segment5.css'

function Segment5() {

  const [brands, setbrands] = useState([]);

  var defaultBrands = ["Realme", "Celebfie", "the Zappy Box", "Peoples's Group", "City Mall", "Pure Aatman", "Brand VTF", "Bombay Times Fashion Week", " Codelia Cruises", "Faaniwoods.com"];
  useEffect(() => {
    
    setbrands(defaultBrands);
    return () => {
     
    }
  }, [])
  
  return (
    <div className='segment5'>
        <h1>Trusted By Leading & Emerging Brands</h1>
        <div id='topBox'>
          {brands.map((e, i)=>{
           return <div key={i} className='brandBox'>
                {e}
            </div>
          })}
        </div>
    </div>
  )
}

export default Segment5