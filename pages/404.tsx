import { NextPage } from "next";
import Link from "next/link";
import Seo from "../components/Seo";
import * as PageStyles from "../styles/pages/shared";

const NotFound: NextPage = () => {
  return (
    <>
      <Seo
        title="About"
        description="Learn more about Whiteboard Fitness, a blog about fitness, nutrition, and health."
      />

      <PageStyles.Container>
        <h1>404</h1>
        <p>The page you are looking for cannot be because:</p>
        <ul>
          <li>It may have been deleted</li>
          <li>It never existed</li>
          <li>You typed in some random shit</li>
        </ul>
        <Link href="/">Go Home</Link>
      </PageStyles.Container>
    </>
  );
};

export default NotFound;
