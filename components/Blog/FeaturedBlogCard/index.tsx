import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as S from "./styles";

type FeaturedBlogCardProps = {
  title: string;
  description: string;
  link: string;
  author: string;
  imageData: StaticImageData;
};

const FeaturedBlogCard = ({
  title,
  description,
  link,
  author,
  imageData,
}: FeaturedBlogCardProps) => (
  <Link href={link} passHref>
    <S.FeaturedBlogCardWrapper>
      <S.ImageHolder>
        <Image
          src={imageData}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </S.ImageHolder>
      <S.ContentHolder>
        <div>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
          <S.Author>By {author}</S.Author>
        </div>
      </S.ContentHolder>
    </S.FeaturedBlogCardWrapper>
  </Link>
);

export default FeaturedBlogCard;
