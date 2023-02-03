import React, { useState } from "react";
import { Form } from "react-bootstrap";
import tw from "twin.macro";

function Input(props) {
  const [optionToggle, setOptionToggle] = useState(true);

  const ChangeInput = (e) => {
    console.log("mai chal gya");
    if (e.target.value == "in") {
      setOptionToggle(false);
      console.log(optionToggle);
    } else {
      setOptionToggle(true);
      console.log(optionToggle);
    }
  };

  return (
    <>
      <label tw="pl-4 text-[1.2rem]">{props.label}</label>
      <div tw="h-24 flex items-center pl-3">
        {optionToggle ? (
          <input
            type="number"
            tw="h-[60%] w-[40%] max-w-[40%] bg-slate-200 bg-none rounded-l-lg pl-3 border-r-2 border-black text-center"
            onChange={(e) => {
              e.target.value < 0 || e.target.value > 999
                ? (e.target.value = 0)
                : e.target.value;
            }}
          />
        ) : (
          <>
            <input
              type="number"
              tw="h-[60%] w-[20%] bg-slate-200 bg-none pl-2 rounded-l-lg border-r-2 border-black text-center"
              onChange={(e) => {
                let targetValue = e.target.value;
                if (targetValue > 25 || targetValue < 1) {
                  alert("invalid input");
                  e.target.value = 0;
                }
              }}
            />
            <div tw="h-[60%] w-[20%] bg-slate-200 bg-none pl-2 border-r-2 border-black grid place-items-center">
              ft
            </div>
            <input
              type="number"
              tw="h-[60%] w-[20%] bg-slate-200 bg-none pl-2 border-r-2 text-center"
              onChange={(e) => {
                let targetValue = e.target.value;
                if (targetValue > 12 || targetValue < 0) {
                  alert("invalid input");
                  e.target.value = 0;
                }
              }}
            />
          </>
        )}
        {props.options && (
          <Form.Select
            onChange={ChangeInput}
            aria-label="Default select example"
            tw="max-w-[5rem] h-[60%] rounded-l-none rounded-r-lg bg-slate-200"
          >
            <option value="cm">cm</option>
            <option value="in">in</option>
          </Form.Select>
        )}
      </div>
    </>
  );
}

export const KcalInput = (props) => {
  return (
    <>
    <label tw="p-4">{props.label}</label>
    <div tw="h-24 flex items-center pl-3">
      <input
        type="number"
        tw="h-[60%] bg-slate-200 bg-none rounded-l-lg pl-3 text-center"
        onChange={(e) => {
          e.target.value < 0 || e.target.value > 999
            ? (e.target.value = 0)
            : e.target.value;
          }}
          />
      <div tw="h-[60%] w-[4rem] bg-slate-200 grid place-items-center border-l-2 border-black rounded-r-lg">Kcal</div>
    </div>
    </>
  );
};

export default Input;
