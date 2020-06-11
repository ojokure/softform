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
`;
