import styled from "styled-components";

export const FormContainer = styled.div`
  .form-card-container {
    display: flex;
    background: white;
    width: 15em;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    width: 26rem;
    margin-top: 20px;
    justify-content: center;

    .message-container {
      display: flex;
      width: 100%;
      height: 5px;
      justify-content: center;
      align-items: center;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      background: #0097cd;
      margin-bottom: 1.3rem;
      padding: 1.8rem 0;

      .form-title {
        color: white;
        margin: 0;
        font-size: 1.6rem;
      }
    }

    .form-container {
      height: 80%;
      width: 100%;
      justify-content: flex-start;

      .form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 1rem 2rem 0 2rem;
      }

      .input-container {
        width: 100%;
        height: 3.2rem;
        text-align: center;
      }

      .form-input {
        border: none;
        text-align: center;
        justify-content: center;
        background: #f4f4f4;
        border-radius: 2rem;
        width: 60%;
        padding: 0.5rem;
        padding-bottom: 0px;
        font-size: 1rem;

        &:hover {
          box-shadow: 0 2px 4px #d3d3d3;
        }
      }
    }
  }
`;

export const StyledButton = styled.button`
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 50%;
  padding: 0.5em;
  margin-bottom: 20px;
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
