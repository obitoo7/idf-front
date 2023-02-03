import React, { useState, useRef } from "react";
import tw from "twin.macro";
import Input from "./Input";
import {
  BodyFatCalcMainContainer,
  BodyFatCalcContainer,
  BodyFatCalcQuery,
  BodyFatCalcHead,
  BodyFatCalcCheckboxContainer,
  BodyFatCalcCheckboxContainerLeft,
  BodyFatCalcCheckboxContainerRight,
  BodyFatCalcGenderSection,
  SubmitButtonContainer,
  SubmitBtn,
  BodyFatCalcResult,
} from "../../styledcomponents/components/_BodyFatCalc";
import RadioBtn from "./RadioBtn";

function BodyFatCalc() {
  const maleBtnRef = useRef();
  const femaleBtnRef = useRef();
  const [hipsTrue, setHipstrue] = useState(false)

  const genderRadioBtnToggle = (e) => {
    if (e.target.value == "Male") {
      maleBtnRef.current.checked = true;
      femaleBtnRef.current.checked = false;
      setHipstrue(false)
    } else {
      maleBtnRef.current.checked = false;
      femaleBtnRef.current.checked = true;
      setHipstrue(true)
    }
  };

  return (
    <BodyFatCalcMainContainer>
      <BodyFatCalcContainer>
        <BodyFatCalcQuery>
          <BodyFatCalcHead>
            <h1 tw="text-[3rem]">BodyFat calculator</h1>
          </BodyFatCalcHead>

          <BodyFatCalcCheckboxContainer>
            <BodyFatCalcCheckboxContainerLeft>
              <label tw="pl-4 text-[1.2rem]">Gender*</label>
              <BodyFatCalcGenderSection>
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
              </BodyFatCalcGenderSection>
              <Input label="Height*" options={true} />
              {hipsTrue&&<Input label="Hip*" options={true} />}
            </BodyFatCalcCheckboxContainerLeft>

            <BodyFatCalcCheckboxContainerRight>
              <Input label="Waist*" options={true} />
              <Input label="Neck Circumference*" options={true} />
            </BodyFatCalcCheckboxContainerRight>
          </BodyFatCalcCheckboxContainer>
          <SubmitButtonContainer>
            <a href="#result" style={{ textDecoration: "none" }}>
              <SubmitBtn>Get Results</SubmitBtn>
            </a>
          </SubmitButtonContainer>
        </BodyFatCalcQuery>
        <BodyFatCalcResult id="result"></BodyFatCalcResult>
      </BodyFatCalcContainer>
    </BodyFatCalcMainContainer>
  );
}

export default BodyFatCalc;
