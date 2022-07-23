import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SheepLogo from '../app/assets/img/sheep.jpg';
//import UserLoginForm from '../features/user/UserLoginForm';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar dark color='primary' sticky='top' expand='md'>
      <NavbarBrand className='ms-5' href='/'>
          <img src={SheepLogo} alt='AllFarms logo' className='float-start'/>
          <h1 className='mt-1'>AllFarms</h1>
      </NavbarBrand>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
      <Nav className='ms-auto' navbar>
          <NavItem>
              <NavLink className='nav-link' to='/'>
                  <i className='fa fa-home fa-lg' /> Home
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className='nav-link' to='/farmstands'>
                  <i className='fa fa-list fa-lg' /> Farmstands
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className='nav-link' to='/maps'>
                  <i className='fa fa-list fa-lg' /> Maps
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className='nav-link' to='/about'>
                  <i className='fa fa-info fa-lg' /> About
              </NavLink>
          </NavItem>
          <NavItem>
              <NavLink className='nav-link' to='/contact'>
                  <i className='fa fa-address-card fa-lg' /> Contact
              </NavLink>
          </NavItem>
      </Nav>
      {/* <UserLoginForm /> */}
      </Collapse>
  </Navbar>
  );
};

export default Header;