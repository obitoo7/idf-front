import React from "react";
import tw from "twin.macro";
import BlogPost from "../components/BlogPosts/BlogPosts";

const BlogContainer = tw.div`
h-screen
pt-[calc(var(--header-height)+ 2rem)]
p-8
w-full
grid
grid-cols-3
max-sm:grid-cols-1
gap-4
overflow-y-scroll`;

function Blogs() {
  
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
