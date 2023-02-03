import React, { useState, useRef } from "react";
import tw from "twin.macro";
import Form from "react-bootstrap/Form";
import Input, { KcalInput } from "./Input";
import {
  MacroCalcMainContainer,
  MacroCalcContainer,
  MacroCalcQuery,
  MacroCalcHead,
  SubmitButtonContainer,
  SubmitBtn,
  MacroCalcResult,
  MacroCalcOptionContainer,
  MacroCalcMacroSliders,
} from "../../styledcomponents/components/_MacroCalc";
import { useEffect } from "react";
import RadioBtn from "./RadioBtn";

function MacroCalc() {
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
    <MacroCalcMainContainer>
      <MacroCalcContainer>
        <MacroCalcQuery>
          <MacroCalcHead>
            <h1 tw="text-[3rem]">Macro calculator</h1>
          </MacroCalcHead>
          <MacroCalcOptionContainer>
            <KcalInput label="Enter your TDEE*" />
            <KcalInput label="Choose your diet type*" />
          </MacroCalcOptionContainer>
          <MacroCalcMacroSliders>
            <Form.Label>Protein</Form.Label>
            <Form.Range />
            <Form.Label>Carbohyrdrates</Form.Label>
            <Form.Range />
            <Form.Label>Fats</Form.Label>
            <Form.Range />
          </MacroCalcMacroSliders>
          <SubmitButtonContainer>
            <a href="#result" style={{ textDecoration: "none" }}>
              <SubmitBtn>hello</SubmitBtn>
            </a>
          </SubmitButtonContainer>
        </MacroCalcQuery>
        <MacroCalcResult id="result"></MacroCalcResult>
      </MacroCalcContainer>
    </MacroCalcMainContainer>
  );
}

export default MacroCalc;
