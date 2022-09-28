import type { NextPage } from "next";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { PostData } from "../types/PostData";
import MiniBlogCard from "../components/Blog/MiniBlogCard";
import Seo from "../components/Seo";

import * as PageStyles from "../styles/pages/shared";

const About: NextPage<{ posts: PostData[] }> = ({ posts }) => {
  return (
    <>
      <Seo
        title="About"
        description="Learn more about Whiteboard Fitness, a blog about fitness, nutrition, and health."
      />

      <main>
        <PageStyles.Container>
          <PageStyles.Title>About</PageStyles.Title>
          <PageStyles.Post>
            <p>
              Want to know the type of pushup to do to make you look like a
              Greek god in a month with a bit of grit and determination? Well
              you&apos;re in the wrong place.
            </p>
            <p>
              Whiteboard Fitness is a blog that aims to deliver fitness content
              that is realistic, attainable and honest. Not the crap you see on
              TikTok by some shredded 20 year old full of Trenbolone telling you
              that if you do a few situps pushup and pullups each day you will
              look Chris Hemsworth&apos;s Thor in a few months, you wont.
            </p>
            <p>
              Most of this blog will consist of the little health and Fitness
              tests and methods that I am trialing or using on myself with real
              results and no perfect downlit pictures making the before and
              after look amazing, just honest results, even the ones that dont
              work.
            </p>
            <p>
              Progress will be slow, but the content will be good and honest. So
              lets go back to the whiteboard.
            </p>
            <p>
              Check out some of the blogposts and tools I have already published
              to get started!
            </p>
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

            <h2>Tools</h2>
            <p>
              -{" "}
              <Link href="/tools/percentage-calculator">
                1RM Percentage breakdown calculator
              </Link>{" "}
              <br />-{" "}
              <Link href="/tools/rep-round-counter">Rep / Round Counter</Link>
            </p>
          </PageStyles.Post>
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
      posts: posts.filter((post) => post.frontmatter.published),
    },
  };
}

export default About;
