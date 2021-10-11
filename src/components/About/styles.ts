import styled from "styled-components";

export const AboutDiv = styled.div`
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
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 7rem;
  align-items: center;
  margin: 1rem 5rem;
`;

export const Description = styled.aside`
  display: grid;

  h2 {
    color: #fff;
    text-align: center;
    border-bottom: 5px solid var(--blue-dark-4);
    padding: 0 1rem;
  }

  p {
    font-size: 1rem;
    color: var(--gray);
    text-align: justify;
  }

  div {
    margin-left: 2rem;
  }
`;

export const Illustrations = styled.aside`
  div {
    width: 100%;
    height: 420px;
    background: var(--gray);
    box-shadow: 8px 10px 10px 0 #000;
  }
`;
