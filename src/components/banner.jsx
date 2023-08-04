import styled from "@emotion/styled";
import imageOne from "../assets/laptop.png";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const BoxLeft = styled.div`
    max-width: 500px;
    min-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const BoxRigth = styled.div`
max-width: 500px;
min-width: 40%;
  display: flex;
  height: 50%;
  box-sizing: border-box;
  overflow: hidden; /* Corrige la propiedad a overflow */


  
    img {
       width: 100%;
       object-fit: cover;
    }
`;

const ContainerBox = styled.div`

  margin-left: 20%;

  h1 {
    font-size: 3.5rem;
    line-height: 1.2;
    color: #000;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.2;
    color: #000;
    margin-bottom: 1rem;
  }
`;

const ParagraphBlue = styled.div`
  font-size: 1.2rem;

  p {
    color: #818cf8;
  }
`;

const Button = styled.div`

  background: #818cf8;
  color: #fff;
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
  cursor: pointer;
  
`;

const ButtonMore = styled.div`

  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: .9rem;
  cursor: pointer;
  
`;

function Banner() {
  return (
    <>
    <Container>
      <BoxLeft>
        <ContainerBox>
          <h1>Ya no abandones los estudios por falta de tutor</h1>
          <p>Servicio de tutoria academica personalizada</p>

          <p>
            Convierte con tu felicidad cualquier video, documento o URL en un
            curso interactivo con asistente inteligente. Perfecto para empresas,
            profesionales y estudiantes
          </p>

          <ParagraphBlue>
            <p>Potenciado por Inteligencia Artificial</p>
          </ParagraphBlue>

          <Button>Crea un tutor gratis</Button>

          <ButtonMore>Saber mas</ButtonMore>
        </ContainerBox>
      </BoxLeft>

      <BoxRigth>
        <img src={imageOne} alt="" />
      </BoxRigth>
    </Container>

    </>
  );
}

export default Banner;
