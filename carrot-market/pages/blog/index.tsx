import Layout from "@components/layout";
import { NextPage } from "next";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  category: string;
  slug: string;
}

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout title="Blog" seoTitle="Blog">
      <h1 className="font-semibold text-center text-lg mt-5 mb-10">
        Latest Posts:
      </h1>
      {posts.map((post, index) => (
        <div key={index} className="mb-5">
          <Link href={`/blog/${post.slug}`}>
            <a>
              <span className="text-lg text-red-500">{post.title}</span>
              <div>
                <span>
                  {post.date} / {post.category}
                </span>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const blogPosts = readdirSync("./posts").map((file) => {
    // readdirSync() allows to read a directory
    const content = readFileSync(`./posts/${file}`, "utf-8"); // readFileSync() allow to read a file
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });

  console.log(blogPosts);
  /*   
[
  {
    title: 'Welcome Everyone',
    date: '2022.02.02',
    category: 'thoughts',
    slug: '01-first-post'
  },
  {
    title: 'USA is great',
    date: '2022.02.02',
    category: 'travel',
    slug: '02-my-trip-to-USA'
  }
]
*/

  return {
    props: {
      posts: blogPosts.reverse(),
    },
  };
}

export default Blog;
