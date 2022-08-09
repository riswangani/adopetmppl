import React from "react";
import PetsList from "./PetList";
import BreedMenu from "./BreedMenu";
import styled from "styled-components";

const Pets = () => {
  return (
    <PetsContainer>
      <div className="filter-section">
        <BreedMenu />
      </div>
      <div className="list-section">
        <PetsList />
      </div>
    </PetsContainer>
  );
};

export default Pets;

const PetsContainer = styled.div`
  min-height: 100vh;
  display: flex;

  .filter-section {
    width: 24%;
    border-right: 1px solid #c7d2d9;
    background: #f7f9f9;
    margin-top: -1rem;
    padding-top: 1rem;
  }

  .list-section {
    padding: 0 2rem;
  }

  @media only screen and (max-width: 968px) {
    .filter-section {
      width: 37%;
      border-right: 1px solid #c7d2d9;
    }
  }

  @media only screen and (max-width: 768px) {
    .filter-section {
      width: 45%;
      border-right: 1px solid #c7d2d9;
    }
  }

  @media only screen and (max-width: 600px) {
    display: block;

    .list-section {
      padding: 3rem;
    }

    .filter-section {
      width: 100%;
      border-bottom: 1px solid #c7d2d9;
    }
  }

  @media only screen and (max-width: 400px) {
    .list-section {
      padding: 1rem;
    }
  }
`;
