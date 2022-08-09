import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { faBone } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    alert("Klik tombol sign up");
    console.log(formState);
  };

  return (
    <main>
      <div>
        <div>
          <div>
            <HomeContainer>
              <div className="home-img">
                <h2 className="icon icon-bone">
                  {" "}
                  <FontAwesomeIcon icon={faBone} />
                </h2>

                <Form onSubmit={handleFormSubmit}>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      autoComplete="email"
                      name="email"
                      className="form-input"
                      id="email"
                      value={formState.email}
                      placeholder="Enter email"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      autoComplete="new-password"
                      className="form-input"
                      id="password"
                      value={formState.password}
                      placeholder="Password"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      autoComplete="address"
                      className="form-input"
                      id="address"
                      value={formState.address}
                      placeholder="Enter Address"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="phoneNumber"
                      autoComplete="phoneNumber"
                      className="form-input"
                      id="phoneNumber"
                      value={formState.phoneNumber}
                      placeholder="Enter Phone Number"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <button className="btn-find" type="submit">
                    Submit{" "}
                    <span className="shake-paw">
                      <FontAwesomeIcon icon={faPaw} />
                    </span>
                  </button>
                </Form>
              </div>
            </HomeContainer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    0deg,
    rgba(231, 242, 247, 1) 0%,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 236, 240, 1) 100%
  );

  .home-img {
    width: 33%;
    height: 10%;
    margin: 4rem;
    padding: 1rem 4rem;
    align-items: left;
    text-align: left !important;
    background-color: white !important;
    box-shadow: 2px 1px 89px 0px rgba(56, 101, 167, 0.3);
  }

  .btn-find {
    width: 100%;
    font-family: "Alegreya Sans", sans-serif;
    padding: 0.6rem 2rem !important;
    margin: 2.6rem 0 !important;
    text-decoration: none !important;
    border-radius: none;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgba(130, 246, 165, 1) 50%,
      rgba(147, 238, 169, 1) 100%
    );
    box-shadow: 2px 1px 39px 6px rgba(186, 201, 227, 0.55);
  }

  .btn-find:hover {
    color: white;
    box-shadow: 2px 1px 9px 0px rgba(186, 201, 227, 0.75);
    transform: scale(1.01);
    background: linear-gradient(
      90deg,
      rgba(130, 246, 165, 1) 50%,
      rgba(147, 238, 169, 1) 100%
    );
  }

  .icon {
    color: #c7d2d9;
    font-size: 3rem;
    transform: rotate(-20deg);
  }

  @media only screen and (max-width: 1168px) {
    .home-img {
      width: 50%;
    }
  }

  @media only screen and (max-width: 768px) {
    .home-img {
      width: 70%;
      margin: 4rem 3rem;
      padding: 1rem 2rem;
    }
  }

  @media only screen and (max-width: 568px) {
    .home-img {
      width: 100%;
    }
  }
`;
