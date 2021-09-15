import styled from 'styled-components';

export const AboutDiv = styled.div`
  width: 100%;
  height: 800px;
  background: var(--darked);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient( #000, #141414);

  h1 {
    color: #fff;
    border-bottom: 5px solid var(--blue-dark-4);
    padding: 0 1rem;
  }
`;

export const Main = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 7rem;
  align-items: center;
  margin: 5rem auto;
`;

export const Description = styled.aside`
  h2 {
    color: #fff;
    text-align: center;
  }

  p {
    color: var(--gray);
  }
`;

export const Illustrations = styled.aside`
  div {
    width: 700px;
    height: 400px;
    background: var(--gray);
    box-shadow: 8px 10px 10px 0 #000;
  }
`;