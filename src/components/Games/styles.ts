import styled from "styled-components";

export const Container = styled.div`
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
    border-bottom: 5px solid var(--blue-dark-4);
    padding: 0 1rem;
    margin-top: 3rem;
  }
`;

export const GamesDashBoard = styled.div`
  margin: 3rem 7rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
  grid-template-areas:
    "game1 game2 game3"
    "game1 game4 game4";
`;

export const SectionGame1 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: var(--gray);
  grid-area: game1;
`;
export const SectionGame2 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: var(--gray);
  grid-area: game2;
`;
export const SectionGame3 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: var(--gray);
  grid-area: game3;
`;
export const SectionGame4 = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: var(--gray);
  grid-area: game4;
`;

export const Info = styled.div`
  width: 680px;
  padding: 1rem;
  margin: 5rem auto 0;
  background-color: var(--dark-gray);
  border: 3px solid var(--blue);
  border-radius: 8px;

  span {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 1rem;
      color: #fff;
    }
  }

  p {
    color: var(--gray);
    font-size: 1.2rem;

    a {
      color: var(--light-blue-3);
    }
  }
`;
