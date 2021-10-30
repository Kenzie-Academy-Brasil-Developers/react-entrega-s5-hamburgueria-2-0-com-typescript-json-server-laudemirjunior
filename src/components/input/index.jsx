import { InputStyle, Span } from "./styles";

export default function Input({ register, name, error, ...rest }) {
  return (
    <>
      <InputStyle isErrored={!!error} {...register(name)} {...rest} />
      <Span>{!!error && <span>{error}</span>}</Span>
    </>
  );
}
