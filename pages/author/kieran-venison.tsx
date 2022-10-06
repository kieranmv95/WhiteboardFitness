import type { NextPage } from "next";
import Image from "next/image";
import fs from "fs";
import Seo from "../../components/Seo";
import img from "../../public/images/author/kieran-logo.png";

import * as PageStyles from "../../styles/pages/shared";
import * as S from "../../styles/pages/author";
import matter from "gray-matter";
import { PostData } from "../../types/PostData";
import MiniBlogCard from "../../components/Blog/MiniBlogCard";

const KieranVenison: NextPage<{ posts: PostData[] }> = ({ posts }) => {
  return (
    <>
      <Seo
        title="Kieran Venison"
        description="Author page for kieran venison"
      />

      <main>
        <PageStyles.Container>
          <S.TitleContainer>
            <S.AuthorImage>
              <Image
                src={img}
                alt="Picture of the author"
                width={75}
                height={75}
              />
            </S.AuthorImage>
            <S.AuthorText>
              <S.Title>Kieran Venison</S.Title>
              <S.Role>Author - Founder</S.Role>
            </S.AuthorText>
          </S.TitleContainer>

          <h2>About</h2>

          <p>
            Hi, I&apos;m Kieran. Dad &amp; Founder of Whiteboard Fitness. I
            started this site pretty much to be a dump of resources I find
            valuable so I hope you enjoy it. I like any form of fitness but you
            will mainly find me doing CrossFit and Olympic lifting.
          </p>

          <p>
            This is only a side gig from my full-time job as a Software
            Developer but when I&apos;m not working or doing CrossFit I can be
            found mountain biking, rock climbing or playing games.
          </p>

          <p>
            When it comes to fitness, I started getting fit to be a more
            well-rounded and healthy person. But now it&apos;s gone past the
            point of being just healthy and its started being a part of what
            brings me enjoyment. I have found a love for Olympic lifting and
            CrossFit which enables me to jump into most sports with ease.
          </p>

          <h2>Kieran Venisons recent posts</h2>

          <PageStyles.ArticlesGrid>
            {posts.map(({ slug, frontmatter }) => (
              <MiniBlogCard
                key={slug}
                title={frontmatter.title}
                link={`/blog/${slug}`}
                imageSrc={frontmatter.img}
              />
            ))}
          </PageStyles.ArticlesGrid>
        </PageStyles.Container>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${filename}`, "utf-8");

    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.filter(
        (post) =>
          post.frontmatter.author === "Kieran Venison" &&
          post.frontmatter.published
      ),
    },
  };
}

export default KieranVenison;
