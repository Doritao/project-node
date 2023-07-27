import styled from "styled-components";

export const ContainerItens = styled.div`
  /* height: 100vh; */
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.6) 0.01%,
    rgba(255, 255, 255, 0.15) 100%
  );
  min-height: calc(100vh - 170px);

  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  ${(props) =>
    props.isBLur &&
    `
  
  backdrop-filter: blur(45px);
   min-height: calc(100vh - 170px);
  `}
`;
