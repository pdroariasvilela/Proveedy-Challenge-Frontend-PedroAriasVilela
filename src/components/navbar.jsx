import styled from "@emotion/styled";
import { FiZap } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  background: #020113;
`;

const Nav = styled.div`
  background: #020113;
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  flex-shrink: 0;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1125px) {
    justify-content: flex-end;
  }
`;

const ButtonUp = styled.div`
  display: flex;
  background: #facc15;
  border-radius: 5px;
  width: 7.375rem;
  height: 2.6875rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;

  @media (max-width: 1125px) {
    display: none;
  }
`;

const Left = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    color: #fff;
    text-decoration: none;
    padding: 0 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    margin: 0 10px;
  }

  @media (max-width: 1125px) {
    display: none;
  }
`;

const Rigth = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 1125px) {
    gap: 0.5rem;
  }
`;

const User = styled.div`
  margin-right: 3rem;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  background: #fff;
  border-radius: 624.9375rem;
  background: #818cf8;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1125px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;

  @media (max-width: 1125px) {
    display: block;
  }
`;

function NavBar() {
  return (
    <Container>
      <Nav>
        <Left>
          <a href="">Features</a>
          <a href="">ForBussiness</a>
          <a href="">ForEducation</a>
          <a href="">Resources</a>
        </Left>

        <Rigth>
          <ButtonUp>
            <FiZap />
            Upgrade
          </ButtonUp>
          <ButtonUp style={{ background: "#818CF8", color: "#fff" }}>
            <AiOutlinePlus /> Create Quiz
          </ButtonUp>
          <ButtonUp style={{ background: "#020113", color: "#ffff" }}>
            <VscBook /> My Library
          </ButtonUp>
          <User>
            <FaUserAlt />
          </User>
          <MenuIcon>☰</MenuIcon>
        </Rigth>
      </Nav>
    </Container>
  );
}

export default NavBar;
