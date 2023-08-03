import styled from "@emotion/styled";
import { FiZap } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import {FaUserAlt} from "react-icons/fa";

const Container = styled.div`
    width: 100%;
    background: #020113;
    display: flex;
    justify-content: right;
`;

const Nav = styled.div`
    background: #020113;
    width:  90%;
    display: flex;
    justify-content: space-between;
    height: 4rem;
    flex-shrink: 0;
    align-items: center;
`

const ButtonUp = styled.div`
    display: flex;
    background: #FACC15;
    border-radius: 5px;
    width: 7.375rem;
    height: 2.6875rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 0.5rem;
`

const Left = styled.div`
    display: flex;

    a{
        color: #fff;
        text-decoration: none;
        padding: 0 20px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.5;
        margin: 0 10px;
    }
`;

const Rigth = styled.div`
    display: flex;
    gap: 1rem;
`;

const User = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    background: #fff;
    border-radius: 624.9375rem;
    background: #818CF8;
    display: flex;
    justify-content: center;
    align-items: center;
`

function NavBar(){
    return(
        <Container>

            <Nav>

            <Left>
                <a href="">Features</a>
                <a href="">ForBussiness</a>
                <a href="">ForEducation</a>
                <a href="">Resources</a>
            </Left>

            <Rigth>
                <ButtonUp><FiZap/>Upgrade</ButtonUp>
                <ButtonUp style={{background:"#818CF8" , color:"#fff"}}><AiOutlinePlus/>Create Quiz</ButtonUp>
                <ButtonUp style={{background:"#020113" , color:"#ffff"}}><VscBook/>Library</ButtonUp>
                <User><FaUserAlt/></User>
            </Rigth>

            </Nav>
        </Container>
    )
}

export default NavBar;