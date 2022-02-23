import React from 'react';
import {ListGroup} from 'react-bootstrap';
import SubMenu from '../components/subMenu/subMenu.js';

function Sub4(props){
  return(
    <>
    <SubMenu subMenu='menu2-2' />
    <div className="content">
      <div className="mx-5 my-5">
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
    </>
  )
}

export default Sub4;