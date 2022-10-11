import { NextPage } from "next";
import fs from "fs";
import matter from "gray-matter";
import Seo from "../../../components/Seo";

import * as PageStyles from "../../../styles/pages/shared";
import { PostData } from "../../../types/PostData";
import MiniBlogCard from "../../../components/Blog/MiniBlogCard";

const PostPage: NextPage<{ posts: PostData[]; author: string }> = ({
  posts,
  author,
}) => {
  return (
    <>
      <Seo
        title={`Posts by ${author}`}
        description={`Read all the blog posts published by ${author}`}
      />
      <main>
        <PageStyles.Container>
          <PageStyles.Title>Posts by {author}</PageStyles.Title>
          <PageStyles.ArticlesGrid>
            {posts.map(({ slug, frontmatter }) => (
              <MiniBlogCard
                key={slug}
                title={frontmatter.title}
                link={`/blog/${slug}`}
                imageSrc={frontmatter.img}
                detail={frontmatter.description}
              />
            ))}
          </PageStyles.ArticlesGrid>
        </PageStyles.Container>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const toTitleCase = (phrase: string) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const files = fs.readdirSync("posts");

  const paths = files
    .map((filename) => {
      const readFile = fs.readFileSync(`posts/${filename}`, "utf-8");

      const { data: frontmatter } = matter(readFile);
      return frontmatter.author.toLowerCase().replace(" ", "-");
    })
    .filter((item, pos, self) => {
      return self.indexOf(item) === pos;
    })
    .map((author) => ({
      params: {
        name: author,
      },
    }));

  console.log(paths);

  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({
  params: { name },
}: {
  params: { name: string };
}) {
  const toTitleCase = (phrase: string) => {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const files = fs.readdirSync("posts");
  const author = toTitleCase(name.replace("-", " "));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const readFile = fs.readFileSync(`posts/${filename}`, "utf-8");

      const { data: frontmatter } = matter(readFile);

      return {
        slug,
        frontmatter,
      };
    })
    .filter(
      (post) => post.frontmatter.author === author && post.frontmatter.published
    );

  if (!posts.length) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts,
      author,
    },
  };
}

export default PostPage;
