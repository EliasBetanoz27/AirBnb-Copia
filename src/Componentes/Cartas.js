/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styled from "styled-components";
import Fuse from "fuse.js";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columnas */
  gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr); /* 4 columnas */
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr); /* 4 columnas */
  }
`;
const Box = styled.div`
  width: 35%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  @media (max-width: 500px) {
    font-size: 15px;
    width: 90%;
  }
`;

const ContainerCart = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 10px 10px;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.09);
`;

const Img = styled.img`
  border-radius: 5%;
  width: 100%;
  height: 280px;
`;

const Informacion = styled.div`
  height: 100%;
  padding: 0px 10px;
  display: row;
`;

const Lugar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 15px;
  justify-content: space-between;
  margin: 0;
`;

const Check = styled.div`
  display: flex;
  flex-direction: row;
`;

const Con = styled.div``;
const Search = styled.input`
  box-shadow: 3px 1px 4px 3px rgba(71, 71, 71, 0.22);
  width: 90%;
  margin: 0 auto;
  height: 100%;
  text-align: center;
  border-radius: 30px;
  outline: none;
  border: none;

  :hover {
    box-shadow: 3px 1px 4px 3px #c2dbfe;
    transform: scale(1.009);
  }
  @media (max-width: 500px) {
    font-size: 15px;
    width: 100%;
  }
`;

const NavbarContainer2 = styled.div`
  background-color: white;
  width: auto;
  height: 80px;
  display: flex;
  justify-content: center;
  gap: 20%;
  align-items: center; /* Centra verticalmente los elementos */
  box-shadow: 2px 0px 1px 2px rgba(0, 0, 0, 0.09);
  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`;

const A = styled.a`
  color: black;
  text-decoration: none;
`;
const imageStyle = {
  borderRadius: "20%",
};

const Button = styled.button`
  background-color: white;
  border: none;
  position: static;
  :hover {
    background-color: whitesmoke;
    border-radius: 15px;
  }
`;
const Links2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px; /* Espacio entre los enlaces */
  color: black;
  cursor: pointer;
  padding: 0px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Cartas = () => {
  const datos = [
    {
      nombre: " Cancun Quintanarro,Mexico",
      calificacion: 4.3,
      vista: "Con vista al mar",
      fecha: "5-10 de sep.",
      precio: "$3,896 MXN ",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-37914529/original/4619bdce-dfdb-45ff-86f8-a8700cdae496.jpeg?im_w=720",
    },
    {
      nombre: " Tepic Nayarit,Mexico",
      calificacion: 4.5,
      vista: "Con vista al mar",
      fecha: "5-10 de sep.",
      precio: "$3,896 MXN ",
      img: "https://a0.muscache.com/im/pictures/dc1384fe-448c-4a9b-9266-8b32fe56f28f.jpg?im_w=720",
    },
    {
      nombre: " Santiago Ixcuintla Nayarit, Mexico",
      calificacion: 4.5,
      vista: "Con vista al mar",
      fecha: "5-10 de sep.",
      precio: "$3,896 MXN ",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-45091818/original/50bf36fb-7b79-4028-99bf-f04d75086323.jpeg?im_w=720",
    },
    {
      nombre: " Guadalajara Jalisco ,Mexico",
      calificacion: 4.7,
      vista: "Con vista al mar",
      fecha: "5-10 de sep.",
      precio: "$3,896 MXN ",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-15971473/original/4a97994a-9e1b-484b-9179-514db0c972b0.jpeg?im_w=720",
    },
    {
      nombre: " Puerto Escondido,Mexico",
      calificacion: 4.1,
      vista: "Con vista al mar",
      fecha: "5-10 de sep.",
      precio: "$3,896 MXN ",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-15971473/original/4a97994a-9e1b-484b-9179-514db0c972b0.jpeg?im_w=720",
    },
    {
      nombre: " Puerto Escondido,Mexico",
      calificacion: 4.2,
      vista: "Con vista al mar",
      fecha: "5-10 de sep.",
      precio: "$3,896 MXN ",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-15971473/original/4a97994a-9e1b-484b-9179-514db0c972b0.jpeg?im_w=720",
    },
    {
      nombre: " Puerto Escondido,Mexico",
      calificacion: 4.4,
      vista: "Con vista al mar",
      fecha: "5-10 de sep.",
      precio: "$3,896 MXN ",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-15971473/original/4a97994a-9e1b-484b-9179-514db0c972b0.jpeg?im_w=720",
    },
    {
      nombre: " Ruiz Nayarit,Mexico",
      calificacion: 4.4,
      vista: "Con vista al mar",
      fecha: "5-10 de sep.",
      precio: "$3,896 MXN ",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-15971473/original/4a97994a-9e1b-484b-9179-514db0c972b0.jpeg?im_w=720",
    },
    {
      nombre: " Puerto Vallarta,Mexico",
      calificacion: 4.6,
      vista: "Con vista al mar",
      fecha: "5-10 de sep.",
      precio: "$3,896 MXN ",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-15971473/original/4a97994a-9e1b-484b-9179-514db0c972b0.jpeg?im_w=720",
    },
  ];
  const options = {
    //      isCaseSensitive: false,
    //    includeScore: false,
    shouldSort: true,
    includeMatches: true,
    //  findAllMatches: false,
    minMatchCharLength: 2,
    //  location: 1,
    threshold: 0.2,
    distance: 100,
    //   useExtendedSearch: false,
    //   ignoreLocation: false,
    //   ignoreFieldNorm: false,
    fieldNormWeight: 2.0,
    keys: ["nombre", "calificacion", "vista", "fecha", "precio"],
  };

  const fuse = new Fuse(datos, options);

  let [Valor, setCambio] = useState("");

  const Cambiar = (e) => {
    setCambio(e);
  };

  const results = fuse.search(Valor);
  //si la variable Valor tiene un valor (se ingreso una busquedab )
  //mostramos los resultados de la variable result
  // (:) si no se ingreso una busqueda, se muestran los array (datos)
  const Busqueda = Valor ? results.map((resultados) => resultados.item) : datos;
  return (
    <div>
      <NavbarContainer2>
        <img
          width={"100"}
          style={imageStyle}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
        ></img>

        <Box>
          <Search
            type="text"
            placeholder="&#128269; Buscar"
            value={Valor}
            onChange={(e) => Cambiar(e.target.value)}
          ></Search>
        </Box>

        <Links2>
          <Button>
            <A href="#">Pon tu casa en Airbnb</A>
          </Button>

          <Button>
            <A href="#">
              {" "}
              <img
                width={"20"}
                src="https://img.pikbest.com/element_our/20230227/bg/eac465d901da2.png!w700wp"
              ></img>
            </A>
          </Button>

          <Button>
            <A href="#">
              <img
                width={"29"}
                src="https://img.freepik.com/vector-premium/icono-perfil-personas_718801-114.jpg?w=740"
              ></img>
            </A>
          </Button>
        </Links2>
      </NavbarContainer2>

      <Container>
        {Busqueda.map((elemento, index) => (
          <ContainerCart key={index}>
            <Con>
              <Img src={elemento.img} />
              <Informacion>
                <Lugar>
                  <p>
                    <b>{elemento.nombre}</b>
                  </p>
                  <Check>
                    <input type="checkbox" />
                    <p>
                      <b>{elemento.calificacion}</b>
                    </p>
                  </Check>
                </Lugar>
                {elemento.vista}
                <br></br>
                {elemento.fecha} <br></br>
                <b>{elemento.precio}</b> noche
              </Informacion>
            </Con>
          </ContainerCart>
        ))}
      </Container>
    </div>
  );
};

export default Cartas;
