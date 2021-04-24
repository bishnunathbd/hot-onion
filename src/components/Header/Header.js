import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo2.png';
import './Header.css';

const Header = () => {

  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
            </li>
            <li class="nav-item">
              <a class="nav-link font-weight-bold" href="#">Login</a>
            </li>
            <li class="nav-item">
              <button class='red-btn'>Sign up</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;