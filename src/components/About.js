import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgLogo from "../assets/dog-bg.jpg";
import { faBone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <HomeContainer>
      <div className="home-img">
        <h2 className="icon icon-bone">
          <FontAwesomeIcon size="sm" icon={faBone} />
        </h2>

        <img
          src={bgLogo}
          alt="two dogs"
          style={{ backgroundColor: "rgb(231,242,247)", opacity: ".8" }}
        />
      </div>
      <div className="home-content">
        <h2 className="icon icon-bone">
          <FontAwesomeIcon size="sm" icon={faBone} />
        </h2>
        <h1>
          Who<span>We</span> Are
        </h1>
        <p>
          The Shelter Pet Project is the result of a collaborative effort
          between two leading animal welfare groups, the Humane Society of the
          United States and Maddie’s Fund, and the leading producer of public
          service advertising (PSA) campaigns, The Ad Council.
        </p>

        <p>
          Our goal is to make shelters the first place potential adopters turn
          when looking to get a new pet, ensuring that all healthy and treatable
          pets find loving homes. We do this by breaking down misconceptions
          surrounding shelter pets and celebrating the unique bond between every
          shelter pet and parent.
        </p>

        <Link to="/pets">
          <button className="btn-find">
            More
            <span className="shake-paw">
              <FontAwesomeIcon icon={faPaw} />
            </span>
          </button>
        </Link>
      </div>
    </HomeContainer>
  );
};

export default About;

const HomeContainer = styled.div`
 min-height:100vh;
 display:flex;
 justify-content:space-between;
  background: rgb(231,242,247);
  background: linear-gradient(0deg, rgba(231,242,247,1) 0%, rgba(255,255,255,1) 40%, rgba(229,236,240,1) 100%);
 div{
   margin:0 2rem;
   padding:3rem;

 }
 
  .home-content{
    align-content:center;
    width:35%;
      h1{
        text-align:left !important;
        margin:2rem 0;
        span{
          font-size:2.4rem;
          color: #11be8b;
          margin:0 .6rem;
          
        }
       
      }
      #heading-bone{
          margin-left:8rem;
          transform:rotate(80deg)!important;
        }
      .icon{
        color:white;
        font-size:4rem;
        transform:rotate(30deg);

      }
      .quote-name{
        color:gray;
        margin-left:1rem;
        font-size:.8rem;
        font-style: italic;
        text-shadow: 4px 4px 33px rgba(0,0,0,0.5);

      }
      .btn-find{
        font-family: "Alegreya Sans", sans-serif;
        padding:.6rem 5rem !important;
        margin:2.6rem .3rem !important;
        text-decoration: none !important;
        border-radius:none;
        transition:ease-in-out .2s;
        cursor:pointer;
        background: rgb(130,246,165);
        background: linear-gradient(90deg, rgba(130,246,165,1) 50%, rgba(147,238,169,1) 100%);
        box-shadow: 2px 1px 39px 6px rgba(186,201,227,0.55);
       
      }
      .btn-find:hover{
        color:white;
          box-shadow: 2px 1px 9px 0px rgba(186,201,227,0.75);
          transform:scale(1.01);
          background: rgb(130,246,165);
          background: linear-gradient(90deg, rgba(130,246,165,1) 50%, rgba(147,238,169,1) 100%);
        }
      p{
       font-family: "Alegreya Sans", sans-serif;
       font-size:1.1rem;

      }
  }




   
 }
 .home-img {
  width:55%;
  margin:2rem;
  padding:2rem;
  align-items:left;
   text-align:center !important;
  

    img{
      width:60%;
      box-shadow: 2px 1px 51px 10px rgba(255,255,255,0.95);
    }
    .icon{
        color: #c7d2d9;
        font-size:3rem;
        transform:rotate(-20deg);

      }
 }
 @media only screen and (max-width: 768px){
  display:block;
  div{
   padding:3rem 1rem;

 }
  .home-content{
    width:90%;
    .btn-find{
        font-family: "Alegreya Sans", sans-serif;
        padding:.6rem 5rem !important;
        margin:2.6rem .3rem !important;
        }
  }
  .home-img{
    width:90%;
    text-align:center;
    margin:0 auto;
      
    img{
      height:90%;
      width:90%;
    }
  }      
}
  

`;
