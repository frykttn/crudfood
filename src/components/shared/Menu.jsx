import { Button, Container, Nav, Navbar, } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router";

const Menu = ({usuarioLogueado, setUsuarioLogueado }) => {
const navegacion = useNavigate()
const logOut = ()=>{
// volver a false el state
setUsuarioLogueado(false)
navegacion('/')
}

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="titulo fs-3">
          <i className="bi bi-egg-fried fs-2 me-2"></i>Crud Food
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className={"nav-link"}>
              Inicio
            </NavLink>
            {usuarioLogueado ? (
              <>
              
              <NavLink to={"/administrador"} className={"nav-link"}>
                Administrador
              </NavLink>
              <Button onClick={logOut} variant="dark">Logout</Button>
              
              </>
            ) : (
              <NavLink to={"/login"} className={"nav-link"}>
                Login
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
