import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 460px;
  height: 60px;
  background: #85d3ca;
  border: none;
  padding: 15px 0;
  cursor: pointer;
  font-weight: 400;
  font-size: 24px;
  color: #ffffff;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    width: 95%;
  }

  @media screen and (max-width: 375px) {
    width: 90%;
  }

  &:hover {
    background: #85d3ca;
    opacity: 0.9;
    transform: scaleX(0.98);
  }
  &:focus {
    cursor: pointer;
  }
`;
