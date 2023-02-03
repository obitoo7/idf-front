import tw from "twin.macro";

export const BmrCalcMainContainer = tw.div`
relative h-[calc(100vh - var(--header-height))] w-full top-[var(--header-height)] flex justify-center items-center
max-md:h-fit`;

export const BmrCalcContainer = tw.div`
border-2 h-[90%] w-[90%] flex flex-row 
max-md:h-fit max-md:flex-col`

export const BmrCalcQuery = tw.div`
h-[100%] w-[70%] flex flex-col 
max-md:w-[100%]`

export const BmrCalcResult = tw.div`
border-l-2 h-[100%] flex-[30%]
max-md:h-[100vh] max-md:w-[90%] max-md:min-h-[100vh] max-md:border-none`

export const BmrCalcHead = tw.section`
border-b-2 p-4`

export const BmrCalcCheckboxContainer = tw.div`
flex flex-row 
max-md:flex-col`

export const BmrCalcCheckboxContainerLeft = tw.div`
flex-[50%] grow shrink-0`

export const BmrCalcGenderSection = tw.section`
flex flex-row p-4`

export const BmrCalcCheckboxContainerRight = tw.div`
flex-[50%] grow shrink-0`

export const SubmitButtonContainer = tw.div`
border-t-2 grow shrink-0 flex items-center justify-center
max-md:p-4`

export const SubmitBtn = tw.button`
h-12 w-36 bg-slate-200 rounded-full`