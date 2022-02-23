import {React} from 'react';
import {Navbar,Container,Nav,Offcanvas} from 'react-bootstrap';
import './navBar.css';

function NavBar(props) {
  return(
    <Navbar bg="primary" className="position-fixed w-100" variant="dark" expand={false}>
      <Container className="h-100">
        <div className="h-100 d-md-flex align-items-md-center">
          <Navbar.Toggle className="me-3" aria-controls="offcanvasNavbar" onClick={() => (props.menuShow === true) ? props.setMenuShow(false) : props.setMenuShow(true)}/>
          <Navbar.Offcanvas  show={props.menuShow} onHide={() => props.setMenuShow(false)} placement="start">
            <Offcanvas.Body>
              <Nav className="side-menu-list justify-content-end flex-grow-1 pe-3">
                {
                  Object.keys(props.menuObj).map(v => {
                    return <Nav.Link className="text-dark" key={v} onClick={()=>{props.selectMenu(v)}}><span className="p-4">{v}</span></Nav.Link>
                  })
                }
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="/">Google Cloud Platform</Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar;