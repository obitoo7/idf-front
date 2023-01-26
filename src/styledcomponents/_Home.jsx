import tw from "twin.macro";

export const HomeContainer = tw.div`
overflow-x-hidden
w-full
pt-[var(--header-height)]
max-sm:pt-[var(--header-height)]`;


export const ArticleMainContainer = tw.div`
w-full 
grid 
grid-flow-col 
items-center`;


export const Articles = tw.div`
grid 
grid-flow-col 
items-center gap-4

max-sm:grid-flow-row
max-sm:p-4`;


export const ArticleNavContainer = tw.div`
grid 
grid-flow-row 
p-4 
gap-4 
min-w-[20rem]

max-sm:hidden`;

export const ArticleNavs = tw.div`
h-32 
rounded-xl 
bg-slate-800 
transition 
hover:scale-[1.02]`;

export const Label = tw.label`
text-[4rem] 
max-sm:text-[3rem]
m-4 
mb-0
`;

export const VideoContainer = tw.div`
overflow-x-scroll
grid 
grid-flow-col 
gap-4 
p-4`;

export const Videos = tw.div`
h-48 w-96 bg-slate-800`;

export const ToolsContainer = tw.div`
w-full 
p-4 
grid
grid-flow-col 
gap-4
max-sm:grid
max-sm:grid-flow-row
place-items-center`;

export const Footer = tw.div`
h-[50vh] w-full bg-slate-900`;
