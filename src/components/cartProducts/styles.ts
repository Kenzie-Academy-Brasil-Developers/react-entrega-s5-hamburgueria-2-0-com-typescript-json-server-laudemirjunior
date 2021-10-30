import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 15px;
  max-width: 500px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  .data {
    display: flex;
    gap: 10px;
  }
  .image {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-100);
    border-radius: 5px;
    img {
      width: 55px;
      height: 55px;
    }
  }
  .quantity {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .icons {
      background-color: var(--gray-100);
      width: 90px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      div {
        border: 2px solid var(--gray-100);
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
      }
    }
    svg {
      font-size: 18px;
      color: var(--secondary);
    }
  }
  .trash {
    color: var(--gray-300);
    font-size: 20px;
  }
`;
