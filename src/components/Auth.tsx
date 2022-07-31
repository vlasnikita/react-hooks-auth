import React, {useState} from 'react';
import { useForm, Resolver } from "react-hook-form";
import {useNavigate} from 'react-router-dom';

import {authUser} from '../api/index';
import * as C from "../styles/components";

type FormValues = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const resolver: Resolver<FormValues> = async (values) => {
  let errors = {}
  !values.login && Object.assign(errors, { login: { type: "required" }});
  !values.password && Object.assign(errors, { password: { type: "required" }});

  return { values, errors };
};

interface AuthProps {setActiveUser: any;}

export default function Auth({setActiveUser}: AuthProps) {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: resolver,
    defaultValues: { rememberMe: true }
  });

  const onSubmit = handleSubmit(async (data) => {
    setDisableSubmit(true);

    console.log(data);
    const res: any = await authUser(data)
    if(res.status === 200) {
      setActiveUser(data.login)
      navigate('/profile')
    }
    else {
      const json = await res.json()
      setServerError(json.message)
      setDisableSubmit(false)
      reset()
    }
  });

  return (
    <C.Form onSubmit={onSubmit}>
      {serverError && <C.ServerError>{serverError}</C.ServerError>}
      
      <C.InputContainer className={`errors?.password &&`}>
        <C.Label>Логин</C.Label>
        <C.Input {...register("login")} error={!!errors?.login} />
        {errors?.login && <C.ClientError>Обязательное поле</C.ClientError>}
      </C.InputContainer>

      <C.InputContainer>
        <C.Label>Пароль</C.Label>
        <C.Input {...register("password")} error={!!errors?.password} type="password" />
        {errors?.password && <C.ClientError>Обязательное поле</C.ClientError>}
      </C.InputContainer>

      <C.CheckboxContainer>
        <C.Checkbox type="checkbox" {...register("rememberMe")} id="rememberMe" />
        <C.Label htmlFor="rememberMe">Запомнить пароль</C.Label>
      </C.CheckboxContainer>

      <C.Button 
        type="submit" 
        value="Войти" 
        disabled={disableSubmit}
        color="#FFF"
        bg="#4A67FF"  
        width='100%'
      />
    </C.Form>
  );
}

