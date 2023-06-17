import React from "react";
import { Input} from "antd";
import "../App.css";

const InputField = ({ value, label, placeholder, type, onChange }) => {
   
  
    return (
      <div >
        {label && <label style={{ fontWeight: "bold" }} htmlFor="input-field">{label}</label>}
        <Input
          type={type}
          value={value}
          
          placeholder={placeholder}
         ></Input>
      </div>
    );
  };
  
  export default InputField;