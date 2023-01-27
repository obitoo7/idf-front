import React from "react";
import tw from "twin.macro";
import BlogPost from "../components/BlogPosts/BlogPosts";

const BlogContainer = tw.div`
h-screen
pt-[calc(var(--header-height)+ 2rem)]
p-8
bg-slate-800
w-full
grid
grid-cols-3
max-sm:grid-cols-1
gap-4
overflow-y-scroll`;

function Blogs() {
  let meta = `
  <meta property="og:title" content=${title} />
  <meta property="og:description" content=${description} />
  <meta property="og:url" content="https://www.ideatofit.com/posts/${id}" />
  <meta property="og:image" content=${img} />
  <meta name="twitter:title" content=${title} />
  <meta name="twitter:description" content=${description} />
  <meta name="twitter:image" content=${img} />
  <meta name="twitter:card" content="summary_large_image" />
`;
document.head.innerHTML = meta;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:1337/posts/');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);
  
  return (
    <>
      {/* <head>
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content="https://www.ideatofit.com/posts/id" />
        <meta property="og:image" content={props.img} />

        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image" content={props.img} />
        <meta name="twitter:card" content="summary_large_image" />
      </head> */}

      <BlogContainer>
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </BlogContainer>
    </>
  );
}

export default Blogs;
