import styled from 'styled-components';

export const SideBars = styled.div`
  height: 90px;
  background: var(--blue-dark);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  display: flex;

  a {
    margin-right: 80px;
    color: var(--gray);
    font-size: 20px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  a:hover {
    color: var(--blue-dark-4);
  }
`;