import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
function NavigationBar() {
  return (
    < Navbar  className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand"  >NETFLIX</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Nav.Link as={Link}  to="/home">Home</Nav.Link>
                {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
              </li>
              <li className="nav-item">
              <Nav.Link as={Link} to="/blogs"  >Blogs</Nav.Link>
                {/* <a className="nav-link active"   href="/Search">Search</a> */}
              </li>
              <li className="nav-item">
              <Nav.Link as={Link}  to="/contact">Contact</Nav.Link>
                {/* <a className="nav-link" href="/Edit">Edit</a> */}
              </li>
              <li className="nav-item">
              <Nav.Link as={Link}  to="/">Layout</Nav.Link>
                {/* <a className="nav-link" href="/Report">Report</a> */}
              </li>
                
            </ul>
            <form className="d-flex">
              
              <button className="btn btn-danger"   >Logout</button>
            </form>
          </div>
        </div>
      </Navbar>
  );
}

export default NavigationBar;