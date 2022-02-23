import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SubMenu from '../components/subMenu/subMenu.js';

function Sub1(){
  const [imgSrc, setImgSrc] = useState();

  useEffect(() => {
    axios.get("https://source.unsplash.com/random")
      .then((result) => {
        if(result.status === 200){
          setImgSrc(result.request.responseURL);
        }
      })
      .catch((e) => {
      })
  },[])

  return(
    <>
    <SubMenu subMenu='menu1-1' actionArr={['DELETE']} />
    <div className="content">
      <div className="mx-5 my-5"><img className="w-100" src={imgSrc} alt="img"/></div>
    </div>
    </>
  )
}

export default Sub1;