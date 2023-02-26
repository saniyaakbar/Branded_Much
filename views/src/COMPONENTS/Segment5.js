import React, { useEffect, useState } from 'react'
import './Css/Segment5.css'
import realme from '../assets/BrandLogos/realme logo.png'
import Celebfie from '../assets/BrandLogos/celebfie logo.png'
import theZappyBox from '../assets/BrandLogos/zappybox.png'
import PeoplesGroup from '../assets/BrandLogos/people.png'
import CityMall from '../assets/BrandLogos/city mall.png'
import pureaatman from '../assets/BrandLogos/pureaatman.png'
import BombayTimesFashionWeek from '../assets/BrandLogos/bombaytimes.png'
import CodeliaCruises from '../assets/BrandLogos/cruises.png'
import Faaniwoods from '../assets/BrandLogos/logo variation-02.png'
import BrandVTF from '../assets/BrandLogos/vtf.png'


function Segment5() {

  const [brands, setbrands] = useState([]);

  var defaultBrands = [
    {name: "Realme",
     image: realme
    },
    {
      name: "Celebfie",
      image: Celebfie,
    },
    {
      name: "the Zappy Box",
      image: theZappyBox,
    },
    {
      name: "Peoples's Group",
      image: PeoplesGroup,
    },
    {
      name: "City Mall",
      image: CityMall
    },
    {
      name: "Brand VTF",
      image: BrandVTF
    },
    {
      name: "Bombay Times Fashion Week",
      image: BombayTimesFashionWeek
    },
    {
      name: " Codelia Cruises",
      image: CodeliaCruises
    },
    {
      name: "Faaniwoods.com",
      image: Faaniwoods
    },
    {name: "Pure Aatman",
    image: pureaatman
    }
];

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
                <img src={e.image} alt="" />
            </div>
          })}
        </div>
    </div>
  )
}

export default Segment5