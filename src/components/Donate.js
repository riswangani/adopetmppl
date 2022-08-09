import React, { useState } from "react";
import bgDonate from "../assets/dog-bg-2.jpg";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Donate = () => {
  const [formState, setFormState] = useState({
    nama: "",
    size: "",
    weight: "",
    height: "",
    born: "",
    story: "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    alert("Klik tombol sign up");
    console.log(formState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <DonateContainer style={{ minHeight: "100vh", maxWidth: "100%" }}>
      <div className="home-content">
        <h2>Thank you for your donation!</h2>
        <p>
          The AdoptMe is a national leader in animal rescue and protection,
          working tirelessly to put an end to animal abuse and neglect. As an
          AdoptMe you can fight cruelty and give animals a second chance at life
          nationwide . Your donation is an easy way to make a difference for
          animals.
        </p>

        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Nama</Form.Label>
            <Form.Control
              type="text"
              autoComplete="nama"
              name="nama"
              className="form-input"
              id="nama"
              value={formState.nama}
              placeholder="Enter nama"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              autoComplete="size"
              name="size"
              className="form-input"
              id="nama"
              value={formState.size}
              placeholder="Enter size"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Weight</Form.Label>
            <Form.Control
              type="text"
              name="weight"
              autoComplete="weight"
              className="form-input"
              id="weight"
              value={formState.weight}
              placeholder="Enter Weight"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Height</Form.Label>
            <Form.Control
              type="text"
              name="height"
              autoComplete="height"
              className="form-input"
              id="height"
              value={formState.height}
              placeholder="Enter Height"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Born</Form.Label>
            <Form.Control
              type="text"
              name="born"
              autoComplete="born"
              className="form-input"
              id="born"
              value={formState.born}
              placeholder="Enter Born"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Story</Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              rows={3}
              name="story"
              id="born"
              value={formState.story}
              onChange={handleChange}
            />
          </Form.Group>

          <button className="btn-find" type="submit">
            Submit
            <span className="shake-paw">
              <FontAwesomeIcon icon={faPaw} />
            </span>
          </button>
        </Form>
      </div>

      <div className="home-img" id="dog-picture-banner">
        <img src={bgDonate} alt="dog" />
      </div>
    </DonateContainer>
  );
};

export default Donate;

const DonateContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;

  .home-content {
    align-content: center;
    width: 50%;
    padding: 2rem 8rem;
    margin: 2rem;
  }

  h2 {
    margin: 2rem 0;
    font-family: "Alegreya Sans", sans-serif;
    font-weight: normal;
    color: #11be8b;
  }

  p {
    font-family: "Alegreya Sans", sans-serif;
    font-size: 1.1rem;
    margin: 3rem 0;
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

  .home-img {
    width: 50%;
    align-items: left;
    text-align: center !important;
  }

  img {
    width: 100%;
  }

  @media only screen and (max-width: 1080px) {
    .home-content {
      align-content: center;
      width: 50%;
      padding: 1rem 5rem;
      margin: 2rem;
    }
  }

  @media only screen and (max-width: 820px) {
    display: block;

    .home-content {
      width: 90%;
      padding: 1rem 8rem;
    }

    .home-img {
      width: 100%;
    }
  }

  @media only screen and (max-width: 620px) {
    display: block;

    .home-content {
      padding: 1rem 5rem;
    }
  }

  @media only screen and (max-width: 420px) {
    display: block;

    .home-content {
      width: 90%;
      padding: 1rem 2rem;
    }
  }
`;

{
  /* <>
<input
  type="text"
  placeholder="Name"
  style={{
    border: "solid 1px grey",
    padding: "8px 20px",
    borderRadius: "5px",
    margin: " 1rem 0 ",
    width: "90%",
  }}
></input>

<button
  role="link"
  onClick={handleClick}
  style={{
    border: "none",
    padding: ".5rem 3rem",
    color: "black",
    margin: " 1rem 0 ",
    width: "90%",
    boxShadow: "2px 1px 39px 0px rgba(186,201,227,0.5)",
    background:
      "linear-gradient(90deg,rgba(130,246,165,1) 50%,rgba(147,238,169,1) 100%)",
  }}
>
  Pay
</button>
</> */
}
