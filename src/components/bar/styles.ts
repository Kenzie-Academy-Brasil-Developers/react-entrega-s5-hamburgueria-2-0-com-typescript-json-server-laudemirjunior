import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--gray-0);
  .barStyled {
    width: 100%;
    height: 80px;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 0 20px;
    img {
      width: 150px;
      cursor: pointer;
      :hover {
        filter: contrast(2.5);
      }
    }
    .nav {
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
  svg {
    font-size: 30px;
    color: #bdbdbd;
  }
`;

export const Input = styled.div`
  max-width: 365px;
  width: 100%;
  height: 65px;
  border: 2px solid #e0e0e0;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1;
  }
  input {
    width: 90%;
    height: 90%;
    font-size: 24px;
    color: var(--gray-100);
    padding: 0 20px;
  }
  button {
    margin: 0 10px;
    width: 53px;
    height: 40px;
    background-color: var(--primary);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: #ffffff;
      font-size: 24px;
    }
  }
`;

export const Cart = styled.div`
  position: relative;
  span {
    background-color: var(--primary);
    width: 20px;
    height: 24px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 900;
    color: #ffffff;
    position: absolute;
    top: -10px;
    left: 20px;
  }
`;

export const Log = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
