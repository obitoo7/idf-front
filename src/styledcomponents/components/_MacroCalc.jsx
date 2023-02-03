import tw from "twin.macro";

export const MacroCalcMainContainer = tw.div`
relative h-[calc(100vh - var(--header-height))] w-full top-[var(--header-height)] flex justify-center items-center
max-md:h-fit`;

export const MacroCalcContainer = tw.div`
border-2 h-[90%] w-[90%] flex flex-row 
max-md:h-fit max-md:flex-col`

export const MacroCalcQuery = tw.div`
h-[100%] w-[70%] flex flex-col 
max-md:w-[100%]`

export const MacroCalcResult = tw.div`
border-l-2 h-[100%] flex-[30%]
max-md:h-[100vh] max-md:w-[90%] max-md:min-h-[100vh] max-md:border-none`

export const MacroCalcHead = tw.section`
border-b-2 p-4`

export const MacroCalcOptionContainer = tw.div`
flex flex-[5%] flex-row justify-evenly p-3 
max-md:flex-col`

export const MacroCalcMacroSliders = tw.div`
flex flex-[40%] flex-col grow justify-evenly  p-4`

export const SubmitButtonContainer = tw.div`
border-t-2 h-fit w-full grow shrink-0 flex items-center justify-center
max-md:p-4`

export const SubmitBtn = tw.button`
h-12 w-36 bg-slate-200 rounded-full`