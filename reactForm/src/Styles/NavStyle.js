import styled from "styled-components";
import devices from "../Utils/devices";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 11;

  @media ${devices.tablet} {
    flex-direction: column;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-left: 3.3rem;
    height: 4.2rem;

    @media ${devices.tablet} {
      margin: 0;
      padding: 1rem 0;

      div {
        display: none;
      }
    }
  }

  .logo-name {
    color: #4fad65;
    font-size: 2rem;

    @media ${devices.tablet} {
      margin: 0;
    }
  }

  .list-items-container {
    margin: 0 2.6rem;
    width: 30rem;

    @media ${devices.tablet} {
      width: 20rem;
    }

    .list-items {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding: 0;

      .list-item a {
        text-decoration: none;
        color: white;
        transition: ease-in 0.1s;
        font-size: 1.1rem;

        &:hover {
          color: #767676;
          padding-bottom: 0.3rem;
          border-bottom: 2px solid #767676;
          transition: ease-in 0.1s;
        }
      }
    }
  }
`;
