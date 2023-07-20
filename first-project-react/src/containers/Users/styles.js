import styled from "styled-components";
import Background from "../../Assets/bg image2.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Imagem = styled.img`
  margin-top: 30px;
`;



export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 120px;
  background: transparent;
  border-radius: 14px;
  border: 1px solid #fff;

  color: #ffffff;

  cursor: pointer;
  text-decoration: none;
  font-size: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  font-style: normal;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }

  img {
    transform: scaleX(-1);
  }
`;

export const User = styled.li`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 342px;
  height: 58px;
  outline: none;
  border: none;

  color: #fff;
  /* font-family: Roboto; */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  p {
    color: #fff;
    /* font-family: Roboto; */
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
