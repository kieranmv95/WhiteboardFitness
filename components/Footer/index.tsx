import * as S from "./style";
import * as PageStyles from "../../styles/pages/shared";
import Link from "next/link";

const Footer = () => (
  <S.Footer>
    <PageStyles.Container>
      <S.Brand>Whiteboard Fitness</S.Brand>
      <S.Links>
        <li>
          <Link href="/blog">
            <S.Link>Blog</S.Link>
          </Link>
        </li>
        <li>
          <Link href="/workouts">
            <S.Link>Workouts</S.Link>
          </Link>
        </li>
        <li>
          <Link href="/tools">
            <S.Link>Tools</S.Link>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <S.Link>About</S.Link>
          </Link>
        </li>
      </S.Links>
    </PageStyles.Container>
  </S.Footer>
);

export default Footer;
