import styled from "styled-components"

export const ButtonStyled  = styled.button`
width: 460px;
height: 60px;
background: #2ED2C9;
border: none;
padding: 15px 0;
cursor: pointer;
font-weight: 400;
font-size: 24px;
color: #FFFFFF;
 opacity: 0.5;
transition: all 0.3s ease-in-out;

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

  

&:hover {
    background: #239e97;
    
    opacity: 0.9;
    transform: scaleX(0.98);
 
}
&:focus {
  cursor: pointer;
}

`