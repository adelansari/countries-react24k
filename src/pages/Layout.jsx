import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';
import { auth, logout } from '../auth/firebase';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

const Layout = () => {
  const [user] = useAuthState(auth);
  return (
    <Container fluid>
      <Row>
        <Navbar bg='primary' variant='dark' expand='md' style={{ marginBottom: '10px' }}>
          <Container className='justify-content-end'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav>
                <LinkContainer to='/'>
                  <Nav.Link style={{ color: 'white', fontWeight: 'bold' }}>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/countries'>
                  <Nav.Link style={{ color: 'white', fontWeight: 'bold' }}>Countries</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/register'>
                  <Nav.Link style={{ color: 'white', fontWeight: 'bold' }}>Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link style={{ color: 'white', fontWeight: 'bold' }}>Login</Nav.Link>
                </LinkContainer>
                {user && (
                  <Button onClick={logout} style={{ marginLeft: '10px' }}>
                    Logout
                  </Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Outlet />
      </Row>
    </Container>
  );
};

export default Layout;
