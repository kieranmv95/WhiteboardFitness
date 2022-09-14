import Image from "next/image";
import Link from "next/link";
import * as S from "./styles";

type MiniBlogCardProps = {
  title: string;
  link: string;
  imageSrc: string;
  detail?: string;
};

const MiniBlogCard = ({ title, link, imageSrc, detail }: MiniBlogCardProps) => (
  <Link href={link} passHref>
    <S.MiniBlogCardWrapper>
      <S.ImageHolder>
        <Image
          src={imageSrc}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageHolder>
      <S.Title>{title}</S.Title>
      {detail && <S.Detail>{detail}</S.Detail>}
    </S.MiniBlogCardWrapper>
  </Link>
);

export default MiniBlogCard;
