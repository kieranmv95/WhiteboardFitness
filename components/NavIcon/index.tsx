import * as S from "./styles";

type NavIconProps = {
  toggled: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavIcon = ({ toggled, setToggled }: NavIconProps) => (
  <S.NavIcon toggled={toggled} onClick={() => setToggled(!toggled)}>
    <span />
    <span />
    <span />
  </S.NavIcon>
);

export default NavIcon;
