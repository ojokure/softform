import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .navigation-container {
    width: 100%;
  }

  .navigation {
    width: 100%;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);

    .logo {
      padding: 0;
    }

    .list-items-container .list-items .list-item a {
      color: #9b9b9b;

      &:hover {
        opacity: none;
      }
    }
  }

  .content-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .form-card-container {
    background: white;
    height: 33rem;
    width: 22em;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;

    .message-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #0097cd;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      padding: 1.8rem 0;
      margin-bottom: 0.8rem;
    }

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
      height: 4rem;
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
        /* box-shadow: 0 2px 4px #d3d3d3; */
      }
    }
  }
`;
