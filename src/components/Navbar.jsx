import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <Navwrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </Navwrapper>
    );
  }
}

const Navwrapper = styled.nav`
  background: #2a2a72;
  .nav-link {
    color: white;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
