import styled from 'styled-components';

export const SideBars = styled.div`
  height: 90px;
  background: var(--dark-gray);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 10px solid #151515;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  display: flex;
  height: 90px;
  align-items: center;

  li {
    list-style: none;
    position: relative;
    margin-left: 80px;
  }

  a {
    padding: 6px;
    color: var(--gray);
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  a:after {
    content: "";
    display: block;
    height: 5px;
    width: 100%;
    top: 60px;
    left: 50%;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    transition: 0.3s;
    opacity: 0;
    background-color: var(--blue-dark-4);
  }

  a:hover {
    color: var(--blue-dark-4);

  }
   a:hover:after {
     opacity: 1;
   }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  height: 90px;

  li {
    padding: 1rem;
    list-style: none;
    transition: 0.3s;
  }

  li:hover {
    padding-bottom: 1.5rem;
  }
`;