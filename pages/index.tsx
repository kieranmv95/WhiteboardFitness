import type { NextPage } from "next";
import MiniBlogCard from "../components/Blog/MiniBlogCard";
import FeaturedBlogCard from "../components/Blog/FeaturedBlogCard";
import fs from "fs";
import matter from "gray-matter";
import { PostData } from "../types/PostData";
import Seo from "../components/Seo";

import * as PageStyles from "../styles/pages/shared";

const Home: NextPage<{ posts: PostData[]; featured: PostData }> = ({
  posts,
  featured,
}) => {
  return (
    <>
      <Seo title="Home" />

      <main>
        <PageStyles.Container>
          <FeaturedBlogCard
            title={featured.frontmatter.title}
            description={featured.frontmatter.description}
            link={`blog/${featured.slug}`}
            author={featured.frontmatter.author}
            imageSrc={featured.frontmatter.img}
          />

          <h2>Posts</h2>

          <PageStyles.ArticlesGrid>
            {posts.map(({ slug, frontmatter }) => (
              <MiniBlogCard
                key={slug}
                title={frontmatter.title}
                link={`blog/${slug}`}
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
      featured: posts.find(
        (post) => post.frontmatter.type === "news" && post.frontmatter.published
      ),
      posts: posts.filter((post) => post.frontmatter.published),
    },
  };
}

export default Home;
