import Image from "next/image";
import { NextPage } from "next";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { Frontmatter } from "../../types/Frontmatter";
import Seo from "../../components/Seo";

import * as PageStyles from "../../styles/pages/shared";
import * as S from "../../styles/pages/blogSlug";

type PostPageProps = {
  frontmatter: Frontmatter;
  content: string;
};

const PostPage: NextPage<PostPageProps> = ({ frontmatter, content }) => {
  return (
    <>
      <Seo title={frontmatter.title} description={frontmatter.description} />
      <main>
        <PageStyles.Container>
          <PageStyles.Title>{frontmatter.title}</PageStyles.Title>
          <S.ImageHolder>
            <Image
              src={frontmatter.img}
              alt={frontmatter.title}
              layout="fill"
              objectFit="cover"
            />
          </S.ImageHolder>
          <PageStyles.Post
            dangerouslySetInnerHTML={{ __html: md().render(content) }}
          />
        </PageStyles.Container>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default PostPage;
