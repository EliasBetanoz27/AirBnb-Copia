/* eslint-disable jsx-a11y/alt-text */

import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  margin: 0;

  width: 100%;
  height: auto;
  box-sizing: border-box;
`;
const NavbarContainer = styled.div`
  background-color: #efefeb;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between; /* Alinea los elementos a los extremos */
  align-items: center; /* Centra verticalmente los elementos */
  @media (max-width: 500px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 18px;
  padding: 0px 10px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0 70px;
  color: black;
  justify-content: center;
`;
const A = styled.a`
  color: black;
  text-decoration: none;
`;
const imageStyle = {
  borderRadius: "20%",
};

// const Icon = styled.div`
// display: flex;
// padding: 0px 1px;
// cursor: pointer;
// justify-content: center;
// flex-direction: row;
// `;

const Navbar = () => {
  return (
    <Container>
      <NavbarContainer>
        <Title>
          <p>
            <b>Airbnb Habitaciones y +50 novedades</b>
          </p>
        </Title>

        <Links>
          <img
            width={"60"}
            style={imageStyle}
            src="https://a0.muscache.com/im/pictures/420c6e43-7896-4617-9ff4-ad05eb1f03f8.jpg?im_q=highq&im_w=240"
          ></img>
          <A href="#">Video Habitaciones</A>|<A href="#">Mas Informacion</A>
        </Links>
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
