import {React} from 'react';
import { useHistory } from 'react-router-dom';
import {ListGroup} from 'react-bootstrap';
import logoImg from './image/burger_1.png';
import './menu.css';

function Menu(props){
  const history = useHistory();
  
  function goSubMenu(subMenu){
    history.push(`/${props.menu}/${subMenu}`, {menu:props.menu, subMenu:subMenu});
  }
  
  return(
    <div className="menu-list h-100 position-fixed border-end">
      <div className="menu d-md-flex align-items-md-center border-bottom">
        <div className="logo-img mx-3"><img className="mw-100" src={logoImg} alt="burger_1.png"/></div>
        <h6 className="m-0">{props.menu}</h6>
      </div>
      <div className="sub-menu-list">
        <ListGroup className="border-bottom" variant="flush">
          {
            props.subMenuArr.map(v => {
              return <ListGroup.Item action onClick={()=>{goSubMenu(v)}} key={v}>{v}</ListGroup.Item>
            })
          }
        </ListGroup>
      </div>
    </div>
  )
}

export default Menu;