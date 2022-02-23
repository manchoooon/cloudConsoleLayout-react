import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Card} from 'react-bootstrap';
import SubMenu from '../components/subMenu/subMenu.js';

function Sub3(props){
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
    <SubMenu subMenu='menu2-1' actionArr={['CREATE', 'DELETE']} />
    <div className="content">
      <div className="mx-5 my-5">
        <Card className="bg-dark text-white">
        <Card.Img src={imgSrc} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      </div>
    </div>
    </>
  )
}

export default Sub3;