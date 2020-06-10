import styled from "styled-components";

import devices from "../Utils/devices";

export const ShortInputContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 4rem;
`;

export const FormContainer = styled.div`
  justify-content: center;

  .form-card-container {
    height: 32rem;
    width: 25rem;

    .form {
      padding-top: 2rem;
    }

    .message-container {
      text-align: center;
      margin-bottom: 0;
    }

    .short-input {
      width: 49%;

      .form-input {
        width: 84%;
      }
    }

    #short-input-one {
      margin-right: 1rem;
    }

    .form-button-container {
      margin: 0;
    }
  }
`;
