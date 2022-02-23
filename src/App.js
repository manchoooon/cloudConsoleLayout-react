import {React, useState, useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import { Sub1, Sub2, Sub3, Sub4, Sub5 } from "./pages";
import menuObj from './json/menu.json';
import Menu from './components/menu/menu.js';
import NavBar from './components/navBar/navBar.js';
import './App.css';

function App() {
  const history = useHistory();
  const [menuShow, setMenuShow] = useState(false);
  const [menu, setMenu] = useState('');
  const [subMenuArr, setSubMenuArr] = useState([]);

  function selectMenu(text){
    setMenu(text);
    setSubMenuArr([...menuObj[text]]);
    setMenuShow(false);
  }

  useEffect(()=>{
    const thisPathNm = history.location.pathname;
    const thisPathArr = thisPathNm.substring(1).split('/');

    if(thisPathArr.length > 0 && thisPathArr[0] !== '' && menuObj[thisPathArr[0]] !== undefined){
      setMenu(thisPathArr[0]);
      setSubMenuArr([...menuObj[thisPathArr[0]]]);
    }
  },[]);
  
  return (
    <>
    <NavBar menuObj={menuObj} menuShow={menuShow} setMenuShow={setMenuShow} selectMenu={selectMenu}/>
    <div className="content-container form-floating">
      <Menu menu={menu} subMenuArr={subMenuArr} menuObj={menuObj}/>
      <Switch>
        <Route exact path="/" />
        <Route path="/menu1/menu1-1"><Sub1/></Route>
        <Route path="/menu1/menu1-2"><Sub2/></Route>
        <Route path="/menu2/menu2-1"><Sub3/></Route>
        <Route path="/menu2/menu2-2"><Sub4/></Route>
        <Route path="/menu2/menu2-3"><Sub5/></Route>
      </Switch>
    </div>
    </>
  );
}

export default App;