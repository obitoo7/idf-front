import tw from "twin.macro";

export const StoreContainer = tw.div`
pt-[var(--header-height)]
h-screen
w-full
bg-slate-300
`;


export const ProductContainer = tw.div`
max-sm:grid
max-sm:grid-cols-2
h-full
w-full
bg-slate-900
grid
grid-cols-4
gap-4
p-4
overflow-y-scroll
`;

export const Product = tw.div`
h-60
bg-slate-700
rounded-md
`;