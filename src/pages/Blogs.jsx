import React from 'react'
import tw from 'twin.macro'

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
overflow-y-scroll`

const BlogPost = tw.div`
h-64
w-full
rounded-md
bg-slate-300`

function Blogs() {
  return (
    <BlogContainer>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
    </BlogContainer>
  )
}

export default Blogs