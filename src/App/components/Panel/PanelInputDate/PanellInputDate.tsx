import React, { useState } from "react";
import { FieldConfig } from "../../../shared/types";
import CustomInputDate from "../../../../UIKit/CustomInputDate/CustomInputDate";
import CustomInput from "../../../../UIKit/CustomInput/CustomInput";
import InputButton from "../../../../UIKit/InputButton/InputButton";
import { InputDateType } from "../../../../UIKit/CustomInputDate/CustomInputDateTypes";
import icons from "../../../../UIKit/shared/icons";

/** Поле ввода в модальном окне */
export default function PanelInputDate({
  label,
  value,
  setValue = () => {},
  style,
  disabled,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: FieldConfig & {
  startDate?: string;
  setStartDate?: (v: string) => void;
  endDate?: string;
  setEndDate?: (v: string) => void;
}) {
  const showSingle = disabled && value;
  return (
    <div className="panel-input">
      <span className={"panel-input__label"}>{label}</span>
      <div className="panel-input__field">
        {showSingle ? (
          <CustomInput
            buttons={
              <InputButton svg={icons.Calendar} clickHandler={() => {}} />
            }
            value={value}
            setValue={setValue}
            style={style}
            disabled={true}
          />
        ) : (
          <div className="panel-input__date">
            <CustomInputDate
              type={InputDateType.date}
              value={startDate || ""}
              setValue={setStartDate ?? (() => {})}
              style={style}
              disabled={disabled}
            />
            <span style={{ color: "#AAABAD", padding: "0 2px" }}>–</span>
            <CustomInputDate
              type={InputDateType.date}
              value={endDate || ""}
              setValue={setEndDate ?? (() => {})}
              style={style}
              disabled={disabled}
              startDate={startDate}
            />
          </div>
        )}
      </div>
    </div>
  );
}
