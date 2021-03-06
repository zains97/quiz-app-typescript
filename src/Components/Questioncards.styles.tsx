import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 2vw;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3 ease;
  ::hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    font-size: 2vh;
    font-weight: bold;
    width: 100%;
    height: 40px;
    margin: 5px 0px;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg,#56ffa4, #59bc86)"
        : !correct && userClicked
        ? "linear-gradient(90deg,#ff5656, #c16868)"
        : "linear-gradient(90deg,#56ccff, #6eafb4)"};
    border: none;
    border-radius: 10px;
    color: white;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    :hover {
      background: ${({ correct, userClicked }) =>
        correct ? "#5ec40a" : !correct && userClicked ? "tomato" : "#048cc7"};
    }
  }
`;
