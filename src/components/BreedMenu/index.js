import React from "react";
import styled from "styled-components";

const BreedMenu = () => {
  return (
    <BreedMenuEL>
      <div className="container">
        <h1>Search Pet</h1>
      </div>

      <div className="container">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </form>
      </div>
    </BreedMenuEL>
  );
};

export default BreedMenu;

const BreedMenuEL = styled.main`
  .breed-labels {
    width: 100%;
    text-align: left;
  }

  .dropdown-item {
    width: 100%;
    ${"" /* color:#767777; */}
    font-size:.9rem;
  }
  h1 {
    text-align: left;
    font-size: 1rem;
    ${"" /* background:#f2f6f9; */}
    border-radius:.5rem;
    border: 1px solid #e6ebee;
    width: 100%;
    margin: 1rem 0;
    padding: 0.3rem;
    line-height: 2rem;
    font-weight: bold;
  }
`;
