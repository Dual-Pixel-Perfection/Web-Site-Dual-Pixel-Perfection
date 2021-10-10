import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #070707;
  padding: 2rem 0 0;
`;

export const SocialCard = styled.div`
  max-width: 680px;
  margin: 0 auto 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SocialMedia = styled.div`
  text-align: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
  }

  li {
    margin-left: 1rem;
    list-style: none;
    transition: 0.3s;
  }

  li:hover {
    padding-bottom: 1.5rem;
  }

  h2 {
    color: #fff;
    margin: 1rem 0 0;
  }
`;

export const Contact = styled.div`
  text-align: center;
  h2 {
    color: #fff;
    margin: 1rem 0 0;
  }
  p {
    color: var(--gray);
    font-size: 1.2rem;
  }
`;

export const PropSite = styled.div`
  border-top: 1px solid var(--darked);

  text-align: center;
  p {
    color: #fff;
    padding: 0.5rem 0;
    margin: 0;
  }
`;
