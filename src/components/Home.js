import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import bgLogo from "../assets/dog-bg-5.jpg";
import { faBone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <HomeContainer>
      <div className="home-content">
        <h2 className="icon icon-bone">
          <FontAwesomeIcon icon={faBone} />
        </h2>

        <h1>
          Don't Buy<span> Adopt</span>
        </h1>

        <p>
          "Before you get a dog, you can't quite imagine what living with one
          might be like; afterward, you can't imagine living any other way."
          <span className="quote-name">
            <br></br>Caroline Knapp
          </span>
        </p>

        <p>
          "If you don't own a dog, at least one, there may not necessarily be
          anything wrong with you, but there may be something wrong with your
          life."
          <span className="quote-name">
            <br></br> RogerCaras
          </span>
        </p>

        <Link to="/dogs">
          <button className="btn-find">
            Find a pet
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

        <img
          src={bgLogo}
          alt="dog"
          style={{ backgroundColor: "rgb(231,242,247)", opacity: "1" }}
        />
      </div>
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(
    0deg,
    rgba(231, 242, 247, 1) 0%,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 236, 240, 1) 100%
  );

  div {
    margin: 0 3rem;
    padding: 0 3rem;
  }

  .home-content {
    align-content: center;
    width: 40%;
  }

  h1 {
    text-align: left !important;
    margin: 2rem 0;
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
    padding: 0.6rem 5rem !important;
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

  p {
    font-family: "Alegreya Sans", sans-serif;
    font-size: 1.1rem;
  }

  .shake-paw {
    color: white;
    align-self: right;
    margin-left: 1rem;
  }

  .home-img {
    width: 55%;
    margin: 2rem;
    padding: 2rem;
    align-items: left;
    text-align: center !important;
  }

  img {
    width: 60%;
    box-shadow: 2px 1px 51px 32px rgba(255, 255, 255, 1);
  }

  .icon {
    color: #c7d2d9;
    font-size: 3rem;
    transform: rotate(-20deg);
    margin-left: -15rem;
  }

  @media only screen and (max-width: 1080px) {
    .home-content {
      .btn-find {
        padding: 0.6rem 3rem !important;
      }
    }

    .home-img {
      margin: 2rem 0;
      padding: 2rem 0;
    }

    img {
      height: 70%;
      width: 90%;
    }
  }

  @media only screen and (max-width: 880px) {
    .btn-find {
      padding: 0.6rem 2rem !important;
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;

    div {
      padding: 3rem 1rem;
    }

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
    }
  }

  @media only screen and (max-width: 400px) {
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
      width: 60%;
      text-align: center;
      margin: 0 auto;
    }
  }
`;
