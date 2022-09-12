import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavIcon from "../NavIcon";
import * as S from "./style";

const Header = () => {
  const router = useRouter();
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    setToggled(false);
  }, [router]);

  return (
    <S.Header>
      <S.Title>
        <Link href="/">Whiteboard Fitness</Link>
      </S.Title>
      <NavIcon toggled={toggled} setToggled={setToggled} />

      <S.Navigation toggled={toggled}>
        <S.NavigationUl>
          <li>
            <Link href="/blog" passHref>
              <S.StyledLink>Blog</S.StyledLink>
            </Link>
          </li>
          <li>
            <Link href="/workouts" passHref>
              <S.StyledLink>Workouts</S.StyledLink>
            </Link>
          </li>
          <S.HomeLi>
            <Link href="/" passHref>
              <S.StyledLink>Whiteboard Fitness</S.StyledLink>
            </Link>
          </S.HomeLi>
          <li>
            <Link href="/tools" passHref>
              <S.StyledLink>Tools</S.StyledLink>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <S.StyledLink>About</S.StyledLink>
            </Link>
          </li>
        </S.NavigationUl>
      </S.Navigation>
    </S.Header>
  );
};

export default Header;
