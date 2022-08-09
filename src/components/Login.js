import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { faBone } from "@fortawesome/free-solid-svg-icons";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    alert("Klik tombok login");
    event.preventDefault();
    console.log(formState);
  };

  return (
    <main>
      <HomeContainer>
        <div className="home-content">
          <h2 className="icon icon-bone">
            {" "}
            <FontAwesomeIcon icon={faBone} />
          </h2>
          <h1>
            Dont't Buy <span> Adopt </span>
          </h1>
          <p>
            "Before you get a dog, you can't quite imagine what living with one
            might be like; afterward, you can't imagine living any other way."
            <span className="quote-name">Caroline Knapp</span>
          </p>
          <Link to="/dogs">
            <button className="btn-find">
              Find dog{" "}
              <span className="shake-paw">
                <FontAwesomeIcon icon={faPaw} />
              </span>
            </button>
          </Link>
        </div>

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
                name="email"
                autoComplete="email"
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
                autoComplete="current-password"
                className="form-input"
                id="password"
                value={formState.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </Form.Group>

            <button className="btn-find" type="submit">
              Sign in
            </button>
            <Form.Text>
              <Link to="/signup">
                <button className="btn-signup" type="submit">
                  Sign Up Now!
                </button>
              </Link>
            </Form.Text>
          </Form>
        </div>
      </HomeContainer>
    </main>
  );
};

export default Login;

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  background: linear-gradient(
    0deg,
    rgba(231, 242, 247, 1) 0%,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 236, 240, 1) 100%
  );
  padding: 3rem;

  .home-content {
    align-content: center;
    width: 45%;
  }

  h1 {
    text-align: left !important;
    margin: 2rem 0;
    font-size: 2.3rem;
  }

  span {
    font-size: 2.4rem;
    color: #11be8b;
  }

  #heading-bone {
    margin-left: 8rem;
    transform: rotate(80deg) !important;
  }

  .icon {
    color: white;
    font-size: 4rem;
    transform: rotate(30deg);
  }

  .quote-name {
    color: gray;
    margin-left: 1rem;
    font-size: 0.8rem;
    font-style: italic;
    text-shadow: 4px 4px 33px rgba(0, 0, 0, 0.5);
  }

  .btn-find {
    font-family: "Alegreya Sans", sans-serif;
    padding: 0.6rem 1rem !important;
    margin: 2.6rem 0.3rem !important;
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

  p {
    font-family: "Alegreya Sans", sans-serif;
    font-size: 1.1rem;
  }

  .home-img {
    width: 33%;
    height: 90%;
    margin: 1rem;
    padding: 3rem 4rem;
    text-align: center !important;
    background-color: white !important;
    box-shadow: 2px 1px 89px 0px rgba(56, 101, 167, 0.4);
  }

  form {
    text-align: left !important;
  }

  .form-control {
    background: white;
  }

  .icon {
    color: #c7d2d9;
    font-size: 2.3rem;
    transform: rotate(0deg);
  }

  .btn-signup {
    background-color: #e5ecf0;
    font-family: "Alegreya Sans", sans-serif;
    padding: 0.6rem 0rem !important;
    text-decoration: none !important;
    border-radius: none;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    width: 80%;
    margin: -2rem 10% !important;
  }

  .btn-find {
    font-family: "Alegreya Sans", sans-serif;
    padding: 0.6rem 1rem !important;
    margin: 2rem 10% !important;
    margin-top: 4rem;
    text-decoration: none !important;
    border-radius: none;
    transition: ease-in-out 0.2s;
    cursor: pointer;
    width: 80%;
    background: linear-gradient(
      90deg,
      rgba(130, 246, 165, 1) 50%,
      rgba(147, 238, 169, 1) 100%
    );
  }

  .btn-signup:hover,
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

  @media only screen and (max-width: 1080px) {
    .btn-find {
      padding: 0.6rem 3rem !important;
    }

    .home-img {
      margin: 2rem 0;
      padding: 3rem 1rem;
    }
  }

  @media only screen and (max-width: 880px) {
    display: block;

    .home-content {
      width: 70%;
      margin: 3rem 13%;
    }

    .btn-find {
      padding: 0.6rem 2rem !important;
    }

    .home-img {
      margin: 4rem 23%;
      padding: 3rem 4rem;
      width: 50%;
    }
  }

  @media only screen and (max-width: 768px) {
    .home-content {
      width: 90%;
    }

    .btn-find {
      font-family: "Alegreya Sans", sans-serif;
      padding: 0.6rem 5rem !important;
      margin: 2.6rem 0.3rem !important;
    }

    .home-img {
      width: 60%;
      text-align: center;
      margin: 0 auto;
      padding: 3rem 1rem;
    }
  }

  @media only screen and (max-width: 500px) {
    display: block;

    .home-content {
      width: 92%;
    }

    .btn-find {
      font-family: "Alegreya Sans", sans-serif;
      padding: 0.6rem 2.4rem !important;
      margin: 2.6rem 0.3rem !important;
    }

    .home-img {
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }
  }
`;
