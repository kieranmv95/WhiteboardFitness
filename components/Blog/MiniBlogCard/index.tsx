import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as S from "./styles";

type MiniBlogCardProps = {
  title: string;
  link: string;
  imageData: StaticImageData;
};

const MiniBlogCard = ({ title, link, imageData }: MiniBlogCardProps) => (
  <Link href={link} passHref>
    <S.MiniBlogCardWrapper>
      <S.ImageHolder>
        <Image
          src={imageData}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageHolder>
      <S.Title>{title}</S.Title>
    </S.MiniBlogCardWrapper>
  </Link>
);

export default MiniBlogCard;
