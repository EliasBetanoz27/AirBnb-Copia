import styled from "styled-components";
import "./App.css";
import Navbar from "./Componentes/Navbar.js";
import Cartas from "./Componentes/Cartas";

function App() {
  const ContainerFirst = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const Main = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <ContainerFirst>
      <Navbar />

      <Main>
        <Cartas />
      </Main>
    </ContainerFirst>
  );
}

export default App;
