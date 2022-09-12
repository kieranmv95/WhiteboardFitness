import * as S from "./styles";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
};

const Button = ({ onClick, children, fullWidth }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} fullWidth={fullWidth}>
      {children}
    </S.Button>
  );
};

export default Button;
