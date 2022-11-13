import styled from "styled-components";
export const FormStyled = styled.form`

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 15px;
  justify-content: center;
  align-items: center;
  background-color: #eaf2f2;


  @media screen and (max-width: 743x)  {
    grid-row-gap: 18px;
  }

   @media screen and (max-width: 425px) {
    grid-row-gap: 15px;
  } 
  @media screen and (max-width:375px) {
   grid-row-gap: 10px;
  }

  h1 {
    font-weight: 400;
    text-align: center;
    font-size: 40px;

    
  @media screen and (max-width: 743px) {
    font-size: 24px;
  } 
 

 @media screen and (max-width: 425px) {
    font-size: 24px;
  }

  }

  h6 {
      text-align: center;
      font-weight: 400;
      font-size: 32px;
      color: #756c6c;
        @media screen and (max-width: 743px)  {
    font-size: 24px;
  } 

 @media screen and (max-width: 425px) {
    font-size: 24px;
  }

   @media screen and (max-width: 375px) {
    font-size: 22px;
  }
    }

   
   p {
      font-weight: 500;
      font-size: 24px;
      color: #000000;
    }
`;
