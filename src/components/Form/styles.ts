import styled from "styled-components";
export const FormStyled = styled.form`
  /* min-width: 55%; */
  max-width: 370px;
  width: 95%;
  display: grid;
  gap: 45px;

  @media screen and (max-width: 743x) {
    gap: 40px;
  }

  @media screen and (max-width: 425px) {
    gap: 40px;
  }
  @media screen and (max-width: 375px) {
    gap: 40px;
  }

  .form__title {
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

  .form__subtitle  {
    text-align: center;
    font-weight: 400;
    font-size: 32px;
    color: #756c6c;
    @media screen and (max-width: 743px) {
      font-size: 24px;
    }

    @media screen and (max-width: 425px) {
      font-size: 24px;
    }

    @media screen and (max-width: 375px) {
      font-size: 22px;
    }
  }

  .form__total {
    font-weight: 500;
    font-size: 24px;
    color: #000000;
    padding: 5px;
  }
`;
