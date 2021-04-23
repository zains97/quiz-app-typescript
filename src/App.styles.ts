import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import backgoundImage from "./images/quiz-background.jpg";

export const GlobalStyles = createGlobalStyle`
   html{
       height:100%;
    }
body{
    background-image: url(${backgoundImage});
    background-size: cover;
    margin:0;
    padding:0;
    display:flex;
    justify-content:center;
}
*{
    box-sizing:border-box;
    font-family:"Catamaran",sans-serif
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: white;
    font-weight: bold;
  }
  .score {
    color: white;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: "Roboto", sans-serif;
    background-image: linear-gradient(45deg, #87a3ff, #dadff0);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 1px #0085a3);
    font-size: 8vh;
    font-weight: bolder;
    text-align: center;
    margin: 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, white, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
