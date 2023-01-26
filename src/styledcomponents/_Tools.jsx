import tw from "twin.macro";

export const ToolsContainer = tw.div`
relative
top-[var(--header-height)]
h-[calc(100vh - var(--header-height))]
w-full
grid
grid-cols-2
grid-rows-2
gap-4
bg-amber-400`