import * as S from "./styles";

type InputProps = {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
};

const Input = (props: InputProps) => {
  return <S.Input {...props} fullWidth={props.fullWidth} />;
};

export default Input;
