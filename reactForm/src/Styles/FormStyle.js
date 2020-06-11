import styled from "styled-components";

import devices from "../Utils/devices";

export const ShortInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3.5rem;
`;

export const FormContainer = styled.div`
  justify-content: center;

  .form-card-container {
    display: flex;
    height: auto;
    width: 26rem;
    margin-top: 20px;

    .message-container {
      width: 60%;
      height: 5px;
      align-items: center;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      background: #0097cd;

      .form-title {
        color: white;
        margin: 0;
        font-size: 1.6rem;
      }
    }

    .form-container {
      height: 100%;
      width: 100%;

      .form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 0.5rem 0.5rem 0 0.5rem;
      }

      .input-container {
        width: 100%;
        height: 3.5rem;
      }

      .short-input {
        width: 60%;
      }
      .shorter-input {
        width: 30%;
      }

      #short-input-one {
        margin-right: 1rem;
      }
    }
    .form-button-container {
      margin: 0;
    }
  }
`;

export const StyledButton = styled.button`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 50%;
  padding: 0.5em;
  border: none;
  font-size: 1rem;
  text-align: center;
  transition: ease-out 0.1s;
  background: #0097cd;
  color: white;

  :hover {
    cursor: pointer;
    transition: ease-in 0.1s;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }

  :focus {
    outline: none;
    opacity: 0.8;
  }
`;
