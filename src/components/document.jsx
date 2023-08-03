import styled from "@emotion/styled";
import React, { useState } from "react";

const Container = styled.div`
  width: 80%;
  border: 1px solid red;
  height: 100vh;
  margin: 5rem auto;
  margin-right: 2rem;
  display: flex;
`;

const TitleDocument = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  height: 4rem;
  align-items: center;
  h1 {
    font-size: 1.5rem;
  }
`;

const Options = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-around;
  height: 2.5rem;
  align-items: center;
`;

const BoxButton = styled.div`
  width: 33.33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ active }) => (active ? "#fff" : "#011E48")};
  color: ${({ active }) => (active ? "#011E48" : "#fff")};
  border: 1px solid black;
  cursor: pointer;

  a {
    color: inherit;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    margin: 0 10px;
  }
`;

const SummaryText = styled.div`

  margin: 30px;
  height: 2.5rem;
  align-items: center;
  background: #011e48;
  color: #fff;
  display: flex;
  border-radius: 5px;
  cursor: pointer;

  p {
    margin-left: 1rem;
  }
`;

const ContainerLeft = styled.div`
    width: 30%;
    border: 1px solid red;
    height: 100vh;
    display: flex;
    flex-direction: column;

`;

const ContainerRigth = styled.div`
  width: 70%; /* Ajusta el ancho del ContainerRigth */
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto; /* Añade un scroll si el contenido es demasiado grande */
`;

const AccordionWrapper = styled.div`
  width: 100%;
`;

const AccordionLabel = styled.label`
  display: block;
  background: #011E48;
  color: #fff;
  padding: 0.5rem;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  display: none;
  background: #fff;
  color: #011E48;
  padding: 0.5rem;
  border: 1px solid #011E48;
`;

const AccordionToggle = styled.input`
  display: none;

  &:checked + ${AccordionLabel} + ${AccordionContent} {
    display: block;
  }
`;
    
function Document() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setActiveAccordion(accordionId);
  };

  return (

    <>
    <TitleDocument>
      <h1>Document</h1>
    </TitleDocument>
    <Container>
      <ContainerLeft>

        <Options>
          <BoxButton
            active={activeButton === 1}
            onClick={() => handleButtonClick(1)}
          >
            <a href="#">Global</a>
          </BoxButton>
          <BoxButton
            active={activeButton === 2}
            onClick={() => handleButtonClick(2)}
          >
            <a href="#">Temas</a>
          </BoxButton>
          <BoxButton
            active={activeButton === 3}
            onClick={() => handleButtonClick(3)}
          >
            <a href="#">Chat</a>
          </BoxButton>
        </Options>

        <SummaryText>
          <p>Resumen Completo</p>
        </SummaryText>
      </ContainerLeft>

      <ContainerRigth>
      <AccordionWrapper>
      <AccordionToggle type="checkbox" id="accordion1" checked={activeAccordion === 1} onChange={() => handleAccordionClick(1)} />
      <AccordionLabel htmlFor="accordion1">Título 1</AccordionLabel>
      <AccordionContent>Contenido del acordeón 1</AccordionContent>

      <AccordionToggle type="checkbox" id="accordion2" checked={activeAccordion === 2} onChange={() => handleAccordionClick(2)} />
      <AccordionLabel htmlFor="accordion2">Título 2</AccordionLabel>
      <AccordionContent>Contenido del acordeón 2</AccordionContent>

      <AccordionToggle type="checkbox" id="accordion3" checked={activeAccordion === 3} onChange={() => handleAccordionClick(3)} />
      <AccordionLabel htmlFor="accordion3">Título 3</AccordionLabel>
      <AccordionContent>Contenido del acordeón 3</AccordionContent>
      </AccordionWrapper>
        
      </ContainerRigth>
    </Container>
    </>
  );
}

export default Document;

{
  /* <Details>
        <summary>Titulo</summary>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic amet
          excepturi perspiciatis fuga deserunt quis natus vel ipsa voluptate at!
        </p>
      </Details> */
}
