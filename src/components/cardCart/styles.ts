import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(155, 155, 155, 0.5);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  max-width: 500px;
  width: 90%;
  min-height: 212px;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  margin-top: 100px;
  background-color: white;
  transform: translate(-50%);
  border-radius: 5px;
  overflow: hidden;
  .bar {
    background-color: var(--primary);
    color: var(--gray-0);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 54px;
    font-size: 18px;
    font-weight: 700;
  }
  .price {
    margin: auto;
    width: 90%;
    max-width: 454px;
    border-top: 3px solid var(--gray-100);
    height: 59px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .button {
    height: 80px;
    margin: auto;
    button {
      width: 260px;
      height: 60px;
      @media (min-width: 490px) {
        width: 454px;
      }
    }
  }
`;

export const Msg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 158px;
  gap: 15px;
  h2 {
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    color: var(--gray-300);
  }
`;
