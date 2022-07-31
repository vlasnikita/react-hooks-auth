import styled, {css} from "styled-components";

export const baseRowStyle = css`
  height: 60px;
  width: 100%;
  border-radius: 8px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
`;

export const Header = styled.h1`
  font-size: 64px;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 40px;
  left: 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 640px;
  justify-content: center;
`


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

interface InputProps { error: boolean; }
export const Input = styled.input<InputProps>`
  ${baseRowStyle}
  border-color: ${props => props.error ? "#E26F6F" : "#F5F5F5"};
  color: ${props => props.error ? "#E26F6F" : "#232323"};
  border-width: 1px;
  border-style: solid;
  background-color: #f5f5f5;
  outline: none;
  margin-top: 10px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 16px;
`

export const Label = styled.label`
  font-size: 16px;
  color: #1f1f1f;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  height: 20px;
`
export const Checkbox = styled.input`
  position: absolute;
  left: 0;
  opacity: 0.01;

  & + label {
    position: relative;
    padding-left: 34px;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    user-select: none;
  }

  & + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 18px;
    width: 18px;
    border: 1px solid #000;
    border-radius: 4px;
  }

  & + label:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 2px;
    height: 14px;
    width: 14px;
    background-color: #4A67FF;
    transition: all .2s;
  }

  &:not(:checked) + label:after {
    opacity: 0;
  }

  &:checked + label:after {
    opacity: 1;
  }
`

interface ButtonProps { color: string; bg: string; width: string; }
export const Button = styled.input<ButtonProps>`
  ${baseRowStyle}
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  border: none;
  color: ${props => props.color};
  background-color: ${props => props.bg};
  width: ${props => props.width};

  &:disabled{
    opacity: 0.565;
  }
`

export const ServerError = styled.div`
  ${baseRowStyle}
  background-color: #F5E9E9;
  border: 1px solid #E26F6F;
  display: flex;
  align-items: center;
  padding: 0 54px;
  font-size: 14px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 28px;

  &:before{
    content: '!';
    position: absolute;
    left: 22px;
    top: 20px;
    background-color: #FFC8C8;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    text-align: center;
    line-height: 21px;
    color: #EE6565;
  }
`


export const ClientError = styled.span`
  margin-top: 8px;
  color: #E26F6F;
`