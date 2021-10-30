import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ContainerForm = styled.form`
  width: 100%;
  max-width: 500px;
  height: 527px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  .title {
    text-align: left;
    max-width: 453px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 14px;
      color: var(--gray-50);
      text-decoration: none;
      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export const Buttons = styled.div`
  max-width: 453px;
  width: 100%;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  max-width: 500px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 30px;
  height: 461px;
  padding-right: 80px;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Phrase = styled.div`
  width: 100%;
  max-width: 377px;
  height: 95px;
  display: flex;
  align-items: center;
  line-height: 30px;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  .icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #27ae6020;
    border-radius: 5px;
    margin: 15px;
    svg {
      font-size: 30px;
      color: var(--primary);
    }
  }

  .info {
    width: 200px;
    p {
      font-size: 14px;
      font-weight: 500;
      color: var(--gray-300);
      strong {
        color: var(--gray-600);
      }
    }
  }
`;

export const Field = styled.div`
  width: 170px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Ball = styled.div`
  width: 11px;
  height: 11px;
  background-color: var(--gray-6);
  border-radius: 50%;
`;
