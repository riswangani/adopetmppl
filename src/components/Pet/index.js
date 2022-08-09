import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pet = ({ image, name, id }) => {
  return (
    <>
      <ImageEL>
        <Link to={`/pet/${id}`}>
          <img src={image} alt="pet img" style={{ width: "100%" }} />
        </Link>
        <h4>{name}</h4>
      </ImageEL>
    </>
  );
};
export default Pet;

const ImageEL = styled.article`
  img {
    box-shadow: 2px 1px 17px 3px rgba(128, 144, 170, 0.5);
    transition: ease-in-out 0.3s;
  }
  img:hover {
    box-shadow: 2px 1px 7px -10px rgba(128, 144, 170, 0.75);
    transform: scale(1.04);
  }
`;
