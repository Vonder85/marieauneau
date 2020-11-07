import React, { ChangeEvent } from "react";
import "./InputText.scss";

/**
 * Props de l'input
 */
export interface InputTextProps {
  label?: string;
  type?: "text" | "email" | "password" | "number" | "color";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder?: string;
  required?: boolean;
  name: string;
  icon?: string;
  disabled?: boolean;
}
const InputText = (props: InputTextProps) => {
  return (
    <div className={`InputText ${props.disabled ? "disabled" : ""}`}>
      {props.label && (
        <label htmlFor={props.name}>
          {props.label}
          {props.required && <span className="required-dot"> *</span>}
        </label>
      )}
      <input
        className={props.icon ? "with-icon" : ""}
        type={props.type ? props.type : "text"}
        onChange={(e) => props.onChange && props.onChange(e)}
        value={props.value}
        placeholder={props.placeholder}
        name={props.name}
        id={props.name}
        required={props.required}
        disabled={props.disabled}
      />
    </div>
  );
};
export default InputText;
