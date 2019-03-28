import React from "react";
import "./TextInput.css";

export const TextInput = (props:{ type?:string, label:string, value?:string, placeholder:string, onChange?:(s:string)=>void }) => (
  <div className="simple-form-group">
    {props.label && <label className="simple-text-label">{props.label}</label>}
    <input
      type={props.type}
      className="simple-text-input"
      value={props.value}
      placeholder = {props.placeholder}
      onChange={e => props.onChange && props.onChange(e.target.value)}
    />
  </div>
);