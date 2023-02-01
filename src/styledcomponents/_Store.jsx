import tw from "twin.macro";

export const StoreContainer = tw.div`
pt-[var(--header-height)]
h-screen
w-full
`;


export const ProductContainer = tw.div`
max-sm:grid
max-sm:grid-cols-2
h-full
w-full
grid
grid-cols-3
gap-4
p-4
overflow-y-scroll
`;

export const Product = tw.div`
h-60
bg-slate-700
rounded-md
`;