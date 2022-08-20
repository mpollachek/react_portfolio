import { useState, useEffect } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink, Switch, useNavigate } from 'react-router-dom';
import SheepLogo from '../app/assets/img/sheep.jpg';
import { auth } from '../firebase.config';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser, setCurrentUser } from '../user/userSlice';
import './header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const user = useSelector(selectCurrentUser);
  console.log("user: " + user)

  return (
    <Navbar dark color='primary' sticky='top' expand='md'>
      <NavbarBrand className='ms-5' href='/'>
          <img src={SheepLogo} alt='AllFarms logo' className='float-start'/>
          <div className='brand'>
          <h3 className='brandname-1'>Farmstand</h3>
          <h3 className='brandname-2'>Finder</h3>
          </div>
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
          { user &&
          <NavItem>
              <NavLink className='nav-link' to='/profile' active='false' >
                  <i className='fa fa-user fa-lg' /> Profile
              </NavLink>
          </NavItem>
          } 
          { !user &&
            <NavItem>
              <NavLink className='nav-link' to='/sign-in' active='false' >
                  <i className='fa fa-user fa-lg' /> Sign In
              </NavLink>
          </NavItem>
          }
      </Nav>
      </Collapse>
  </Navbar>
  );
};

export default Header;