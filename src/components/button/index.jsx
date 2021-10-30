import { ButtonStyle } from "./styles";

export default function Button({ children, color, ...rest }) {
  return (
    <ButtonStyle color={color} {...rest}>
      {children}
    </ButtonStyle>
  );
}
