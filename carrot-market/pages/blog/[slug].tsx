import { readdirSync } from "fs";
import { GetStaticProps, NextPage } from "next";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkHtml from "remark-html";
import Layout from "@components/layout";

const Post: NextPage<{ post: string; data: any }> = ({ post, data }) => {
  return (
    <Layout title={data.title} seoTitle={data.title}>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post }}
      />
    </Layout>
  );
};

export function getStaticPaths() {
  const files = readdirSync("./posts").map((file) => {
    const [name, extension] = file.split(".");
    return { params: { slug: name } };
  });

  return {
    paths: files, // specifies the files to pregenerate HTML
    fallback: false, // Only file specified in 'paths' will be generated
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  // console.log(ctx);
  /*   
  // when entering 'http://localhost:3000/blog/01-first-post',
  {
    params: { slug: '01-first-post' },
    locales: undefined,
    locale: undefined,
    defaultLocale: undefined
}
  */
  /*
    // when entering 'http://localhost:3000/blog/02-my-trip-to-USA',
   {
  params: { slug: '02-my-trip-to-USA' },
  locales: undefined,
  locale: undefined,
  defaultLocale: undefined
} */

  const { content, data } = matter.read(`./posts/${ctx.params?.slug}.md`);

  console.log(content, data);
  // when entering 'http://localhost:3000/blog/01-first-post',
  /*     
   # Welcome everyone
    This is my first blog post
    Thank you for reading
    - I
    - like
    - potato

 { title: 'Welcome Everyone', date: '2022.02.02', category: 'thoughts' }
 */

  // when entering 'http://localhost:3000/blog/02-my-trip-to-USA',
  /*
    # Travel more
    get it

    { title: 'USA is great', date: '2022.02.02', category: 'travel' }
*/

  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  // console.log(value);
  // when entering 'http://localhost:3000/blog/01-first-post',
  /*
    <h1>Welcome everyone</h1>
    <p>This is my first blog post</p>
    <p>Thank you for reading</p>
    <ul>
    <li>I</li>
    <li>like</li>
    <li>potato</li>
    </ul>
*/

  // when entering 'http://localhost:3000/blog/02-my-trip-to-USA',
  /* 
    <h1>Travel more</h1>
    <p>get it</p>
*/

  return {
    props: {
      data,
      post: value,
    },
  };
};

export default Post;
