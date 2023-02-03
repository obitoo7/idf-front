import React, { useState, useRef } from "react";
import tw from "twin.macro";
import Input from "./Input";
import {
  BmrCalcMainContainer,
  BmrCalcContainer,
  BmrCalcQuery,
  BmrCalcHead,
  BmrCalcCheckboxContainer,
  BmrCalcCheckboxContainerLeft,
  BmrCalcCheckboxContainerRight,
  BmrCalcGenderSection,
  SubmitButtonContainer,
  SubmitBtn,
  BmrCalcResult,
} from "../../styledcomponents/components/_BmrCalc";
import { useEffect } from "react";
import RadioBtn from "./RadioBtn";

function BmrCalc() {
  const maleBtnRef = useRef();
  const femaleBtnRef = useRef();

  const genderRadioBtnToggle = (e) => {
    if (e.target.value == "Male") {
      maleBtnRef.current.checked = true;
      femaleBtnRef.current.checked = false;
    } else {
      maleBtnRef.current.checked = false;
      femaleBtnRef.current.checked = true;
    }
  };

  return (
    <BmrCalcMainContainer>
      <BmrCalcContainer>
        <BmrCalcQuery>
          <BmrCalcHead>
            <h1 tw="text-[3rem]">Bmr calculator</h1>
          </BmrCalcHead>

          <BmrCalcCheckboxContainer>
            <BmrCalcCheckboxContainerLeft>
              <label tw="pl-4 text-[1.2rem]">Gender*</label>
              <BmrCalcGenderSection>
                <RadioBtn label="Male">
                  <input
                    tw="h-5 w-5"
                    type="radio"
                    value="Male"
                    title="gender"
                    onClick={genderRadioBtnToggle}
                    ref={maleBtnRef}
                  />
                </RadioBtn>
                <RadioBtn label="Female">
                  <input
                    tw="h-5 w-5"
                    type="radio"
                    value="Female"
                    title="gender"
                    onClick={genderRadioBtnToggle}
                    ref={femaleBtnRef}
                  />
                </RadioBtn>
              </BmrCalcGenderSection>
              <Input label="Height*" options={true} />
              <Input label="Age*" options={true} />
            </BmrCalcCheckboxContainerLeft>

            <BmrCalcCheckboxContainerRight>
              <Input label="I exercise*" options={true} />
              <Input label="Weight*" options={true} />
              <Input label="Body Fat Percentage*" options={true} />
            </BmrCalcCheckboxContainerRight>
          </BmrCalcCheckboxContainer>
          <SubmitButtonContainer>
            <a href="#result" style={{ textDecoration: "none" }}>
              <SubmitBtn>hello</SubmitBtn>
            </a>
          </SubmitButtonContainer>
        </BmrCalcQuery>

        <BmrCalcResult id="result"></BmrCalcResult>
      </BmrCalcContainer>
    </BmrCalcMainContainer>
  );
}

export default BmrCalc;
