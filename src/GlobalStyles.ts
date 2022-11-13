import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
  body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
  font-weight: normal;
  font-style: normal;
}
#root {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
}
}`;


