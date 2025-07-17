import React, { useState } from "react";
import { FieldConfig } from "../../../shared/types";
import CustomInput from "../../../../UIKit/CustomInput/CustomInput";

/** Поле ввода в модальном окне */
export default function PanelInput({
  label,
  value,
  setValue = () => {},
  style,
  disabled,
}: FieldConfig) {
  return (
    <div className="panel-input">
      <span className={"panel-input__label"}>{label}</span>
      <div className="panel-input__field">
        <CustomInput
          value={value}
          setValue={setValue}
          style={style}
          disabled={disabled}
        />
      </div>
    </div>
  );
}
