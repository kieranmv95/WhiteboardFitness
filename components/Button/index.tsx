import * as S from "./styles";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
};

const Button = ({ onClick, children, fullWidth, disabled }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} fullWidth={fullWidth} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button;
