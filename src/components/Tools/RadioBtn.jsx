import React, { Children } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import tw from 'twin.macro'

function RadioBtn({children, label}) {
  return (
    <div
    tw="h-12 w-32 m-[.25rem] border-2 rounded-lg flex items-center justify-evenly cursor-pointer">
    <label tw="text-[1.2rem]">{label}</label>
    {children}
  </div>
  )
}

export default RadioBtn