import styled from "@emotion/styled";
import {BsRobot} from "react-icons/bs";

const Contenedor = styled.div`
    background: #f9f7f7;
    width: 100px;
    margin-top: 5rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    flwx-wrap: wrap;
    h2{ 
        margin-top: 4rem;
        text-align: center;
    }
`

const ContainerBoxs = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const BoxItem = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem;
    flex-direction: column;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

`
const Info = styled.div`

`

const LinkInfo = styled.div`
    p{
        color: #818cf8;
    }
`

function SectionInfo(){
    return(
        <Contenedor>
            <h2>Usa inteligencia Artificial para mejorar tu aprendizate</h2>
            <ContainerBoxs>
            <BoxItem>
                    <Title>
                        <div style={{width:"60px", height:"60px" ,background:"#818cf8", borderRadius:"50px", fontSize:"2.5rem" , display:"flex" , justifyContent:"center",alignItems:"center"}}>
                        <BsRobot/>
                        </div>
                        <p>Sube tu informacion</p>
                    </Title>
                    <Info>
                        <p>Educativa procesa PDF, MP4, MP3.</p>
                        <p>Crea tu libreria de documentos que</p>
                        <p>alimentaran a tu tutor inteligente</p>                      
                    </Info>
                    <LinkInfo>
                        <p>Empezar aqui</p>
                    </LinkInfo>
                </BoxItem>

                <BoxItem>
                    <Title>
                        <div style={{width:"60px", height:"60px" ,background:"#818cf8", borderRadius:"50px", fontSize:"2.5rem" , display:"flex" , justifyContent:"center",alignItems:"center"}}>
                        <BsRobot/>
                        </div>
                        <p>Sube tu informacion</p>
                    </Title>
                    <Info>
                        <p>Educativa procesa PDF, MP4, MP3.</p>
                        <p>Crea tu libreria de documentos que</p>
                        <p>alimentaran a tu tutor inteligente</p>                      
                    </Info>
                    <LinkInfo>
                        <p>Empezar aqui</p>
                    </LinkInfo>
                </BoxItem>

                <BoxItem>
                    <Title>
                        <div style={{width:"60px", height:"60px" ,background:"#818cf8", borderRadius:"50px", fontSize:"2.5rem" , display:"flex" , justifyContent:"center",alignItems:"center"}}>
                        <BsRobot/>
                        </div>
                        <p>Sube tu informacion</p>
                    </Title>
                    <Info>
                        <p>Educativa procesa PDF, MP4, MP3.</p>
                        <p>Crea tu libreria de documentos que</p>
                        <p>alimentaran a tu tutor inteligente</p>                      
                    </Info>
                    <LinkInfo>
                        <p>Empezar aqui</p>
                    </LinkInfo>
                </BoxItem>
            </ContainerBoxs>
        </Contenedor>
    )
}

export default SectionInfo;