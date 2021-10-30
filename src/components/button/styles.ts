import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 100%;
  max-width: 454px;
  max-height: 60px;
  height: 100%;
  background: ${(props) => (props.color ? "var(--primary)" : "var(--gray-0)")};
  border-radius: 8px;
  font-family: Inter;
  font-weight: 600;
  color: ${(props) => (props.color ? "white" : "var(--gray-50)")};
  font-size: 16px;
  font-weight: bold;
  border: none;
  :hover {
    background: ${(props) => (props.color ? "#93D7AF" : "var(--gray-300)")};
    color: ${(props) => (props.color ? "white" : "var(--gray-100)")};
    transition-duration: 0.5s;
  }
`;
