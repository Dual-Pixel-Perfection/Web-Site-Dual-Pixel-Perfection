import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.div`
  position: absolute;
  width: 360px;
  margin-top: 280px;
  text-align: center;

  h1 {
    color: var(--blue);
    font-size: 1.75rem;

    strong {
      font-size: 2rem;
    }
  }

  p{
    color: var(--gray);
    font-size: 1.2rem;
  }
`;