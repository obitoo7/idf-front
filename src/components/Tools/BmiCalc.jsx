import React from 'react'
import tw from 'twin.macro'

const BmiCalcMainContainer = tw.div`
h-full w-full bg-slate-900 grid place-items-center`

const BmiCalculator = tw.div`
h-1/2 w-1/2 bg-slate-600 rounded-lg`

function BmiCalc() {
  return (
    <BmiCalcMainContainer>
      <BmiCalculator>
        hello
      </BmiCalculator>
    </BmiCalcMainContainer>
  )
}

export default BmiCalc