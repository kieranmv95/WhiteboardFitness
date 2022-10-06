import * as S from "./styles";
import Link from "next/link";

type BlogMetaProps = {
  name: string;
  date: string;
};

const BlogMeta = ({ name, date }: BlogMetaProps) => {
  const formatDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <Link
      passHref
      href={`/author/${name.toLocaleLowerCase().replace(" ", "-")}`}
    >
      <S.Container>
        <S.Title>
          Written by <b>{name}</b>
        </S.Title>
        <S.Published>Published {formatDate(date)}</S.Published>
      </S.Container>
    </Link>
  );
};

export default BlogMeta;
