import styled from "styled-components";
import Background from "../../Assets/bg image1.svg"

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




export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  font-family: Roboto;
  margin-left: 25px;
  color: #eee;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 34px;

  border: none;
  outline: none;

  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
