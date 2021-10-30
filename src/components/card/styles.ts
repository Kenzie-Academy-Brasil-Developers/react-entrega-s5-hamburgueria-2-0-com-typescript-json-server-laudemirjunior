import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 346px;
  display: flex;
  flex-direction: column;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  div:nth-child(1) {
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-0);
  }
  div:nth-child(2) {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 20px;
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 12px;
      color: var(--gray-300);
    }
    h4 {
      font-size: 14px;
      color: var(--primary);
    }
    div {
      width: 106px;
      height: 40px;
    }
  }
  :hover {
    border-color: var(--primary);
    transition-duration: 0.5s;
  }
`;
