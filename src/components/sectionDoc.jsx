import styled from "@emotion/styled";
import imgDoc from "../assets/documents.png";
import {BiFastForward} from "react-icons/bi";
import {ImLoop2} from "react-icons/im";
import {BsFileCodeFill} from "react-icons/bs";

const Container = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
`
const Image = styled.div`
display: flex;
width: 50%;
height: 50%;
box-sizing: border-box;
overflow: hidden; /* Corrige la propiedad a overflow */



  img {
     width: 100%;
     object-fit: cover;
  }

    @media (max-width: 999px) {
        width: 100%;
    }

`
const Information = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.2;
    margin-top: -5rem;
    padding: 0 2rem;

    h5{
        display: flex;
        align-items: center;
        font-size: 1rem;
        gap : 0.5rem;
    }

    @media (max-width: 999px) {
        max-width: 100%;
    }

`

const ButtonQuiz = styled.div`
    width: 200px;
    background: #818cf8;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    margin-bottom: 2rem;

`

function SectionDoc(){
    return(
        <Container>
            <Image>
                <img src={imgDoc} alt="" />
            </Image>
            <Information>
                <p style={{color: "#818cf8" , fontWeight:"900" , marginTop:"150px" , cursor:"pointer", borderBottom:"1px solid", width:"35px"}}>Crea</p>
                <h1>Suba tu información fácil</h1>

                <p>Te presentamos la nueva forma de estudiar con resúmenes
                    generados por la IA, cuestionarios lúdicos y asistentes virtuales.
                </p>

                <div>
                    <h5><BiFastForward/>Fast</h5>
                    <p style={{marginLeft:"1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio  laudantium! Sunt voluptatum sequi libero blanditiis adipisci ullam. Laboriosam, impedit earum!</p>
                    <h5><ImLoop2/>Flexible</h5>
                    <p style={{marginLeft:"1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio  laudantium! Sunt voluptatum sequi libero blanditiis adipisci ullam. Laboriosam, impedit earum!</p>
                    <h5><BsFileCodeFill/>Integrated</h5>
                    <p style={{marginLeft:"1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio  laudantium! Sunt voluptatum sequi libero blanditiis adipisci ullam. Laboriosam, impedit earum!</p>
                </div>

            <ButtonQuiz>
                Create a quiz for Free
            </ButtonQuiz>
            </Information>

        </Container>
    )
}

export default SectionDoc;