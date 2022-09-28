import Head from "next/head";

type SeoProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

const Seo = ({ title, description, children }: SeoProps) => (
  <Head>
    <title>WBF | {title}</title>
    <meta
      name="description"
      content={
        description
          ? description
          : "Welcome to Whiteboard Fitness, a blog about fitness, nutrition, and health."
      }
    />
    {children}
  </Head>
);

export default Seo;
