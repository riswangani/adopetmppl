import React from "react";
import Pet from "../Pet/index";
import dogie from "../../assets/images/0.jpg";

const PetsList = () => {
  return (
    <main id="breeds">
      <div className="container mt-20">
        <div className="flex-container">
          <Pet name="Guk Guk Dogie" image={dogie} id="123" />
          <Pet name="Guk Guk Dogie" image={dogie} id="123" />
          <Pet name="Guk Guk Dogie" image={dogie} id="123" />
          <Pet name="Guk Guk Dogie" image={dogie} id="123" />
        </div>
        <h3>No Pets in the data</h3>
      </div>
    </main>
  );
};
export default PetsList;
