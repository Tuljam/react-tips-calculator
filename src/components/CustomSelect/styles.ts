import styled from "styled-components";

export const SelectStyled = styled.select`
border-radius:50px;
width: 456px;
height: 68px;
border: none;
text-align: center;
font-weight: 400;
font-size: 18px;
color: rgba(117, 108, 108, 0.6);
outline: none;
cursor: pointer;
  
   @media screen and (max-width: 768px) {
   /* width: 380px; */
      width: 100%;
  }

 @media screen and (max-width: 425px) {
   /* width: 300px; */
     width: 95%;
  }

   @media screen and (max-width:375px) {
   /* width: 270px; */
     width: 90%;
  }
`
