import React from 'react';
import {Table} from 'react-bootstrap';
import SubMenu from '../components/subMenu/subMenu.js';

function Sub5(props){
  return(
    <>
    <SubMenu subMenu='menu2-3' actionArr={['DELETE']} />
    <div className="content">
      <div className="mx-5 my-5">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
    </>
  )
}

export default Sub5;