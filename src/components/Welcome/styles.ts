import styled from "styled-components";

export const WelcomeDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--darked);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#000, #141414);

  h1 {
    color: #fff;
    font-size: 1.5rem;
    border-bottom: 5px solid var(--blue-dark-4);
    padding: 0 1rem;
    margin-top: 3rem;
  }
`;
