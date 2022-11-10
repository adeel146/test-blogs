import React from "react";
import styled from "styled-components";

const InputGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 0 0 10px 0;
`;

export const StyledButton = styled.button`
  border: 2px solid #ffb100;
  background-color: ${(props) =>
    props.variant === "outline" ? "#fff" : "#ffb100"};
  color: ${(props) => (props.color ? props.color : "#000000")};
  padding: ${(props) => (props.padding ? props.padding : "10px 70px")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: ${(props) => (props.margin ? props.margin : "")};
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "1rem"};
  width: ${(props) => (props.width ? props.width : "max_content")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "max-content")};

  cursor: pointer;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#ffb100"};
    color: ${(props) => (props.variant !== "outline" ? "#ffb100" : "#000000")};
  }
  @media (max-width: 780px) and (min-width: 500px) {
    padding: ${(props) => (props.padding ? props.padding : "10px 24px")};
    width: ${(props) => (props.tWidth ? props.tWidth : "")};
  }
  @media (max-width: 480px) {
    padding: ${(props) => (props.padding ? props.padding : "8px 16px")};
    min-width: ${(props) => (props.minWidth ? props.minWidth : "max-content")};
    width: ${(props) => (props.mWidth ? props.mWidth : "")};
  }
`;

const InputLabel = styled.label`
  color: black;
  top: 27px;
  background: #ffffff;
  font-weight: ${(props) => (props.labelWeight ? props.labelWeight : 600)};
  transition: 300ms;
`;

const InputField = styled.input`
  outline: none;
  padding: 5px 0px 0 0px;
  border: none;
  border-bottom: ${(props) =>
    props.error ? "2px solid red" : "2px solid #ffb100"};
  font-size: 18px;
  width: ${(props) => (props.width ? props.width : "20ch")};
  @media (max-width: 480px) {
    width: 100% !important;
  }

  &:focus {
    border-bottom: 2px solid black;
  }

  &:valid + ${InputLabel} {
    top: -1px;
    padding: 0 3px;
    font-size: 14px;
    color: #ffb100;
  }

  &:focus + ${InputLabel} {
    padding: 0 3px;
    font-size: 14px;
    color: #ffb100;
    transition: 300ms;
  }
`;

const PasswordInput = styled(InputField).attrs({
  type: "password",
})`
  color: black;
  display: inline-flex;

  @media (max-width: 480px) {
    width: 100% !important;
  }
`;

export const TextInputGroup = ({ id, label, labelWeight, width, ...rest }) => {
  return (
    <InputGroup>
      <InputLabel htmlFor={id} labelWeight={labelWeight}>
        {label}
      </InputLabel>

      <InputField id={id} width={width} {...rest} />
    </InputGroup>
  );
};

export const PasswordInputGroup = ({ id, label, labelWeight, ...rest }) => {
  return (
    <InputGroup>
      <InputLabel htmlFor={id} labelWeight={labelWeight}>
        {label}
      </InputLabel>

      <PasswordInput id={id} {...rest} />
    </InputGroup>
  );
};

export const SubmitButton = styled(StyledButton).attrs({
  type: "submit",
})`
  color: ${(props) => (props.color ? props.color : "black")};
`;

export const AnchorButton = styled.button`
  border: none;
  color: ${(props) => (props.color ? props.color : "#ffb100")};
  background: transparent;
  &:hover {
    color: blue;
    cursor: pointer;
  }
`;
