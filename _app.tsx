import type { NextPage } from "next";

export async function getStaticProps() {
  const res = await fetch("https://www.youtube.com/watch?v=toK9rcrRzlk");
  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

const Home: NextPage = () => {
  return (
    <div>
      <p>Hello</p> <a>What is this</a>
    </div>
  );
};
