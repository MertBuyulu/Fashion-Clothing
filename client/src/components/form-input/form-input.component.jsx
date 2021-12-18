import React from "react";
//styled components
import * as S from "./form-input.styles";
// if user enters something then the class name will be shrink form-input otherwise form-input
const FormInput = ({
  id,
  handleChange,
  label,
  value,
  textArea,
  ...otherProps
}) => {
  return (
    <S.FormWrapper>
      {!textArea ? (
        <S.FormInput
          id={id}
          value={value}
          onChange={handleChange}
          {...otherProps}
        />
      ) : (
        <S.TextArea
          id={id}
          value={value}
          onChange={handleChange}
          maxLength={150}
          {...otherProps}
        />
      )}
      {label ? (
        <S.FormInputLabel
          htmlFor={id}
          className={`${value.length ? "shrink" : ""}`}
        >
          {label}
        </S.FormInputLabel>
      ) : null}
    </S.FormWrapper>
  );
};

export default FormInput;
