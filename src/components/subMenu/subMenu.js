import {React} from 'react';
import './subMenu.css';

function SubMenu(props){
  return(
    <div className="sub-menu form-floating float-end">
      <div className="sub-menu-title d-md-flex align-items-md-center border-bottom">
        <h6 className="mx-3 my-0">{props.subMenu}</h6>
        <div className="action ms-3">
          {
            (props.actionArr !== undefined && props.actionArr.length > 0) &&
            props.actionArr.map(v => {
              return <button type="button" key={v}>{v}</button>;
            })
          }
        <button type="button" onClick={() => {window.location.reload()}}>REFRESH</button>
        </div>
      </div>
    </div>
  )
}

export default SubMenu;