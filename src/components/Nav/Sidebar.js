import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = ({ open, onClick }) => {
  return (
    <UlContainer open={open} onClick={onClick}>
      {
        <>
          <Link to="/" className="text-link">
            <li>Home</li>
          </Link>

          <Link to="/pets" className="text-link">
            <li>Pets</li>
          </Link>

          <Link to="/about" className="text-link">
            <li>About</li>
          </Link>
        </>
      }

      <>
        <Link to="/login" className="text-link donate">
          <li>Login</li>
        </Link>
      </>

      {/* {
            Auth.loggedIn() ? (
                <>
                    <Link to='/login' className='text-link donate' onClick={ logout }>
                        <li>Logout</li>
                    </Link>
                </>
            ) : (
                    <>
                        <Link to='/login' className='text-link donate'>
                            <li>Login</li>
                        </Link>
                    </>
                ) 
                } */}
    </UlContainer>
  );
};

export default Sidebar;

const UlContainer = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  .text-link {
    color: rgb(51, 94, 160);

    text-shadow: 0px 0px 39px rgba(13, 12, 34, 0.3);
    font-family: "Source Sans Pro", sans-serif;
  }

  .text-link:hover {
    text-decoration: none;
    color: #11be8b;
    opacity: 0.8;
  }

  li {
    list-style-type: none;
    font-weight: 600;
    padding: 1rem 1.5rem;
  }

  .donate li {
    background: #11be8b;
    color: white;
    padding: 0.4rem 1.5rem;
    font-weight: normal;
    margin-top: 0.4rem;
    box-shadow: 0px 0px 50px 0px rgba(13, 12, 34, 0.2);
  }

  .donate:hover {
    color: white;
    box-shadow: 0px 0px 50px 0px rgba(13, 12, 34, 0);
  }

  @media only screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background: white;
    position: fixed;
    border: none;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 4rem 2rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;

    li {
      padding: 1rem;
      margin: 0.2rem;
    }
  }
`;
